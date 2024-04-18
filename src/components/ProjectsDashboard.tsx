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

      <div className="gap-10 lg:gap-20 flex justify-center items-center my-20">
        <Carousel className="w-full max-w-sm" orientation="vertical">
          <CarouselPrevious />
          <CarouselContent className="lg:h-[700px]">
            <CarouselItem className="basis-1/3">
              <Project
                name="OUV Costumes"
                imgUrl="https://i.ibb.co/LZdZBtg/homescreen.jpg"
                link="https://ouv.vercel.app"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Project
                name="Accountz"
                imgUrl="https://i.ibb.co/hHQGD3G/dashboard.jpg"
                link="https://accountz.vercel.app"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Project
                name="DEV Toolkit"
                imgUrl="https://i.ibb.co/YPpSZ7s/dev-home.png"
                link="https://devfordev.vercel.app"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Project
                name="Phonebook"
                imgUrl="https://raw.githubusercontent.com/Mathesu-veLi/Phonebook/main/Screenshots/index.png"
                link="https://phonebookproject.vercel.app"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
