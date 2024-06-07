import {useState} from 'react'
import {Container, Image, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [lockState, setLockState] = useState({
    image: 'https://assets.ccbp.in/frontend/hooks/lock-img.png',
    heading: 'Your Device is Locked',
    lock: 'Unlock',
    alt: 'lock',
  })

  const onClickButton = () => {
    setLockState(prevState => {
      if (prevState.lock === 'Unlock') {
        return {
          image: 'https://assets.ccbp.in/frontend/hooks/unlock-img.png',
          heading: 'Your Device is Unlocked',
          lock: 'Lock',
          alt: 'unlock',
        }
      } else {
        return {
          image: 'https://assets.ccbp.in/frontend/hooks/lock-img.png',
          heading: 'Your Device is Locked',
          lock: 'Unlock',
          alt: 'lock',
        }
      }
    })
  }

  return (
    <Container>
      <Image src={lockState.image} alt={lockState.alt} />
      <Heading>{lockState.heading}</Heading>
      <Button type="button" onClick={onClickButton}>
        {lockState.lock}
      </Button>
    </Container>
  )
}

export default Unlock
