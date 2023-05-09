import { NAME } from '@/misc/constants'

export default function Footer() {
  const copyright = String.fromCodePoint(0x00a9)
  const year = new Date().getFullYear()
  return (
    <div className='flex flex-col justify-center items-center'>
      <hr className='w-[80%] my-7' />
      <div>{`${copyright} ${year} ${NAME}`}</div>
    </div>
  )
}
