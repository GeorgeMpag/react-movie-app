import {useEffect, useState} from 'react';

const  useFetch =  (url) =>{
    const [data, setData]= useState(null);
    const [pending, setPending]=useState(true)
    const [error, setError]=useState(null);
   
   console.log(url) 
    async function myfetch() {
        const controller = new AbortController();
        const response = await fetch(url, { signal: controller.signal });
        
         if (!response.ok)
            throw new Error( response.text()+  `Satus: ${response.status}` )   
        const data = await response.json();
        return data
        
      }
    useEffect(  ()=>{
        myfetch()
            .then(data => {

                setData(data); 
                setPending(false)
            })
            .catch(error=>{
                setError(error)
                setPending(false)
            })
            

    },[url])

   
    return {data,pending,error }

}

export default useFetch;