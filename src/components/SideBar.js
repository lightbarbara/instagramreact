import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar() {

    const usuario = {src:"assets/img/catanacomics.svg", name:"catanacomics", username:"Catana"}

    return (
        <div class="sidebar">
            <Usuario src={usuario.src} name={usuario.name} username={usuario.username} />
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}