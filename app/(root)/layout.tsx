import Footer from "@/components/Shared/footer"
import Header from "@/components/Shared/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
        <Header/>
            <main className="flex-1">{children}</main>
        <Footer/>
    
    </div>
  )
}
