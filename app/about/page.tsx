import { LogAnalytics } from '@/LogAnalytics'
import About from '@src/components/About'

const eventParm = { page: 'about' }

export default function Page() {
  return (
    <>
      <About />
      <LogAnalytics eventName='page_view' eventParams={eventParm} />
    </>
  )
}
