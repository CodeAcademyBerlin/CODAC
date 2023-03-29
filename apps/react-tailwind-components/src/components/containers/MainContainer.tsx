import type { typeChildren } from '../../types/types'

const MainContainer = ({ children }: typeChildren) => {
  return (
    <section className='flex h-screen items-center justify-center bg-gradient-to-br from-gray-700 to-slate-900'>
      {children}
    </section>
  )
}

export default MainContainer
