import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    
    <main className="text-center">
        <br /><br /><br />
        <h1>There is a problem Here</h1>
        <p>we Could Not Found The page</p>
        <p>GO back To the origanl PAge!</p>
        <div className='cd'>
        <Link href="/">Home</Link>
        </div>
    </main>
  )
}



