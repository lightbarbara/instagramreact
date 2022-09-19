function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.src} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

export default function Stories() {

    const stories = [
        {src:"assets/img/9gag.svg", name:"9gag"},
        {src:"assets/img/meowed.svg", name:"meowed"},
        {src:"assets/img/barked.svg", name:"barked"},
        {src:"assets/img/nathanwpylestrangeplanet.svg", name:"nathanwpylestrangeplanet"},
        {src:"assets/img/wawawicomics.svg", name:"wawawicomics"},
        {src:"assets/img/respondeai.svg", name:"respondeai"},
        {src:"assets/img/filomoderna.svg", name:"filomoderna"},
        {src:"assets/img/memeriagourmet.svg", name:"memeriagourmet"}
    ]

    return (
        <div class="stories">
            {stories.map((s) => <Story src={s.src} name={s.name}/>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}