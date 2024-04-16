interface ProjectProps {
  name: string;
  shortDescription: string;
  imgUrl: string;
  link: string;
}

export function Project(props: ProjectProps) {
  return (
    <a href={props.link}>
      <div className="flex justify-around items-center">
        <h1 className="font-semibold text-lg">{props.name}</h1>
        <p className="text-gray-300 max-w-44">{props.shortDescription}</p>
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
