import Navbar from "@/components/navbar"
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] md:w-72 bg-gray-900 fg-white-300">Hello sidebar <Navbar/></div>
        <main className="md:pl-72 pb-10">{children}</main>
        </div>
    )
  }
/*
  <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>*/