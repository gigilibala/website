// A goal is done when it has a `done` note (a date or a short remark).
// `raisedFrom` records an earlier, smaller target that was bumped up.
export type Goal = {
  text: string
  done?: string
  url?: string
  raisedFrom?: string
}
export type GoalGroup = { title: string; goals: Goal[] }

export const IMPOSSIBLE_LIST: GoalGroup[] = [
  {
    title: 'Life',
    goals: [
      { text: 'Come to the US', done: 'Aug 2010' },
      { text: 'Become a US citizen', done: 'Nov 2023' },
      { text: 'Get a third passport' },
      { text: 'Buy a small airplane' },
      { text: 'Buy a blue-water sailboat' },
      { text: 'Make a video that goes viral' },
      { text: 'Get into the Guinness World Records' },
    ],
  },
  {
    title: 'Entrepreneurship',
    goals: [
      { text: 'Build a SaaS product and sell it' },
      { text: 'Build a $10 million company' },
      { text: 'Write a book' },
    ],
  },
  {
    title: 'Fitness',
    goals: [
      {
        text: 'Become a barefoot runner',
        done: 'now running only in barefoot sandals',
      },
      { text: 'Run a half marathon', done: 'Jul 24, 2022' },
      { text: 'Run a marathon' },
      { text: 'Run a 50-mile ultramarathon' },
      { text: 'Do 20 consecutive pull-ups', raisedFrom: '10' },
      { text: 'Do 40 consecutive push-ups', raisedFrom: '20' },
      { text: 'Finish a Spartan race' },
      { text: 'Finish a triathlon' },
      { text: 'Climb a tall tree' },
      { text: 'Climb a coconut tree and bring down a fresh coconut' },
    ],
  },
  {
    title: 'Learning',
    goals: [
      { text: 'Play Beethoven’s “Moonlight Sonata” on the piano' },
      { text: 'Learn to play the violin' },
      { text: 'Learn scuba diving and get certified', done: 'Jul 2024' },
      { text: 'Learn to surf' },
      { text: 'Learn to ski' },
      { text: 'Learn to sail on the ocean' },
      { text: 'Learn to fly and get a pilot license' },
      { text: 'Get the PADI Open Water Diver certification', done: 'Jul 2024' },
    ],
  },
  {
    title: 'Languages',
    goals: [
      { text: 'Farsi', done: 'mother tongue' },
      { text: 'English', done: 'duh!' },
      {
        text: 'Mandarin Chinese (in progress: 3,000 characters and basic conversation)',
      },
      { text: 'Spanish' },
      { text: 'Turkish' },
      { text: 'Korean' },
      { text: 'Japanese' },
    ],
  },
  {
    title: 'Travel',
    goals: [
      { text: 'Visit every continent' },
      { text: 'Visit 20 countries' },
      { text: 'Visit all 50 states' },
      { text: 'Cross the Sahara' },
      { text: 'Go on a safari' },
      { text: 'See the northern lights' },
      { text: 'Visit the Great Wall of China', done: 'Aug 2023' },
      { text: 'See the Taj Mahal' },
      { text: 'Hike the Inca Trail to Machu Picchu' },
      { text: 'Live on a beach for at least three months' },
    ],
  },
  {
    title: 'Adrenaline',
    goals: [{ text: 'Go skydiving' }, { text: 'Go paragliding' }],
  },
  {
    title: 'Events to attend',
    goals: [
      { text: 'The Olympics' },
      { text: 'The World Cup' },
      { text: 'Burning Man' },
      { text: 'Mardi Gras' },
    ],
  },
]
