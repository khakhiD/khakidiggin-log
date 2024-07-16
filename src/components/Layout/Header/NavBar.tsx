import { CONFIG } from "@/site.config"
import Link from "next/link"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { HiOutlineRss } from "react-icons/hi"
import { SiAboutdotme } from "react-icons/si"

const NavBar: React.FC = () => {
  const links = [
    {
      id: 1,
      name: "About",
      to: "/about",
      icon: <SiAboutdotme />,
      newTab: false,
    },
    {
      id: 2,
      name: "Github",
      to: `https://github.com/${CONFIG.profile.github}`,
      icon: <AiFillGithub />,
      newTab: true,
    },
    {
      id: 3,
      name: "LinkedIn",
      to: `https://linked.in/in/${CONFIG.profile.linkedin}`,
      icon: <AiFillLinkedin />,
      newTab: true,
    },
    {
      id: 4,
      name: "RSS",
      to: `https://www.dongho.xyz/rss.xml`,
      icon: <HiOutlineRss />,
      newTab: true,
    },
  ]

  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-gray-500 dark:text-white nav"
          >
            <Link href={link.to}>
              <a
                className="hidden lg:block lg:font-medium lg:hover:font-semi-bold lg:hover:text-sky-500 lg:dark:font-semi-bold lg:dark:hover:text-sky-400"
                aria-label={
                  link.name + (link.newTab ? " (새 창에서 열기)" : "")
                }
                target={link.newTab ? "_blank" : "_self"}
                rel={link.newTab ? "noopener noreferrer" : undefined}
              >
                {link.name}
              </a>
            </Link>
            <Link href={link.to}>
              <a
                className="text-xl text-zinc-900 dark:text-zinc-300 hover:text-sky-500 dark:font-semi-bold dark:hover:text-sky-400 lg:hidden"
                aria-label={
                  link.name +
                  " 아이콘" +
                  (link.newTab ? " (새 창에서 열기)" : "")
                }
                target={link.newTab ? "_blank" : "_self"}
                rel={link.newTab ? "noopener noreferrer" : undefined}
              >
                {link.icon}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
