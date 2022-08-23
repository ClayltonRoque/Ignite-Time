import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import  Logoignite  from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
 
export function Header() {
    return (
        <HeaderContainer>
            <img src={Logoignite} alt="" />
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