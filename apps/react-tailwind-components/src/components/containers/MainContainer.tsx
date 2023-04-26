import type { typeChildren } from '../../types/types'

const MainContainer = ({ children }: typeChildren) => {
  return (
    <section className='flex h-screen  flex-col items-center justify-center bg-gradient-to-br from-violet-200 to-fuchsia-100'>
      {children}
    </section>
  )
}

export default MainContainer
