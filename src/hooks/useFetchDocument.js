import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (collection, id) => {
   const [document, setDocument] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   const [cancelled, setCancelled] = useState(false);

   useEffect(() => {
      async function loadDocument() {
         if (cancelled) return;

         setLoading(true);

         try {
            const docRef = await doc(db, collection, id);
            const docSnap = await getDoc(docRef);

            setDocument(docSnap.data());

            setLoading(false);
         } catch (error) {
            console.error(error);
            setError(error);

            setLoading(false);
         }
      }
      loadDocument();
   }, [collection, id, cancelled]);

   useEffect(() => {
      return () => {
         setCancelled(true);
      };
   }, []);

   return { document, loading, error };
};