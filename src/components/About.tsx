import { SvgCollection } from '@/misc/constants'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'

export default function About() {
  return (
    <div className='p-10 max-w-3xl'>
      <div className='space-y-10'>
        <h1 className='capitalize'>About me!</h1>
        <hr />

        <div className='first-letter:text-5xl space-y-10'>
          <p>
            Hi there! I'm a software engineer with expertise in building and
            leading a variety of software products and teams. Outside of work, I
            am an avid fan of running, hiking, and traveling.
          </p>
          <p>
            I have deep knowledge of Linux/Unix based operating systems,
            security, large-scale message passing systems, cloud and distributed
            systems, and robotics. I also have full-stack web and mobile
            development experience. I've worked on diverse projects, including
            large-scale distributed systems and clouds, as well as operating
            system and kernel development. I have a passion for building
            innovative products and am always eager to learn about new
            technologies.
          </p>

          <p>
            I graduated from the University of Alabama at Birmingham with a PhD
            degree in Computer Science, where I worked on Exa-scale
            fault-tolerant message passing systems. I've also worked at{' '}
            <Link
              href={'https://www.google.com'}
              target='blank'
              className='link'
            >
              Google
            </Link>{' '}
            and{' '}
            <Link href={'https://www.nuro.ai'} target='blank' className='link'>
              Nuro
            </Link>{' '}
            on a variety of open source and closed source projects. Please refer
            to my <Link href={'/resume'}> resume </Link>
            below for a full list of my experience and skills, including my
            open-source projects.
          </p>
        </div>

        <div>
          Some of the primary languages and tools I have professional experience
          with include:
          <div className='flex flex-wrap mt-10'>
            {Object.entries(SvgCollection).map(([key, value]) => (
              <div key={key}>
                <img
                  src={value}
                  className='devicon'
                  data-tooltip-content={key}
                  data-tooltip-id={key}
                  data-tooltip-float={true}
                />
                <Tooltip id={key} className='capitalize' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
