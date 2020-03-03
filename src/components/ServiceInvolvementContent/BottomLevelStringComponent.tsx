import React from 'react'

const BottomLevelStringComponent: React.FC = (props) => {

    return props.children != undefined ? <div>{props.children}<br /></div> : null
}

export default BottomLevelStringComponent;