function Sugestao(props) {
    return (
        <div class="sugestao">
        <div class="usuario">
            <img src={props.src} />
            <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.reason}</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
    )
}

export default function Sugestoes() {

    const sugestoes = [
        {src:"assets/img/bad.vibes.memes.svg", name:"bad.vibes.memes", reason:"Segue você"},
        {src:"assets/img/chibirdart.svg", name:"chibirdart", reason:"Segue você"},
        {src:"assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar", reason:"Novo no Instagram"},
        {src:"assets/img/adorable_animals.svg", name:"adorable_animals", reason:"Segue você"},
        {src:"assets/img/smallcutecats.svg", name:"smallcutecats", reason:"Segue você"}
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(s => <Sugestao src={s.src} name={s.name} reason={s.reason} />)}
        </div>
    )
}