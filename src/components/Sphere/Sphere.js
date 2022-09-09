import { Sparkles, Shadow, useCursor } from '@react-three/drei'
import Glow from '../Glow/Glow'
import { useRef, useState } from 'react'

const Sphere = ({ load, url, size = 1, amount = 50, color = 'white', emissive, glow, ...props }) => {

    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useCursor(hovered, /*'pointer', 'auto'*/)

    return (
        < mesh
            {...props}
            ref={mesh}
            scale={active ? 2 : 1}
            onClick={(e) => load(e, url, active)}

            onPointerEnter={(e) => { setActive(true); setHover(true) }}
            onPointerLeave={(e) => { setActive(false); setHover(false) }}
        >

            <sphereGeometry args={[size, 64, 64]} />
            <meshPhysicalMaterial roughness={0} color={color} emissive={emissive || color} envMapIntensity={0.2} />
            <Glow scale={size * 1.1} near={-5} color={glow || emissive || color} />
            <Sparkles count={amount} scale={size * 2} size={6} speed={0.4} />
            <Shadow rotation={[-Math.PI / 2, 0, 0]} scale={size} position={[0, -size, 0]} color={emissive} opacity={0.5} />
        </mesh >
    )
}
export default Sphere