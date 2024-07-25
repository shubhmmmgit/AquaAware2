const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
    requestAnimationFrame(animate);

    raycaster.update(); // Update raycaster to get new intersected objects
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        // Handle interaction
        intersects[0].object.material.color.set(0xff0000);
    }

    renderer.render(scene, camera);
}
const loader = new THREE.GLTFLoader();
loader.load('path/to/your/model.glb', (gltf) => {
    scene.add(gltf.scene);
});
const composer = new THREE.EffectComposer(renderer);
composer.addPass(new THREE.RenderPass(scene, camera));
composer.addPass(new THREE.BloomPass(1.5));

function animate() {
    requestAnimationFrame(animate);
    composer.render();
}
const mixer = new THREE.AnimationMixer(cube);
// Add animations to mixer
function animate() {
    requestAnimationFrame(animate);
    mixer.update(0.01);
    renderer.render(scene, camera);
}
