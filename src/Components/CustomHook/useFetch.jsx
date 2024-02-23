import { useState } from "react";
import { useEffect } from "react";
const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);
   //Su dung useEffect
   useEffect(() => {
      fetch(url)
         .then(res => {
            if (!res.ok) {
               throw Error("Could not fetch the data for that resource"); //Truong hop nay xay ra khi link API sai (ko ton tai)
            }
            return res.json();
         })
         .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
         })
         .catch(err => {
            setIsPending(false);
            setError(err.message);
         })
   }, [url]);
   return { data, isPending, error }
};

export default useFetch;