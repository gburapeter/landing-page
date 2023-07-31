import { extend } from "@react-three/fiber";

const Windy = {
	uniforms: {
		time: { value: 0 },
	},
	vertexShader: `
    uniform float time;
    varying vec3 vNormal;
    void main() {
      vNormal = normal;
      vec3 newPosition = position + normal * sin(time * 2.0 + position.x * 0.5) * 0.1;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
	fragmentShader: `
    varying vec3 vNormal;
    void main() {
      float intensity = pow(0.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5);
      gl_FragColor = vec4(0.0, 0.5, 1.0, intensity);
    }
  `,
};

extend({ Windy });
