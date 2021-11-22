import React, { Fragment } from 'react'
import { Flex } from './styles'

function Category({ name, image, status, species, gender }) {
  return (
    <Fragment>
      <Flex>
        <img src={image} alt={name} />
        <p>Name: { name }</p>
        <p>Status: { status }</p>
        <p>Species: { species }</p>
        <p>Gender: { gender }</p>
      </Flex>
    </Fragment>
  )
}

export { Category }
