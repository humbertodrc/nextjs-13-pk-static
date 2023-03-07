import { useRouter } from 'next/router';
import React from 'react'

const PokemonPage = () => {

  const router = useRouter();
  console.log(router.query.id);

  return (
    <div>Hola Rebeca</div>
  )
}

export default PokemonPage;
