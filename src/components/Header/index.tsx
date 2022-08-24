import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'



export function Header() {
    return (
        <HeaderContainer>
            <img src='../../../dist/assets/logo.svg' alt="" />
            <nav>
                <NavLink to="/">
                    <Timer size={24} />
                </NavLink >
                <NavLink  to="/history" title='historico'>
                    <Scroll size={24} />
                </NavLink >
            </nav>
        </HeaderContainer>
    )
}

// import React from 'react'
// import imgagemEscolhida from 'endereco-da-imagem'

// export default () => <img src={imgagemEscolhida}/>