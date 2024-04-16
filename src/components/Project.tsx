interface ProjectProps {
  name: string;
  shortDescription: string;
  imgUrl: string;
  link: string;
}

export function Project(props: ProjectProps) {
  return (
    <a href={props.link} target="_blank">
      <div className="p-3 rounded-lg border flex flex-col-reverse justify-between lg:items-center">
        <div className="flex justify-around items-center lg:h-14 w-full mt-2">
          <h1 className="font-semibold text-lg">{props.name}</h1>
        </div>
        <img
          src={props.imgUrl}
          alt="Project screenshot"
          className="w-full lg:w-[460px] border rounded-sm"
        />
      </div>
    </a>
  );
}
