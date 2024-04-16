import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <header className="flex justify-end w-full px-5 ms-5 mb-10">
      <ul>
        <li>
          <a href="https://www.github.com/Mathesu-veLi" target="_blank">
            <GitHubLogoIcon className="w-7 h-7" />
          </a>
        </li>
        <li></li>
      </ul>
    </header>
  );
}
