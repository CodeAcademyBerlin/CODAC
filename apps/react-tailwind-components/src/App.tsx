import Button from './components/buttons/Button'
import Card from './components/cards/Card'
import MainContainer from './components/containers/MainContainer'
import RainbowCursor from './components/rainbowcursor/Rainbowcursor'

function App() {
  return (
    <MainContainer>
      <Button bg='bg-dark' label='this is a button' text='text-light' />
      {/* <RainbowCursor /> */}
      <div className='flex flex-col gap-10'></div>
      <div className='flex gap-10'>
        <Card
          key={1}
          title='Skippy'
          text="Meet our lovely feline friend Skippy! This adorable cat has been patiently waiting for someone to give her a loving forever home. She's beautiful, with soft fur and sparkling eyes that will steal your heart.

Although she may seem shy at first, she has a sweet and gentle personality that will quickly win you over. She loves cuddles and head scratches, and will purr contentedly as you pet her.
This cat has been dreaming of finding her perfect match - someone who will give her all the love and attention she deserves. She promises to be your loyal companion and always keep you company."
          cta='rescue me'
          img='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg'
        />
        <Card
          key={2}
          title='Jürgen'
          text="Jürgen is an old cat who resides in Germany. Despite being a feline, he has a steuernummer, which is a tax identification number assigned to individuals in Germany. It's not clear how Jürgen acquired this number, but it's safe to say that he's a special cat."
          cta='rescue me'
          subtitle='I love Olja'
          img='https://www.thesprucepets.com/thmb/aWULXjTWxZbCJ4GixA7JMw8K15w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg'
        />
      </div>
    </MainContainer>
  )
}

export default App
