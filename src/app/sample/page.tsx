"use client"
import { useCallback } from "react";
import Link from 'next/link'
export default function Page() {
    const handleClick = useCallback(()=> {
        fetch("https://pleasant-wahoo-48885.upstash.io/set/user_1_session/session_token_value", {
            headers: {
              Authorization: "Bearer Ab71AAIjcDE5ZDk0NTQ5MWY4ZGQ0Y2IxYTdkZTc5MGZkODIzZTQzZHAxMA"
            }
          }).then(response => response.json())
            .then(data => console.log(data));

    },[])
 
    const handleGet = useCallback(()=> {
        fetch("https://pleasant-wahoo-48885.upstash.io/get/user_1_session", {
            headers: {
              Authorization: "Bearer Ab71AAIjcDE5ZDk0NTQ5MWY4ZGQ0Y2IxYTdkZTc5MGZkODIzZTQzZHAxMA"
            }
          }).then(response => response.json())
            .then(data => console.log(data));

    },[])
    return <div>
        <button onClick={handleClick}>set</button>
        <button onClick={handleGet}>get</button>

<Link href="/
">Dashboard</Link>
     <h1>Hello, Naaaxt.js!</h1>
     </div>
  }

  
