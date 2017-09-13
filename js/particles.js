AFRAME.registerComponent('particle-system', {
	    schema: {

	    },

	    init: function() {
            var canvas = generateTexture(5,5, '#FA0');
            var texture = new THREE.CanvasTexture(canvas);
            texture.wrapS = THREE.ClampToEdgeWrapping;
        	texture.wrapT = THREE.ClampToEdgeWrapping;

            // The number of particles in a particle system is not easily changed.
            var particleCount = 300;
     
            // Particles are just individual vertices in a geometry
            // Create the geometry that will hold all of the vertices
            var particles = new THREE.Geometry();
 
            // Create the vertices and add them to the particles geometry
            for (var p = 0; p < particleCount; p++) {
     
                // This will create all the vertices in a range of -200 to 200 in all directions
                var x = (Math.random() * 2)-1;
                var y = (Math.random() * 2)-1;
                var z = (Math.random() * 2)-1;               
                // Create the vertex
                var particle = new THREE.Vector3(x, y, z);
         
                // Add the vertex to the geometry
                particles.vertices.push(particle);
            }
 
            // Create the material that will be used to render each vertex of the geometry
            var particleMaterial = new THREE.PointsMaterial(
                {color: 0xffaa00, 
                 size: 0.2,
                 transparent: false,
            });
            particleMaterial.alphaTest = 0.5;

            // Create the particle system
            this.particlesys = new THREE.Points(particles, particleMaterial);
 
            this.el.setObject3D('particle-system', this.particlesys);

            
	    },

	    update: function (oldData) {

	    },

	    tick: function(time, dt) {
            var verts = this.particlesys.geometry.vertices;
            for(var i = 0; i < verts.length; i++) {
                var vert = verts[i];
                if (vert.y < -20) {
                    vert.y = (Math.random()*20)-10;
                }
                if (vert.y > 20){
                    vert.y = (Math.random()*20)-10;
                }
                vert.y = vert.y + (0.01 * dt);
            }
            this.particlesys.geometry.verticesNeedUpdate = true;     
	    },

	    remove: function() {
	        // Remove particle system.
	        this.el.removeObject3D('particle-system');
	    },

});

