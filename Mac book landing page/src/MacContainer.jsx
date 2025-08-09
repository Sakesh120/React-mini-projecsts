import { useGLTF } from '@react-three/drei'
import React from 'react'
import { Mesh } from 'three'

const MacContainer = () => {
   let model= useGLTF("/mac.glb");
  return  <primitive object={model.scene} />

}

export default MacContainer
