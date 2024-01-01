import { fetchLatestInvoices, fetchRevenue } from "../lib/data"
import RevenueChart from "../ui/dashboard/revenue-chart"
import LatestInvoices from "../ui/dashboard/latest-invoices"
import { montserrat } from "../ui/fonts"
import { Suspense } from "react"

export default async function Page() {
    const lastestInvoices = await fetchLatestInvoices()
    

    return (
        <main>
        <h1 className={`${montserrat.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
          {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
          {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
          {/* <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
          /> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {/* The next componente is for wait the component revenur while we can see a fallback */}
            <Suspense fallback={<div>Espera...</div>}>
                <RevenueChart  />
            </Suspense>
          <LatestInvoices latestInvoices={lastestInvoices} />
        </div>
      </main>
    )
}