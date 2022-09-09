
import React, { useRef, useState } from 'react'
import { Shadow, Sparkles, useCursor } from '@react-three/drei'
import Glow from '../Glow/Glow'


const Box = ({ load, img, url, size = 1, amount = 50, color = 'white', emissive, glow, ...props }) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useCursor(hovered, /*'pointer', 'auto'*/)

    return (

        < mesh
            {...props}
            ref={mesh}
            scale={active ? 1.1 : 1}

            onClick={(e) => load(e, url, active)}
            onPointerEnter={(e) => { setActive(true); setHover(true); }}
            onPointerLeave={(e) => { setActive(false); setHover(false); }}
        >

            <boxGeometry args={[1, 1, 1]} />
            {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
            {/* <meshPhysicalMaterial roughness={0} color={'red'} emissive={'red'} envMapIntensity={0.2} /> */}


            <Sparkles count={amount} scale={size * 1.4} size={6} speed={0.4} />
            <Shadow rotation={[-Math.PI / 2, 0, 0]} scale={size} position={[0, -size, 0]} color={emissive} opacity={0.5} />
            <Glow scale={size * 0.9} near={-10} color={glow || emissive || color} />

            <meshStandardMaterial map={img} />
        </mesh >

    )
}

export default Box