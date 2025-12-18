"use client"
import { useEffect } from "react"

export default function ErrorPage({ error }: { error:Error}){
    useEffect(()=>{
        console.log(`${error}`)
    }, [error])
    return (
        <h1>Error</h1>
    )
}