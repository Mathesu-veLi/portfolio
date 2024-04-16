interface ProjectProps {
  name: string;
  shortDescription: string;
  imgUrl: string;
  languages: string[];
}

export function Project() {
  return (
    <div className="p-3 rounded-lg border flex flex-col-reverse gap-2">
      <div className="flex justify-around items-center">
        <h1 className="font-semibold text-lg">Project name</h1>
        <p className="text-gray-300 max-w-44">Short Description</p>
      </div>
      <img
        src=""
        alt="Project screenshot"
        className="w-full border rounded-sm"
      />
    </div>
  );
}
