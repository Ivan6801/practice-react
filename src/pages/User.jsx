import React, { useState, useEffect } from 'react'
import { Flex, FlexText, Img } from './styles/user'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './styles/Button.css'

const User = () => {
  const {id} = useParams()
  const [pueblo, setPueblo] = useState([])

  useEffect(() => {
    async function getData() {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const users = await data.json()
      setPueblo(users)
    }
    getData()
  }, [id])

  return (
    <>
    <div className='flex-center'>
      <Link className='btn' to='/'> 🏡 Home</Link>
    <Flex>
        <Img src={pueblo.image} alt={pueblo.name} />  
        <FlexText>
          <span>Name: {pueblo.name}</span>
          <span>Status: {pueblo.status}</span>
          <span>Species: {pueblo.species}</span>
          <span>Gender: {pueblo.gender}</span> 
        </FlexText>
    </Flex>
    </div>
    </>
  )
}

export default User
