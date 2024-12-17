import { notFound } from "next/navigation"

export const dynamicParams =true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => ({
      id: ticket.id  
    }))
}

async function getTicket(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      next: {
        revalidate: 60
      }
    })

    if(!res.ok) {
        notFound()
    }
  
    return res.json()
  }
  export default async function TicketDetails({ params }) {
    // const id = params.id
    const ticket = await getTicket(params.id)
  


  return (
    <main>
        <nav>
            Ticket Details..
        </nav>
        <br />
        <br />
        <h3>name:{ticket.name}</h3>
        <h3>age:{ticket.age}</h3>
        Height:{ticket.height}
        <div className={`pill ${ticket.weight}`}>
         Weight: {ticket.weight}
         <br />
         <small>Created by {ticket.user_email}</small>
        </div>
    </main>
  )
}




    
