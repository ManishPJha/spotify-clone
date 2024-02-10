import Footer from '@/partials/footer'
import Header from '@/partials/header'
import Sidebar from '@/partials/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 justify-between">
        <Sidebar />
        <main className="flex-1 p-6 max-h-screen overflow-y-auto">
          <Header />
          <h1 className="font-semibold text-3xl mt-8">Good Evening</h1>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
