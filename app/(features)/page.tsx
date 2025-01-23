"use server"
import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import { InfiniteMovingCardsDemo } from "@/components/sections/contributors";

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <BentoGrid />
      {/* <InfoLanding data={infos[1]} /> */}
      <Features />
      <InfiniteMovingCardsDemo />
      {/* <Testimonials /> */}
    </>
  );
}
