import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "../components/dashboardsidebar";

const DashboardLayoutPage = ({ children }: { children: React.ReactNode }) => {
   return (
    <SidebarProvider>
     <DashboardSidebar/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
};

export default DashboardLayoutPage;