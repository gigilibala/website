'use client'

// This ensures that the component only runs on the client
import { useEffect } from 'react'

import { analytics } from './analytics'
import { logEvent } from 'firebase/analytics'

type LogAnalyticsProps = {
  eventName: string
  eventParams: object
}

export function LogAnalytics({ eventName, eventParams }: LogAnalyticsProps) {
  useEffect(() => {
    if (analytics) {
      console.info('Logging event', eventName, eventParams)
      logEvent(analytics, eventName, eventParams)
    }
  }, [eventName, eventParams])

  return null
}
