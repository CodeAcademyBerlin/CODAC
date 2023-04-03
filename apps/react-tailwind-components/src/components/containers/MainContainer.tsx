import type { typeChildren } from '../../types/types'

const MainContainer = ({ children }: typeChildren) => {
  return (
    <section className='flex h-screen  flex-row items-center justify-center bg-gradient-to-br from-violet-200 to-fuchsia-300'>
      {children}
    </section>
  )
}

export default MainContainer
