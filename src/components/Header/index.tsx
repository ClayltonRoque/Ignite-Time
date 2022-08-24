import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import img from '../../../public/assets/Logo.svg'


export function Header() {
    return (
        <HeaderContainer>
            <img src='/assets/Logo.svg' alt="" />
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

