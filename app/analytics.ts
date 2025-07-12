'use client'

import { Analytics, getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

import { firebaseConfig } from './firebase.config'

let analytics: Analytics

if (typeof window !== 'undefined') {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
  console.info('Analytics initialized')
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export { analytics }
