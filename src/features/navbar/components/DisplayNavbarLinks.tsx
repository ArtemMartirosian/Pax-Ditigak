import { ListItems } from "@/components/ListItems";
import { NAVBAR_LINKS } from "@/constants/navbar-links";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

interface Props {
  orientation: "vertical" | "horizontal";
}

export const DisplayNavbarLinks = ({ orientation }: Props) => {
  const isVertical = orientation === "vertical";
  return (
    <ul
      className={cn("inline-flex items-center gap-x-4 gap-y-1", {
        "flex-col items-start": isVertical,
      })}
    >
      <ListItems
        items={NAVBAR_LINKS}
        render={(item) => (
          <li key={item.href} className={cn({ "w-full h-10": isVertical })}>
            <Link
              href={item.href}
              className={cn(" font-semibold", {
                "w-full h-full flex items-center": isVertical,
              })}
            >
              {item.name}
            </Link>
          </li>
        )}
      />
    </ul>
  );
};
