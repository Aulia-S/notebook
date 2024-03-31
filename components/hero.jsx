import Image from 'next/image'
import heroBg from '../images/hero-bg.webp'
import notebookImg from '../images/notebook.png'

const Hero = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <Image src={notebookImg} alt='a notebook' className='w-20 sm:w-40 mb-6' />
        <h1 className='text-center text-3xl sm:text-6xl font-bold mb-2 text-black backdrop-blur-sm bg-white/10 rounded-md px-3 py-1'>Aulia's Notebook</h1>
        <p className='text-center text-base sm:text-xl text-black backdrop-blur-sm bg-white/10 rounded-md px-3 py-1 mb-6'>a programmer's notes</p>
      </div>
      <Image src={heroBg} alt='hero background' className='w-full h-[100vh] object-cover object-center' priority />
    </div>
  )
}

export default Hero
