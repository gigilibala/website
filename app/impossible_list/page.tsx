import ImpossibleList from '@src/components/ImpossibleList'

import { LogAnalytics } from '@/LogAnalytics'

const eventParm = { page: 'impossible_list' }

export default function Page() {
  return (
    <>
      <ImpossibleList />
      <LogAnalytics eventName='page_view' eventParams={eventParm} />
    </>
  )
}
