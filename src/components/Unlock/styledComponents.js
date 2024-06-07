// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3c2940;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  height: 100vh;
`

export const Image = styled.img`
  width: 20%;
  height: 50%;
`

export const Heading = styled.p`
  font-size: 24px;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  border-width: 0px;
  background-color: #06b6d4;
`
