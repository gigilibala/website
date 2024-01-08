import Home from '@/components/Home'
import PageHead from '@/components/PageHead'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase.config'

// Initialize Firebase.
initializeApp(firebaseConfig)

export default () => {
  return (
    <main>
      <PageHead />
      <Home />
    </main>
  )
}
