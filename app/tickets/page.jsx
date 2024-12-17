import Loading from "../loading";
import TicketList from "./TicketList";
import { Suspense } from "react";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <br /><br />
          <h2>Make sure You are Responding</h2>
          <p><small>Form are still submiting.</small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading/>}>
      <TicketList />
      </Suspense>
    </main>
  )
}
