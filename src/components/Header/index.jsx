import React from 'react'
import logo from '../images/Rick_and_Morty.png'
import { Logo } from './styles'

function Header() {
  return (
    <div>
      <Logo src={logo} alt="" />
    </div>
  )
}

export { Header }
