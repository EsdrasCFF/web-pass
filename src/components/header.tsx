import logoIcon from '../assets/logo.svg'


export function Header() {
  return (
    <header className='flex py-2 items-center gap-5 mt-5' >
      <img src={logoIcon} alt='Logo' />
      
      <nav className='flex gap-5 font-medium text-sm' >
        <a href='' className='text-zinc-400' >Eventos</a>
        <a href='' >Participantes</a>
      </nav>
    </header>
  )
}