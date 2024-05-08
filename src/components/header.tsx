import logoIcon from '../assets/logo.svg'
import { NavLink } from './nav-link'


export function Header() {
  return (
    <header className='flex py-2 items-center gap-5 mt-5' >
      <img src={logoIcon} alt='Logo' />
      
      <nav className='flex gap-5 font-medium text-sm' >
        <NavLink href='/eventos' className='text-zinc-400' >Eventos</NavLink>
        <NavLink href='/participantes' >Participantes</NavLink>
      </nav>
    </header>
  )
}