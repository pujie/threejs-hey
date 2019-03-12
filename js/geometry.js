makeBox = function(scene,camera){
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color:0x00ff00})
    var cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    camera.position.z = 5;
    return {
        geometry:geometry,material:material,cube:cube
    }
}
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    box.cube.rotation.x += 0.01;
    box.cube.rotation.y += 0.01;
}
