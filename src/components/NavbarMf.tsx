import { Navbar, NavLinkProps, TrnComponentsProvider  } from '@josegts/ds-components'
import { useState } from 'react'
import logo from '../asset/resource/logo.png'

const NavbarMf = () => {
  const handleCallbackLanguage = (language: string) => {
    console.log(language)
  }
  const languages: any[] = [
    {
      copie: 'Honduras',
      country: 'honduras',
    },{
      copie: 'El Salvador',
      country: 'el-salvador',
    }
  ]
  const [ currentMenu, setCurrentMenu ] = useState('home')

  const links: NavLinkProps[] = [
    {
      title: 'Home',
      onNavigate: () => toggleMenu('home'),
      active: currentMenu === 'home',
    },{
      title: 'Opcion 1',
      onNavigate: () => toggleMenu('opc1'),
      active: currentMenu === 'opc1',
    },
    {
      title: 'Opcion 2',
      onNavigate: () => toggleMenu('opc2'),
      active: currentMenu === 'opc2',
    }
  ]

  const toggleMenu = (menu: string) => {
    setCurrentMenu(menu)
  }
  return (
    <TrnComponentsProvider>
      <Navbar
        callbackLanguage={handleCallbackLanguage}
        contactText='Contacto'
        languages={languages}
        logo={<img src={logo} alt='Tranxact Logo' style={{ width: 'inherit' }} />}
        navLinks={links}
        openText='Abrir'
        closeText='Cerrar'
      />
    </TrnComponentsProvider>
  )
}

export default NavbarMf
