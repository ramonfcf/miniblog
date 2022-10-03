import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
   const [documents, setDocuments] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);

   const [cancelled, setCancelled] = useState(false);

   useEffect(() => {

      async function loadData() {
         if (cancelled) return;

         setLoading(true);

         const collectionRef = await collection(db, docCollection);

         try {
            let q;

            if (search) {
               q = query(collectionRef, where('tags', 'array-contains', search), orderBy('createdAt', 'desc'));
            } else {
               q = await query(collectionRef, orderBy('createdAt', 'desc'));
            }


            await onSnapshot(q, (querySnapshot) => {

               setDocuments(
                  querySnapshot.docs.map((doc) => ({
                     id: doc.id,
                     ...doc.data(),
                  }))
               )
            }
            );

            setLoading(false);

         } catch (err) {

            console.log(err.message);
            setError(err.message);
            setLoading(false);

         }
      }

      loadData();
   }, [docCollection, search, uid, cancelled])

   useEffect(() => {
      return () => setCancelled(true);
   }, [])


   return { documents, loading, error };
}