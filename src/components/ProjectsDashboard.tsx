import { Project } from "./Project";

export function ProjectsDashboard() {
  return (
    <div className="grid gap-10">
      <h1 className="text-center font-light text-3xl tracking-wider">
        Projects
      </h1>

      <div className="grid grid-cols-2 gap-10">
        <Project />
        <Project />
      </div>
    </div>
  );
}
