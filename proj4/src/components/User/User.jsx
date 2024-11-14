import React from 'react'
import { useParams } from 'react-router-dom'

export default function User(props) {
    const {id}=useParams()

    return (
        <>
            <h1>User : {id} </h1>
        </>
    )
}
