import Image from "next/image";
import {ServiceCard} from "@/features/services/components/ServiceCard";
import {Hero} from "@/features/hero/components/Hero";

export default function Home() {
  return (
    <div className="">
        <Hero/>
     <ServiceCard/>
    </div>
  );
}
