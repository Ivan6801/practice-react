import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../components/Search'
import { Loading } from '../components/Loading'
import { Listas, Flex, Text, Img } from './styles/styles'

const Nosotros = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    setOutput([])
    // eslint-disable-next-line array-callback-return
    data.filter((val) => {
      if(val.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput(output => [...output, val])
      }
    })
  }, [data, input]);

  useEffect(() => {
      setTimeout(() => {
        obtenerDatos() 
      }, 300)
  }, [])

  const obtenerDatos = async () => {
    setLoading(true)
    try {
      const data = await fetch('https://rickandmortyapi.com/api/character/')
      const users = await data.json()
      setData(users.results);
    } catch (e) {
      setError(true);
    }
    setLoading(false)
  }

  if(loading) {
    return <Loading />
  }

  if (error) {
    return <p style={{ color: 'white' }}>Error.</p>;
  }
  
  return (
    <div>
      <div>
        <Search
          input={input}
          setInput={setInput}
        />
      </div>
      <Listas>
        {output.map((item) => {
          return <Flex key={item.id}>
              <Link to={`/character/${item.id}`}>
                <Img src={item.image} alt={item.name} />
                <Text>{item.name}</Text>
              </Link>
            </Flex>
          })
        }
      </Listas>
    </div>

  )
}

export { Nosotros } 
