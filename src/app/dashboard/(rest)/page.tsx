import { DASHBOARD_LINKS } from "@/features/dashboard/constants/dashboard-links";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  redirect(DASHBOARD_LINKS[0].href);
}
