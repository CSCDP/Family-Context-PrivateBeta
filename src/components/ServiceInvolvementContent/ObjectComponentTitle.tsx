import React from 'react'

const ObjectComponentTitle: React.FC<{keyId?: string, title?: string}> = (props) =>{
    if (props.title){
        return <th>{props.title}</th>
    }
    if(props.keyId){
        return <th>{props.keyId}</th>
    }
    return null;
}

export default ObjectComponentTitle;