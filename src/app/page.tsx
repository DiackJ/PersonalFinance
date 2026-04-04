 'use client';
 import { useEffect, useState } from 'react';

 export default function Test() {
   const [mssg, setMssg] = useState<String>('');

   const testFetch = async () => {
     const res = await fetch('/api', {
       method: "GET"
     });

     return await res.json()
   };

   useEffect(() => {
     const fd = async ()=> {
       const m = await testFetch();
       setMssg(m);
     };
     fd();
   }, []);

 }