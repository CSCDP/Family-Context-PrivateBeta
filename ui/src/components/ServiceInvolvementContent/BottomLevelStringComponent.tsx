import React from 'react'

const BottomLevelStringComponent: React.FC = (props) => {

    return props.children !== undefined ? <>{props.children}<br /></> : null
}

export default BottomLevelStringComponent;