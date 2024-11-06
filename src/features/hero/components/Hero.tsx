import { Blobs } from "./Blobs";
import { HeroDescription } from "./HeroDescription";
import { HeroGetStartedButton } from "./HeroGetStartedButton";
import { HeroTitle } from "./HeroTitle";
import { HeroWaveWrapper } from "./HeroWaveWrapper";

export const Hero = () => {
  return (
    <div className=" w-full h-dvh flex items-center justify-center flex-col gap-8 relative hero-gradient overflow-hidden">
      <div className=" flex items-center flex-col gap-2.5 text-center px-3">
        <HeroTitle />
        <HeroDescription />
      </div>
      <div className=" w-fit inline-flex justify-center gap-2.5">
        <HeroGetStartedButton />
      </div>
      <Blobs />
      <HeroWaveWrapper />
    </div>
  );
};
