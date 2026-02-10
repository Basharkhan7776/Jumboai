import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  
  // Silk Pattern Logic (React Bits logic)
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv; 
  float tOffset = uSpeed * uTime;

  // Wave distortion
  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  // The intricate silk pattern formula
  // Keeps light gray curls for text visibility
  float pattern = 0.9 +
                  0.1 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  // Indian Tricolor Gradient Logic
  float gradAngle = -0.5; 
  vec2 gradUv = rotateUvs(vUv - 0.5, gradAngle) + 0.5;

  // Colors
  vec3 saffron = vec3(1.0, 0.6, 0.2);
  vec3 white = vec3(0.98, 0.98, 0.99); // Ultra bright white
  vec3 green = vec3(0.07, 0.53, 0.03);

  // Gradient Mixing
  // Expanded color areas: Green up to 0.35, Saffron starts at 0.65
  // This gives more "room" to colors while keeping the center white.
  
  float greenToWhite = smoothstep(0.15, 0.35, gradUv.y);
  float whiteToSaffron = smoothstep(0.65, 0.85, gradUv.y);

  vec3 flagColor = mix(green, white, greenToWhite);
  flagColor = mix(flagColor, saffron, whiteToSaffron);

  // Combine Pattern and Color
  vec3 finalColor = flagColor * pattern;

  // Apply minimal noise
  vec4 col = vec4(finalColor, 1.0) - rnd / 20.0 * uNoiseIntensity;
  col.a = 1.0;
  
  gl_FragColor = col;
}
`;

const SilkPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: 0.55 }, // Increased speed for more energy
      uScale: { value: 1.5 }, 
      uRotation: { value: -0.5 }, 
      uNoiseIntensity: { value: 0.05 } 
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width * 1.5, viewport.height * 1.5, 1]}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default SilkPlane;