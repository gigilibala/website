import Home from '@src/components/Home'

import { LogAnalytics } from '@/LogAnalytics'

const eventParm = { page: 'home' }

export default function Page() {
  return (
    <>
      <Home />
      <LogAnalytics eventName='page_view' eventParams={eventParm} />
    </>
  )
}
