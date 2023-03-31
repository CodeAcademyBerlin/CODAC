import Button from './components/buttons/Button'
import MainContainer from './components/containers/MainContainer'

function App() {
  return (
    <MainContainer>
      <Button bg='bg-dark' text='text-primary'>
        add student
      </Button>
      <Button>other action</Button>
    </MainContainer>
  )
}

export default App
