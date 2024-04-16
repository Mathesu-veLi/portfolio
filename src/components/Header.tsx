import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export function Header() {
  return (
    <header className="flex justify-end w-full px-5 ms-5 mb-10">
      <ul className="flex gap-5">
        <li title="Email">
          <a href="mailto:matheuslevit@gmail.com">
            <EnvelopeClosedIcon className="w-7 h-7"/>
          </a>
        </li>

        <li title="Github">
          <a href="https://www.github.com/Mathesu-veLi" target="_blank">
            <GitHubLogoIcon className="w-7 h-7" />
          </a>
        </li>

        <li title="Linkedin">
          <a href="https://www.linkedin.com/in/mathsvl/">
            <LinkedInLogoIcon className="w-7 h-7" />
          </a>
        </li>
      </ul>
    </header>
  );
}
