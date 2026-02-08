let scene, camera, renderer;
let globe, balls = [];
let numerosSorteados = [];

init();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  camera.position.z = 6;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(350, 350);
  document.getElementById("globo3d").appendChild(renderer.domElement);

  // Luz
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  // Globo transparente
  const globeGeometry = new THREE.SphereGeometry(2.5, 64, 64);
  const globeMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.25,
    roughness: 0,
    metalness: 0.1,
    transmission: 1
  });

  globe = new THREE.Mesh(globeGeometry, globeMaterial);
  scene.add(globe);

  // Bolinhas dentro do globo
  for (let i = 0; i < 20; i++) {
    const ballGeo = new THREE.SphereGeometry(0.18, 32, 32);
    const ballMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const ball = new THREE.Mesh(ballGeo, ballMat);

    ball.position.set(
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3
    );

    balls.push(ball);
    scene.add(ball);
  }

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Globo girando
  globe.rotation.y += 0.003;
  globe.rotation.x += 0.001;

  // Bolinhas se mexendo
  balls.forEach(ball => {
    ball.rotation.y += 0.05;
    ball.rotation.x += 0.03;
  });

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

