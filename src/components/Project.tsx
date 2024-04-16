interface ProjectProps {
  name: string;
  shortDescription: string;
  imgUrl: string;
  link: string;
}

export function Project(props: ProjectProps) {
  return (
    <a href={props.link}>
        <div className="p-3 rounded-lg border flex flex-col-reverse justify-between lg:h-80 h-64">
          <div className="flex justify-around items-center lg:h-14">
            <h1 className="font-semibold text-lg">{props.name}</h1>
            <p className="text-gray-400 max-w-52 text-center">{props.shortDescription}</p>
          </div>
          <img
            src={props.imgUrl}
            alt="Project screenshot"
            className="w-full border rounded-sm"
          />
        </div>
    </a>
  );
}
