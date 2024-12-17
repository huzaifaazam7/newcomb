import Link from "next/link"
import { resolve } from "styled-jsx/css"

async function getTickets() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:4000/tickets', {

  
    next: {
      revalidate: 30 // use 0 to opt out of using cache
    }
  })

  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
  
    {tickets.map((ticket) => (
      <div key={ticket.id} className='card my-5'>
         <Link href={`/tickets/${ticket.id}`}>
        <h3>Name: {ticket.name}</h3>
        <h2>Age: {ticket.age}</h2>
        <h3>Height: {ticket.height}</h3>
        <div className={`pill ${ticket.weight}`}>
         Weight: {ticket.weight}
        </div>
        </Link>
        </div>
    ))}
    {tickets.length === 0 && (
      <p className="text-center">There are no open tickets, yay!</p>
    )}
  </>
  )
}
