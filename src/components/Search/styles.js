import styled from "styled-components";

export const Input = styled.input`
  width: 600px;
  height: 40px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  border: 2px solid #3C3E44;
  @media (max-width: 650px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 280px;
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`