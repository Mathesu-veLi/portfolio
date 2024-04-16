import { Project } from "./Project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectsDashboard() {
  return (
    <div>
      <h1 className="text-center font-light text-3xl tracking-wider">
        Projects
      </h1>

      <div className="gap-10 lg:gap-20 flex justify-center items-center my-16">
        <Carousel
          className="w-10/12"
          orientation="vertical"
        >
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <Project
                name="OUV Costumes"
                shortDescription="An online store for team shirts"
                imgUrl="https://i.ibb.co/LZdZBtg/homescreen.jpg"
                link="https://ouv.vercel.app"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Project
                name="Accountz"
                shortDescription="An account manager"
                imgUrl="https://i.ibb.co/hHQGD3G/dashboard.jpg"
                link="https://accountz.vercel.app"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Project
                name="DEV Toolkit"
                shortDescription="A basic set of tools for devs"
                imgUrl="https://i.ibb.co/YPpSZ7s/dev-home.png"
                link="https://devfordev.vercel.app"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
