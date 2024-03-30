import Image from 'next/image'
import heroBg from '../images/hero-bg.webp'

const Hero = () => {
  const handleClick = () => {
    const search = document.querySelector('.nextra-search input')
    search.focus()
    console.log(search)
  }

  return (
    <div className='relative'>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <h1 className='text-center text-3xl sm:text-6xl font-bold mb-2 text-black backdrop-blur-sm bg-white/10 rounded-md px-3 py-1'>Aulia's Notebook</h1>
        <p className='text-center text-base sm:text-xl text-black backdrop-blur-sm bg-white/10 rounded-md px-3 py-1 mb-6'>a programmer's notes</p>
        <button
          onClick={handleClick}
          class='px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
        >
          Search in notes
        </button>
      </div>
      <Image src={heroBg} alt='hero background' className='w-full h-[300px] sm:h-[600px] object-cover object-center' />
    </div>
  )
}

export default Hero
