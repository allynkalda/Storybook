import React from 'react'

export default function Button({ status, title, onClick }) {
    return (
        <div>
            <button style={status === 'success' ? { color: 'red'} : { color: 'blue'}} 
            onClick={onClick}>{title}</button>
        </div>
    )
}
