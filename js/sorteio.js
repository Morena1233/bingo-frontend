let scene, camera, renderer, ball;
let numerosSorteados = [];

init();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    1,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(300, 300);
  document.getElementById("globo3d").appendChild(renderer.domElement);

  // Globo
  const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
  const globeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const globe = new THREE.Mesh(globeGeometry, globeMaterial);
  scene.add(globe);

  // Bolinha
  const ballGeometry = new THREE.SphereGeometry(0.3, 32, 32);
  const ballMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  ball = new THREE.Mesh(ballGeometry, ballMaterial);
  scene.add(ball);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  ball.rotation.y += 0.05;
  renderer.render(scene, camera);
}

function sortearNumero() {
  let numero;
  do {
    numero = Math.floor(Math.random() * 75) + 1;
  } while (numerosSorteados.includes(numero));

  numerosSorteados.push(numero);
  document.getElementById("numero").innerText = numero;
}

