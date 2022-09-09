import './App.css';
import { Canvas, useLoader } from '@react-three/fiber'
import Box from './components/Box/Box';
import { Environment, BakeShadows, OrbitControls, ContactShadows } from '@react-three/drei'
import Sphere from './components/Sphere/Sphere';
import hdr from './img/evening_road_01_2k.hdr';

import URL from './config.js'
import { TextureLoader } from 'three';
import githubImg from './img/github.png';

import myPhotoImg from './img/myPhoto.jpg';

const App = ({ env = hdr }) => {

  const [github, myPhoto] = useLoader(TextureLoader, [
    githubImg,
    myPhotoImg
  ])

  const loadUrl = (e, url, active) => {
    if (active)
      window.open(url)
    e.stopPropagation()
  }

  return (
    <div className='wrap'>
      <Canvas shadows camera={{ position: [0, 0, 9], fov: 30 }}>
        <hemisphereLight intensity={0.5} color="white" groundColor="black" />
        <Environment files={env} ground={{ height: 10, radius: 40, scale: 13 }} />
        <Box img={myPhoto} load={loadUrl} url={URL.LINKEDIN} position={[-3, 0, 0]} />
        <Box img={github} load={loadUrl} url={URL.GITHUB} position={[2, 1, -5]} />
        <Sphere load={loadUrl} url={URL.COURSE} position={[2, -2, -1]} emissive="green" color="white" amount={20} glow="lightgreen" size={0.4} />
        <Sphere load={loadUrl} url={URL.WORDS} position={[1, -1.5, -4]} emissive="purple" color="white" amount={20} glow="#ff90f0" size={0.5} />
        <Sphere load={loadUrl} url={URL.MYFANTASY} position={[-1, 0.55, 1]} emissive="orange" color="lightpink" amount={20} glow="#ff9f50" size={0.3} />
        <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
        <BakeShadows />
        <OrbitControls autoRotateSpeed={0.85} zoomSpeed={0.75} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.55} />
      </Canvas>
    </div>
  );
}

export default App;
