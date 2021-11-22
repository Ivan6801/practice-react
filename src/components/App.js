import React, { useEffect, useState } from 'react'
import { Category } from './Category/'
import { Listas } from './styles/styles'
import { Header } from './Header/'
import { Loading } from './Loading'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
      .then(response => {
        setCategories(response.results)

        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
      .catch(e => {
        setLoading(false)
        setError("Hubo un error al obtener los datos, verifique la url o intente más tarde")
      })
  }, [])
    return { categories, loading, error }
}


function App() {    
  const { categories, loading, error } = useCategoriesData()

  const renderList = () => (
    // <ul> 
    //   {
    //     categories.map(category => <li key={category.id}><Category {...category} /></li>) 
    //   }
    // </ul>
    <Listas>
      {error && <h2 style={{ color: 'red', textAlign: 'center' }}>{error}</h2>}
      {loading ? (
        <Loading />
      ) : (
        categories.map(category => <li key={category.id}><Category {...category} /></li>))}
    </Listas>
  )

  // if (error) {
  //   return <h2 style={{ color: 'red', textAlign: 'center' }}>{error}</h2>
  // }

  // if(loading) {
  //   return <h1>Cargando...</h1>
  // }

  return (
    <React.Fragment>
      <Header />
        {renderList()}
    </React.Fragment>
  )
}

export { App }; 
