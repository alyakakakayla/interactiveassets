import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

document.getElementById('first-message').style.display="block";
document.getElementById('butterflies-credits').style.display="none";
document.getElementById('blackhole-credits').style.display="none";
document.getElementById('earth-credits').style.display="none";
document.getElementById('gits-credits').style.display="none";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let mouseX = window.innerWidth/2;
let mouseY = window.innerHeight/2;
let object;
let selectedObject = "butterflies";
let controls;
const gltfLoader = new GLTFLoader();
let mixer;

document.getElementById("butterflies-button").addEventListener("click", loadButterflies);
document.getElementById("blackhole-button").addEventListener("click", loadBlackhole);
document.getElementById("earth-button").addEventListener("click", loadEarth);
document.getElementById("gits-button").addEventListener("click", loadGits);

function loadButterflies() {
    document.getElementById('first-message').style.display="none";
    document.getElementById('butterflies-credits').style.display="block";
    document.getElementById('blackhole-credits').style.display="none";
    document.getElementById('earth-credits').style.display="none";
    document.getElementById('gits-credits').style.display="none";

    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }

    selectedObject = "butterflies";

    gltfLoader.load(
        `./images/${selectedObject}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;
            object.position.set(-50, -.7, 0);
            scene.add(object);
            mixer = new THREE.AnimationMixer(object);
            const clips = gltf.animations;
            // const clip = THREE.AnimationClip.findByName(clips, 'HeadAction');
            // const action = mixer.clipAction(clip);
            // action.play();
            clips.forEach(function(clip) {
                const action = mixer.clipAction(clip);
                action.play();
            })
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total*100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );

    const topLeftLight = new THREE.DirectionalLight(0xFFFFFF, 6); //color, intensity
    topLeftLight.position.set(500,500,500);
    topLeftLight.castShadow = true;
    scene.add(topLeftLight);

    const topLight = new THREE.DirectionalLight(0xFFFFFF, 5);
    scene.add(topLight);

    const bottomLight = new THREE.DirectionalLight(0xFFFFFF, 3);
    bottomLight.position.set(500,-500,500);
    scene.add(bottomLight);

    controls = new OrbitControls(camera, renderer.domElement);
}

function loadBlackhole() {
    document.getElementById('first-message').style.display="none";
    document.getElementById('butterflies-credits').style.display="none";
    document.getElementById('blackhole-credits').style.display="block";
    document.getElementById('earth-credits').style.display="none";
    document.getElementById('gits-credits').style.display="none";

    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }

    selectedObject = "blackhole";

    gltfLoader.load(
        `./images/${selectedObject}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;
            object.position.set(0, -.7, 0);
            object.scale.set(100, 100, 100);
            scene.add(object);
            mixer = new THREE.AnimationMixer(object);
            const clips = gltf.animations;
            // const clip = THREE.AnimationClip.findByName(clips, 'HeadAction');
            // const action = mixer.clipAction(clip);
            // action.play();
            clips.forEach(function(clip) {
                const action = mixer.clipAction(clip);
                action.play();
            })
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total*100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );

    const topLeftLight = new THREE.DirectionalLight(0xFFFFFF, 6); //color, intensity
    topLeftLight.position.set(500,500,500);
    topLeftLight.castShadow = true;
    scene.add(topLeftLight);

    const topLight = new THREE.DirectionalLight(0xFFFFFF, 5);
    scene.add(topLight);

    const bottomLight = new THREE.DirectionalLight(0xFFFFFF, 3);
    bottomLight.position.set(500,-500,500);
    scene.add(bottomLight);

    controls = new OrbitControls(camera, renderer.domElement);
}

function loadEarth() {
    document.getElementById('first-message').style.display="none";
    document.getElementById('first-message').style.display="none;"
    document.getElementById('butterflies-credits').style.display="none";
    document.getElementById('blackhole-credits').style.display="none";
    document.getElementById('earth-credits').style.display="block";
    document.getElementById('gits-credits').style.display="none";

    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    
    selectedObject = "earth";

    gltfLoader.load(
        `./images/${selectedObject}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;
            object.position.set(0, -.7, 0);
            object.scale.set(100, 100, 100);
            scene.add(object);
            mixer = new THREE.AnimationMixer(object);
            const clips = gltf.animations;
            // const clip = THREE.AnimationClip.findByName(clips, 'HeadAction');
            // const action = mixer.clipAction(clip);
            // action.play();
            clips.forEach(function(clip) {
                const action = mixer.clipAction(clip);
                action.play();
            })
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total*100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );

    const topLeftLight = new THREE.DirectionalLight(0xFFFFFF, 6); //color, intensity
    topLeftLight.position.set(500,500,500);
    topLeftLight.castShadow = true;
    scene.add(topLeftLight);

    controls = new OrbitControls(camera, renderer.domElement);
}

function loadGits() {
    document.getElementById('first-message').style.display="none";
    document.getElementById('butterflies-credits').style.display="none";
    document.getElementById('blackhole-credits').style.display="none";
    document.getElementById('earth-credits').style.display="none";
    document.getElementById('gits-credits').style.display="block";

    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }

    selectedObject = "gits";

    gltfLoader.load(
        `./images/${selectedObject}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;
            object.position.set(0, -50, 0);
            object.scale.set(160, 160, 160);
            object.rotateY(180);
            scene.add(object);
            mixer = new THREE.AnimationMixer(object);
            const clips = gltf.animations;
            // const clip = THREE.AnimationClip.findByName(clips, 'HeadAction');
            // const action = mixer.clipAction(clip);
            // action.play();
            clips.forEach(function(clip) {
                const action = mixer.clipAction(clip);
                action.play();
            })
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total*100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
    );

    const topLight = new THREE.DirectionalLight(0xFFFFFF, 5);
    scene.add(topLight);

    const bottomLight = new THREE.DirectionalLight(0xFFFFFF, 5);
    bottomLight.position.set(500,-500,500);
    scene.add(bottomLight);

    controls = new OrbitControls(camera, renderer.domElement);
}

/*
gltfLoader.load(
    `./images/${selectedObject}/scene.gltf`,
    function (gltf) {
        object = gltf.scene;
        object.position.set(0, -.7, 0);
        scene.add(object);
        mixer = new THREE.AnimationMixer(object);
        const clips = gltf.animations;
        // const clip = THREE.AnimationClip.findByName(clips, 'HeadAction');
        // const action = mixer.clipAction(clip);
        // action.play();
        clips.forEach(function(clip) {
            const action = mixer.clipAction(clip);
            action.play();
        })
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total*100) + '% loaded');
    },
    function (error) {
        console.error(error);
    }
);
*/

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

camera.position.z = 300;

const clock = new THREE.Clock();
function animate() {
    if(mixer)
    mixer.update(clock.getDelta());
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();

/*
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); //coords 0, 0, 0




camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();
*/
