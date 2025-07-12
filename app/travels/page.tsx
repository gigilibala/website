import { LogAnalytics } from '@/LogAnalytics'
import Travels from '@src/components/Travels'

const eventParm = { page: 'travels' }

export default function Page() {
  return (
    <>
      <LogAnalytics eventName='page_view' eventParams={eventParm} />
      <Travels />
    </>
  )
}
