import { CONFIG } from "@/site.config"
import Link from "next/link"
import { AiFillLinkedin, AiFillMail, AiFillGithub, AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai"
import { SiAboutdotme } from "react-icons/si"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About", to: "/about", icon: <SiAboutdotme /> },
    { id: 2, name: "Github", to: `https://github.com/${CONFIG.profile.github}`, icon: <AiFillGithub />},
    { id: 3, name: "LinkedIn", to: `https://linked.in/in/${CONFIG.profile.linkedin}`, icon: <AiFillLinkedin/>},
  ]
  
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black text-gray-500 dark:text-white nav"
          >
            <Link href={link.to}>
              <a className="hidden lg:block lg:font-medium lg:hover:font-semi-bold lg:hover:text-sky-500 lg:dark:font-semi-bold lg:dark:hover:text-sky-400">{link.name}</a>
            </Link>
            <Link href={link.to}>
              <a className="text-xl text-zinc-900 dark:text-zinc-300 hover:text-sky-500 dark:font-semi-bold dark:hover:text-sky-400 lg:hidden">{link.icon}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
