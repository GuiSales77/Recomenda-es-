import estilos from './Lateral.module.css'
import {Gear} from '@phosphor-icons/react'
import {User} from '@phosphor-icons/react'
import {Files} from '@phosphor-icons/react'

export function Lateral(){
    return(
        <aside className={ estilos.conteiner }>
            <img className={ estilos.imagemCabecalho } src='https://t4.ftcdn.net/jpg/03/71/56/17/360_F_371561715_LVI4qVJ2hyWMDXdqJNGdktggEzjQuC15.jpg' />

            <div className={ estilos.perfil }>
                <img className={ estilos.avatar } src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9LsnypsLDKoBKHBb6Pbjjv4jvdKW8iG4xekSr6yyy91vXEXpRcFpHCl5szc6XMT1r6k&usqp=CAU' />
                <strong>Netflix</strong>
            </div>
            <div className={ estilos.configuracoes }>
                <p className={ estilos.botao }>
                    <Gear size={20} />
                    <strong>Configurações</strong>
                </p>
            </div>

            <div className={ estilos.conta }>
                <p className={ estilos.botao }>
                    <User size={20} />
                    <strong>Conta</strong>
                </p>
            </div>

            <div className={ estilos.termo }>
                <p className={ estilos.botao }>
                    <Files size={20} />
                    <strong>Termos</strong>
                </p>
            </div>


        </aside>
    )
}
