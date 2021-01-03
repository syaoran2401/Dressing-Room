import React, { useRef, useState } from 'react'
import { selectItemAction } from '../../redux/actions/dessingRoomActions'
import { useDispatch, useSelector } from 'react-redux'
import { useSpring, animated, useSprings, useTrail } from 'react-spring'




export default function TopClothes(props) {

    const { topClothesItem } = props
    const dispatch = useDispatch()


    // const [propsAnimationTransform,setAtt] = useSpring(() =>{
    //     return {
    //         from: { scale: 0.8},
    //         to: { scale: 1},
    //         reset: true
    //     }
    // })

    let arrAnimation = [
        { transform: 'rotate(0deg)', position: "absolute", left: 0 },
        { transform: 'rotate(0deg)', position: "absolute", left: -227 },
        { transform: 'rotate(0deg)', position: "absolute", left: 0 },
        { transform: 'rotate(0deg)', position: "absolute", left: 0 },
        { transform: 'rotate(0deg)', position: "absolute", left: 0 },
    ]

    const [propsAnimation, settAtt] = useSprings(arrAnimation.length, arrAnimation.map(item => {
        return {
            transform: item.transform,
            position: item.position,
            left: item.left,
            from: {
                transform: 'rotate(0deg)',
                position: "absolute",
                left: 28,
            }
        }
    }))


    const [status, setStatus] = useState(true);
    const [propsAnimation2, settAtt2] = useTrail(arrAnimation.length, () => {
        return {
            opacity: status ? 1 : 0,
            from: { opacity: 0},
            config: { duration: 1000 }
        }
    })


    const [propsAnimationRotate, setAtt] = useSpring(() => {
        return {
            from: { transform: 'rotate(0deg)', position: "absolute", left: 28, opacity:1 },
            to: { transform: 'rotate(0deg)', position: "absolute", left: 28, opacity:1},
            config:{duration: 2000},
            reset: true,
        }
    })


    const { opacity, transform } = useSpring({
        from: {
            opacity: 0.1,
            transform: 'translateY(15%)'
        },
        to: {
            opacity: 1, transform: 'translateY(0)'
        },
        config: { duration: 1000 }
    })

    return (
        <div>
            {propsAnimation.map((propsAni, index) =>  (
            <animated.div style={propsAni}>123</animated.div>
            )) 
            }

      


            <animated.div className="card text-center"
                style={{ transform, opacity }
                } >

                {/* <animated.img src={topClothesItem.imgSrc_jpg} alt={topClothesItem.imgSrc_jpg} /> */}

                {propsAnimation2.map((item, index) => {
                return  <animated.img key={index} style={item} src={topClothesItem.imgSrc_jpg} alt={topClothesItem.imgSrc_jpg} />
            })}


                <animated.img src={topClothesItem.imgSrc_jpg} alt={topClothesItem.imgSrc_jpg} style={
                    propsAnimationRotate
                    // transform: propsAnimationTransform.scale.interpolate(scale => `scale(${scale})`)
                } />
                <h4><b>{topClothesItem.name}</b></h4>
                <button onClick={() => {
                    // setAtt({ scale: 0.5 })
                    // setAtt({ scale: 1 })
                    setAtt({transform: 'rotate(360deg)', left: 1200, opacity:0 })
                    // set({position: "absolute" ,transform:'rotate(360deg)'})
                    dispatch(selectItemAction(topClothesItem))
                }}>Thử đồ</button>
            </animated.div>
        </div>
    )
}
