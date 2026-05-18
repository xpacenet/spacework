import * as THREE from 'three'

export function buildStarfield(scene) {
  const count    = 8000
  const positions = new Float32Array(count * 3)
  const sizes     = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 800
    positions[i * 3 + 1] = (Math.random() - 0.5) * 800
    positions[i * 3 + 2] = (Math.random() - 0.5) * 800
    sizes[i] = Math.random() * 1.5 + 0.5
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1))

  const mat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.3,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.85,
  })

  scene.add(new THREE.Points(geo, mat))
}
