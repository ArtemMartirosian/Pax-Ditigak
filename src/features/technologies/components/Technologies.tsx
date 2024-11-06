import { ListItems } from "@/components/ListItems";
import { TECHNOLOGIES } from "@/constants/technologies";
import Marquee from "react-fast-marquee";
import { GradientShadow } from "../../../components/GradientShadow";
import { TechnologiesMotionWrapper } from "./TechnologiesMotionWrapper";
import { TechnologyCard } from "./TechnologyCard";

export const Technologies = () => {
  return (
    <TechnologiesMotionWrapper>
      <GradientShadow position="left" />
      <Marquee direction="left" loop={0} autoFill className="py-2">
        <ListItems
          items={TECHNOLOGIES}
          render={(item, index) => (
            <TechnologyCard
              key={item.technologyName}
              item={item}
              index={index}
            />
          )}
        />
      </Marquee>
      <GradientShadow position="right" />
    </TechnologiesMotionWrapper>
  );
};
