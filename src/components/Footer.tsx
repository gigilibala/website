import { NAME } from '@/misc/constants'

export default function Footer() {
  const copyright = String.fromCodePoint(0x00a9)
  const year = new Date().getFullYear()
  return (
    <div className='flex flex-col justify-center items-center'>
      <hr className='bg-gray-400 w-[80%] h-1 my-3' />
      <div>{`${copyright} ${year} ${NAME}`}</div>
    </div>
  )
}
