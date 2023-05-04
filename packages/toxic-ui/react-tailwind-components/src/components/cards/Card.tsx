import { CardProps } from '../../interfaces/interfaceCard'
import Button from '../buttons/Button'

const Card = ({ title, subtitle, img, text, cta }: CardProps) => {
  return (
    <div className='relative flex h-96 w-80 flex-col items-center rounded bg-neutral-700 p-2 lg:h-80 lg:w-[40rem] lg:flex-row lg:p-1'>
      <div className='h-2/3 w-full  lg:h-full lg:w-2/4 lg:bg-light lg:p-2'>
        <img
          src={img}
          alt={title}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
      <div className='flex h-1/3 w-full flex-col justify-between  bg-primary lg:h-full lg:w-2/4'>
        <h2 className=' text-center text-xl lg:text-2xl'>{title}</h2>
        <p className='overflow-auto'>{text}</p>
        {/* PHONES */}

        <Button label={cta} padding='px-1 py-0' bg='bg-dark' />
      </div>
    </div>
  )
}

export default Card
