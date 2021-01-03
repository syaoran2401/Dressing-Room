import React from 'react'
import {selectItemAction } from '../../redux/actions/dessingRoomActions'
import { useDispatch, useSelector } from 'react-redux'
import { useSpring, animated, useSprings } from 'react-spring'

export default function HandBags (props){
    const { handBagsItem } = props
    const dispatch = useDispatch()


    const [propAnimationOpactiy, set1] = useSpring(() => {
        return {
            from: {
                opacity: 0.3,
            },
            to: {
                opacity: 1,
            },
            config: { duration: 2000 },
            reset: true
        }
    })


    const [propsAnimationTransform,setAtt] = useSpring(() =>{
        return {
            from: { scale: 0.5},
            to: { scale: 1},
            reset: true
        }
    })

    const { opacity, transform } = useSpring({
        from: {
            scale: 10,
            opacity: 0.3,
            transform: 'scale(0.1)'
        },
        to: {
            scale: 150,
            opacity: 1,
            transform: 'scale(1)'
        },
        config: { duration: 1000 }
    })


    console.log(propAnimationOpactiy)
    return (
        <animated.div className="card text-center"
            style={
                {
                    transform, opacity  
                }
            } >
            <animated.img src={handBagsItem.imgSrc_jpg} alt={handBagsItem.imgSrc_jpg} style={{
                transform: propsAnimationTransform.scale.interpolate(scale => `scale(${scale})`)
            }} />
            <h4><b>{handBagsItem.name}</b></h4>
            <button onClick={() => {
                setAtt({scale: 1 })
                dispatch(selectItemAction(handBagsItem))
            }}>Thử đồ</button>
        </animated.div>
    )
}