import React from 'react'

export default function Usuario(props) {

    const [username, setUsername] = React.useState(props.username)
    const [picture, setPicture] = React.useState(props.src)

    return (
        <div class="usuario">
            <img onClick={() => setPicture(prompt('Adicione um link para uma nova foto'))} src={picture} />
            <div class="texto">
                <strong>{props.name}</strong>
                <span>
                    {username}
                    <ion-icon onClick={() => setUsername(prompt('Digite seu nome'))} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}