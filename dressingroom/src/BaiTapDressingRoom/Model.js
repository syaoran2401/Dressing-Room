import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { animated, useSpring } from 'react-spring';
// import './style.css'
import '../style.css'
import ModelItem from './ModelItem';

export default function Model() {

    const arrayModelItem = useSelector(state => state.DressingRoomReducer.model);


    // const [state, setLike] = useState({ like: 0 })


    const AnimFeTurbulence = animated('feTurbulence')
    const AnimFeDisplacementMap = animated('feDisplacementMap')

    const [open, toggle] = useState(false)
    const { freq, scale, transform, opacity } = useSpring({
        reverse: open,
        from: { scale: 10, opacity: 0, transform: 'scale(0.1)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(0.5)', freq: '0.0, 0.0' },
        config: { duration: 3000 }
    })

    return (
        <div>

            {/* <button onClick={() => {
                setLike({
                    like: state.like + 1
                })
            }}>like</button>
            <div>Like: {state.like}</div> */}
            
            <div className="contain" style={{zIndex:50}}>
                <div className="body" />
                <div className="model" />

                <div className={arrayModelItem[0].name} style={{ width: 1000, height: 1000, background: arrayModelItem[0].background, position: 'absolute', top: '-75%', right: '-57%', transform: 'scale(0.15)', zIndex: 4 }} />

                <div className={arrayModelItem[1].name} style={{ width: 500, height: 1000, background: arrayModelItem[1].background, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4 }} />

                <div className={arrayModelItem[2].name} style={{ width: 500, height: 500, background: arrayModelItem[2].background, position: 'absolute', top: '-9%', left: '-5%', zIndex: 3, transform: 'scale(0.5)' }} />

                <div className={arrayModelItem[3].name} style={{ width: 500, height: 1000, background: arrayModelItem[3].background, position: 'absolute', top: '-30%', left: '-5%', zIndex: 2, transform: 'scale(0.5)' }} />

                <div className={arrayModelItem[4].name} style={{ width: 500, height: 1000, background: arrayModelItem[4].background, position: 'absolute', bottom: '-40%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 4 }} />

                <div className={arrayModelItem[5].name} style={{ width: 500, height: 1000, background: arrayModelItem[5].background, position: 'absolute', bottom: '-37%', right: '-3.5%', transform: 'scale(0.5)', zIndex: 1 }} />

                <animated.div className={arrayModelItem[6].name} style={{ transform, opacity, backgroundImage: arrayModelItem[6].background }} >
                    <filter id="water">
                        <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="10" result="TURB" seed="8" />
                        <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
                    </filter>
                </animated.div>
            </div>

        </div>
    )
}
