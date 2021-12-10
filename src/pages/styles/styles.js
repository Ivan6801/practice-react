import styled from 'styled-components'

export const Listas = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 900px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Flex = styled.div`
  padding: 20px;
  border: none;
  box-shadow: 1px 1px 14px 1px #00f92a87;
  background-color: #3C3E44;
  border-radius: 10px;
  margin: 10px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`


export const Text = styled.p`
  color: #fff;
`