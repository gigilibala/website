import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function ImpossibleList() {
  return (
    <div className='px-10 py-10 max-w-3xl'>
      <div className='space-y-10'>
        <h1 className='capitalize'>Impossible list</h1>
        <hr />

        <div className='space-y-10'>
          <p className='block'>
            <Link
              href={'https://impossiblehq.com/impossible-list'}
              className='link'
            >
              Impossible list
            </Link>{' '}
            is a set of goals that are more than just a bucket list. They are
            goals that are so big that you are not sure if you can achieve them.
            The reason I wanted to put them here is to keep myself accountable
            and be able to come back and look at them once in a while to mark
            some off and see what next adventure I should take on!
          </p>

          <div>
            <ImpossibleGroup title='Life'>
              <ImpossibleItem completion='Aug 2010'>Come to US</ImpossibleItem>
              <ImpossibleItem completion='Nov 2023'>
                Obtain US citizenship
              </ImpossibleItem>
              <ImpossibleItem>Obtain a 3rd passport</ImpossibleItem>
              <ImpossibleItem>Buy a small airplane</ImpossibleItem>
              <ImpossibleItem>Buy a blue-water sailing board</ImpossibleItem>
              <ImpossibleItem>Make a video that goes viral</ImpossibleItem>
              <ImpossibleItem>
                Make it into the Guinness world record
              </ImpossibleItem>
            </ImpossibleGroup>

            <ImpossibleGroup title='Entrepreneurship'>
              <ImpossibleItem>Build a SaaS product and sell it</ImpossibleItem>
              <ImpossibleItem>Build a 10 million dollar company</ImpossibleItem>
              <ImpossibleItem>Write a book</ImpossibleItem>
            </ImpossibleGroup>

            <ImpossibleGroup title='Fitness'>
              <ImpossibleItem completion='Now running only in barefoot sandals'>
                Become a barefoot runner
              </ImpossibleItem>
              <ImpossibleItem completion='Sun, Jul 24, 2022'>
                Run a half marathon
              </ImpossibleItem>
              <ImpossibleItem>Run a marathon</ImpossibleItem>
              <ImpossibleItem>Run a 50 miles ultra-marathon</ImpossibleItem>
              <ImpossibleItem>
                Do <s>10</s>, 20 consecutive pull-up
              </ImpossibleItem>
              <ImpossibleItem>
                Do <s>20</s>, 40 consecutive push-up
              </ImpossibleItem>
              <ImpossibleItem>Complete a Spartan race</ImpossibleItem>
              <ImpossibleItem>Complete a triathlon</ImpossibleItem>
              <ImpossibleItem>Climb a tall tree</ImpossibleItem>
              <ImpossibleItem>
                Climb a coconut tree and bring down fresh coconut
              </ImpossibleItem>
            </ImpossibleGroup>

            <ImpossibleGroup title='Learning'>
              <ImpossibleItem>
                Learn to play piano and play Beethoven's "Moonlight Sonata"
              </ImpossibleItem>
              <ImpossibleItem>Learn to play Violin</ImpossibleItem>
              <ImpossibleItem>
                Learn scuba diving and get my diving certificate
              </ImpossibleItem>
              <ImpossibleItem>Learn surfing</ImpossibleItem>
              <ImpossibleItem>Learn skiing</ImpossibleItem>
              <ImpossibleItem>Learn sailing in the ocean</ImpossibleItem>
              <ImpossibleItem>
                Learn to fly a plane and get pilot license
              </ImpossibleItem>
            </ImpossibleGroup>

            <ImpossibleGroup title='Languages'>
              <ImpossibleItem completion='Mother tongue'>Farsi</ImpossibleItem>
              <ImpossibleItem completion='Duh!'>English</ImpossibleItem>
              <ImpossibleItem>
                Mandarin Chinese (in progress, 3000 characters in and basic
                elementary conversations!)
              </ImpossibleItem>
              <ImpossibleItem>Spanish</ImpossibleItem>
              <ImpossibleItem>Turkish</ImpossibleItem>
              <ImpossibleItem>Korean</ImpossibleItem>
              <ImpossibleItem>Japanese</ImpossibleItem>
            </ImpossibleGroup>

            <ImpossibleGroup title='Travel'>
              <ImpossibleItem>Visit every continent</ImpossibleItem>
              <ImpossibleItem>Visit 20 countries</ImpossibleItem>
              <ImpossibleItem>Visit all 50 states</ImpossibleItem>
              <ImpossibleItem>Cross the Sahara Desert</ImpossibleItem>
              <ImpossibleItem>Go on a safari</ImpossibleItem>
              <ImpossibleItem>See the northern light</ImpossibleItem>
              <ImpossibleItem completion='Aug 2023'>
                Visit the Great Wall of China
              </ImpossibleItem>
              <ImpossibleItem>See the Taj Mahal</ImpossibleItem>
              <ImpossibleItem>
                Hike the Inca Trail to Machu Picchu
              </ImpossibleItem>
              <ImpossibleItem>
                Live on a beach for at least 3 months
              </ImpossibleItem>
            </ImpossibleGroup>

            <ImpossibleGroup title='Adrenaline Rush'>
              <ImpossibleItem>Go skydiving</ImpossibleItem>
              <ImpossibleItem>Do paragliding</ImpossibleItem>
            </ImpossibleGroup>

            <ImpossibleGroup title='Events to attend'>
              <ImpossibleItem>Olympics</ImpossibleItem>
              <ImpossibleItem>World Cup</ImpossibleItem>
              <ImpossibleItem>Burning man</ImpossibleItem>
              <ImpossibleItem>Mardi Gras</ImpossibleItem>
            </ImpossibleGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

function ImpossibleGroup(props: PropsWithChildren<{ title: string }>) {
  return (
    <div className='pb-10'>
      <h3>{props.title}</h3>
      <div className='pl-5'>
        <ul className='list-inside list-disc'>
          {props.children ? props.children : null}
        </ul>
      </div>
    </div>
  )
}

// A jsx function that returns a list item with some text and an optional link.
// If the URL and title for the link has been passed in, then the list item
// should have it's original text strike-through and the link should be shown at
// the end inside parenthesis.
type ImpossibleItemProps = {
  completion?: string
  url?: string
}
function ImpossibleItem(props: PropsWithChildren<ImpossibleItemProps>) {
  const done: boolean = !!props.completion
  if (done) {
    return (
      <li>
        <span className='line-through'>{props.children}</span>
        <span className='pl-1'>
          (
          {props.url ? (
            <Link href={props.url} className='link'>
              {props.completion}
            </Link>
          ) : (
            props.completion
          )}
          )
        </span>
      </li>
    )
  } else {
    return <li>{props.children}</li>
  }
}
