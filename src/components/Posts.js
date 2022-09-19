import React from 'react'

function Post(props) {

    const [save, setSave] = React.useState('bookmark-outline')
    const [heart, setHeart] = React.useState("heart-outline")
    const [liked, setLiked] = React.useState(false)
    const [numberLikes, setNumberLikes] = React.useState(props.likes)

    return (
        <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.src_profile} />
                {props.name}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img onClick={liked === false ? () => {setHeart('heart'); setLiked(true); setNumberLikes(numberLikes+1)} : ''} src={props.src_img} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon class={liked ? 'heart' : ''} onClick={liked === false ? () => {setHeart('heart'); setLiked(true); setNumberLikes(numberLikes+1)} : () => {setHeart('heart-outline'); setLiked(false); setNumberLikes(numberLikes-1)}} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon onClick={() => setSave('bookmark')} name={save}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras {numberLikes} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )
}

export default function Posts() {

    const posts = [
        {src_profile:"assets/img/meowed.svg", name:"meowed", likes:101523, src_img:"assets/img/gato-telefone.svg"},
        {src_profile:"assets/img/barked.svg", name:"barked", likes:99159, src_img:"assets/img/dog.svg"}
    ]

    return (
        <div class="posts">
            {posts.map(p => <Post src_profile={p.src_profile} name={p.name} likes={p.likes} src_img={p.src_img} />)}
        </div>
    )
}