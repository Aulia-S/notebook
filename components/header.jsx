import Image from 'next/image'

export default function Header({ children, image, className }) {
  return (
    <div className='flex flex-col items-center'>
      {image && <Image src={image} alt='Zod' className={className} width={150} height={150} />}
      {children}
    </div>
  )
}
