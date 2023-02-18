import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import React, { lazy } from 'react'

export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>

      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='Pokemon Dito' width={70} height={70} priority  />

      <Text color='white' h2>P</Text>
      <Text color='white' h3>okémon</Text>
      <Spacer css={{flex:1}} />
      <Text color='white'>Favoritos</Text>
    </div>
  )
}
