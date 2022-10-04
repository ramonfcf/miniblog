import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
   signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(null)

   const [cancelled, setCancelled] = useState(false)

   const auth = getAuth()

   function checkIfIsCancelled() {
      if (cancelled) {
         return
      }
   }

   const createUser = async (data) => {
      checkIfIsCancelled()

      setLoading(true)
      setError(null)

      try {
         const { user } = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
         )

         await updateProfile(user, {
            displayName: data.displayName
         })
         setLoading(false)

         return user
      } catch (error) {

         let systemErrorMessage

         if (error.message.includes('Password')) {
            systemErrorMessage = 'The Password has to be at least 6 characters'
         } else if (error.message.includes('email-alredy')) {
            systemErrorMessage = 'This email is already in use'
         } else {
            systemErrorMessage = 'Something went wrong'
         }
         setLoading(false)
         setError(systemErrorMessage)
      }
   }

   const logOut = () => {
      checkIfIsCancelled()
      signOut(auth)
   }

   const login = async (data) => {
      checkIfIsCancelled()

      setLoading(true)
      setError(false)

      try {

         await signInWithEmailAndPassword(auth, data.email, data.password)
         setLoading(false)

      } catch (error) {

         let systemErrorMessage

         if (error.message.includes('User-not-found')) {
            systemErrorMessage = "User not found"
         } else if (error.message.includes("wrong-password")) {
            systemErrorMessage = "Wrong password"
         } else {
            systemErrorMessage = 'Something went wrong'

         }
         setLoading(false)
         setError(systemErrorMessage)
      }
   }

   useEffect(() => {
      return () => setCancelled(true)
   }, []);

   return {
      auth,
      createUser,
      error,
      loading,
      logOut,
      login
   }
}
