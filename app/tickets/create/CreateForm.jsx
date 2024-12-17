"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] =useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { name, age, height, weight, user_email: "huzaifa@gmail.com" }

    const res = await fetch('http://localhost:4000/tickets', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTicket)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/sixth')
    }
    
  }

  return (
    
    <form onSubmit={handleSubmit} className="w-1/2">
    <br /><br /><br />
    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
            <input type="text" id="first_name" onChange={(e) => setName(e.target.value)} value={name}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Huzaifa" required />
    </div>
    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age:</label>
            <input type="text" id="first_name" onChange={(e) => setAge(e.target.value)} value={age}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 5ft, 6ft, 7ft" required />
    </div>
    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height:</label>
            <input type="text" id="first_name" onChange={(e) => setHeight(e.target.value)} value={height}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 25,50,75" required />
    </div>
    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight:</label>
            <input type="text" id="first_name" onChange={(e) => setWeight(e.target.value)} value={weight}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 50,60,70" required />
    </div>
      
    
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Applying</span>}
      {!isLoading && <span>Click Here!</span>}
      
    </button>
    
    </form>
    
    
  )
}
