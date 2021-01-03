import React from 'react'

export default function ModelItem(props) {
    const {item} = props
    console.log(item)
    return (
        <div>
            <div className="hairstyle" style={{ width: 1000, height: 1000, position: 'absolute', top: '-75%', right: '-57%', transform: 'scale(0.15)', zIndex: 4 }} background={item.background}></div>
        </div>
    )
}
