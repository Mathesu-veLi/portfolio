import { Project } from "./Project";

export function ProjectsDashboard() {
  return (
    <div className="grid gap-10">
      <h1 className="text-center font-light text-3xl tracking-wider">
        Projects
      </h1>

      <div className="grid lg:grid-cols-3 gap-10 lg:gap-20">
        <Project
          name="OUV Costumes"
          shortDescription="An online store for team shirts"
          imgUrl="https://i.ibb.co/LZdZBtg/homescreen.jpg"
          link="https://ouv.vercel.app"
        />
        <Project
          name="Accountz"
          shortDescription="An account manager"
          imgUrl="https://i.ibb.co/hHQGD3G/dashboard.jpg"
          link="https://accountz.vercel.app"
        />
        <Project
          name="DEV Toolkit"
          shortDescription="A basic set of tools for devs"
          imgUrl="https://i.ibb.co/YPpSZ7s/dev-home.png"
          link="https://devfordev.vercel.app"
        />
      </div>
    </div>
  );
}
