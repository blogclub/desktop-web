// Import the functions you need from the SDKs you need
import { getAnalytics } from "@firebase/analytics"
import { initializeApp } from "@firebase/app"
import type { Index } from "@firebase/firestore"
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  setIndexConfiguration,
} from "@firebase/firestore"
import configure from "app/firebase/firestore.indexes.json"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ouSBjkMUnV6cN2XVlc5PxJtf6gVsRkQ",
  authDomain: "animevsub-history-app.firebaseapp.com",
  projectId: "animevsub-history-app",
  storageBucket: "animevsub-history-app.appspot.com",
  messagingSenderId: "12658633187",
  appId: "1:12658633187:web:56cf1588279277f3a698d6",
  measurementId: "G-F2KJ27SHYK",
}

const parseJSON = (json?: string | null) => {
  if (!json) return null
  try {
    return JSON.parse(json)
  } catch {
    return null
  }
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const enablePersistent =
  parseJSON(localStorage?.getItem("settings"))?.enablePersistent ?? true
const db = enablePersistent
  ? initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    })
  : getFirestore(app)

if (enablePersistent)
  setIndexConfiguration(
    db,
    configure as {
      indexes: Index[]
    }
  )
    // eslint-disable-next-line promise/always-return
    .then(() => {
      console.log("[Install indexes]: Installed indexes")
    })
    .catch((err) => {
      console.error("[Install indexes]: failure ", err)
    })

export { app, analytics, db }
