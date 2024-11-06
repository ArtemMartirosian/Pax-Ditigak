import { ListItems } from "@/components/ListItems";
import { DASHBOARD_LINKS } from "../../constants/dashboard-links";
import { DashboardActiveLink } from "./DashboardActiveLink";

export const DisplayDashboardSidebarLinks = () => {
  return (
    <ul className=" w-full h-fit flex flex-col gap-1">
      <ListItems
        items={DASHBOARD_LINKS}
        render={(item) => (
          <li key={item.href} className=" w-full h-10">
            <DashboardActiveLink href={item.href}>
              {item.name}
            </DashboardActiveLink>
          </li>
        )}
      />
    </ul>
  );
};
