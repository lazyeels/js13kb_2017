AFRAME.registerComponent('car', {
schema: {
    // Dimensions of the ocean area.
    width: {default: 32, min: 0},
    depth: {default: 32, min: 0},
    rotation: {x: -90, y: 0, z: 0},
    // Density of waves.
    density: {default: 10},
  },

  init: function () {
    var el = this.el;
    var x = 0, y = 1.4, z = 0;
    // building
    this.geometry = new THREE.BoxGeometry(7, 6, 6, 2, 2, 2);
    this.material = new THREE.MeshPhongMaterial({
        color: '#CCC',
        opacity: 1,
        side: THREE.DoubleSide,
        shading: THREE.FlatShading,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(x,y,z)
    el.setObject3D('car', this.mesh);

  },
})
