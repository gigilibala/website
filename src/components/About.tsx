import { SvgCollection } from '@/misc/constants'

export default function About() {
  return (
    <div className='flex flex-col px-10 py-10 w-ma'>
      <div className='space-y-10'>
        <h1 className='capitalize'>About me!</h1>
        <hr />

        <div className='text-justify first-letter:text-5xl'>
          <p>
            I'm a software engineer with expertise in building and leading
            variety of products. I've worked on a variety of different projects,
            from large scale distributed systems and cloud to operating system
            and kernel development. I've build web apps, mobile apps and of
            course large scale system software.
          </p>
        </div>

        <div>
          Primary languages and tools I have professional experience with
          includes:
          <div className='flex flex-wrap mt-10'>
            {Object.values(SvgCollection).map((value) => (
              <img src={value} className='devicon' />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
