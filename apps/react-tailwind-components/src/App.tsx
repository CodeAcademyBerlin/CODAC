import Button from './components/buttons/Button'
import Card from './components/cards/Card'
import MainContainer from './components/containers/MainContainer'

function App() {
  const array = [
    {
      key: 1,
      title: 'osKar',
      text: 'I am beatiful, OK? rescue me now',
      cta: 'rescue me',
      img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
    },
    {
      key: 1,
      title: 'Jürgen',
      text: 'I am german, OK? i have steuernummer',
      cta: 'rescue me',
      subtitle: 'i love olja',
      img: 'https://www.thesprucepets.com/thmb/aWULXjTWxZbCJ4GixA7JMw8K15w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg',
    },
  ]

  return (
    <MainContainer>
      {/* <Button bg='bg-dark' text='text-primary' padding='p-20'>
        <span className='text-5xl'>
          sdjhdf
          <i className='fa-regular fa-user'></i>
        </span>
      </Button>
      <Button padding='px-5 py-10'>other action</Button> */}
      <div className='flex gap-10'>
        <Card
          key={1}
          title='osKar'
          text='I am beatiful, OK? rescue me now  jksdhfasdglkfgjgfhkaslhfsdfs adsfg sdfg sjkdfg lsdg sdk glkdsfbg sdf gsdf gsdf gdsf gdfg ds gs fd  jksdhfasdglkfgjgfhkaslhfsdfs adsfg sdfg sjkdfg lsdg sdk glkdsfbg sdf gsdf gsdf gdsf gdfg ds gs fd  jksdhfasdglkfgjgfhkaslhfsdfs adsfg sdfg sjkdfg lsdg sdk glkdsfbg sdf gsdf gsdf gdsf gdfg ds gs fd I am beatiful, OK? rescue me now  jksdhfasdglkfgjgfhkaslhfsdfs adsfg sdfg sjkdfg lsdg sdk glkdsfbg sdf gsdf gsdf gdsf gdfg ds gs fd  jksdhfasdglkfgjgfhkaslhfsdfs adsfg sdfg sjkdfg lsdg sdk glkdsfbg sdf gsdf gsdf gdsf gdfg ds gs fd  jksdhfasdglkfgjgfhkaslhfsdfs adsfg sdfg sjkdfg lsdg sdk glkdsfbg sdf gsdf gsdf gdsf gdfg ds gs fd'
          cta='rescue me'
          img='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg'
        />
        {/* <Card
          key={2}
          title='Jürgen'
          text='I am german OK? i have steuernummer, jksdhfasdglkfgjgfhkaslhfsdfs adsfg sdfg sjkdfg lsdg sdk glkdsfbg sdf gsdf gsdf gdsf gdfg ds gs fd'
          cta='rescue me'
          subtitle='i love olja'
          img='https://www.thesprucepets.com/thmb/aWULXjTWxZbCJ4GixA7JMw8K15w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg'
        /> */}
      </div>
    </MainContainer>
  )
}

export default App
