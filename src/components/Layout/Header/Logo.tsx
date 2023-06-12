import React from "react"
import Link from "next/link"
import { CONFIG } from "site.config"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    <Link href="/">
      <a aria-label={CONFIG.blog.title}>
        <div className="flex items-center">
          <span className={`text-lg text-gray-700 font-bold hover:text-sky-500  dark:hover:text-sky-400 dark:text-white`}>
              {CONFIG.blog.title}
          </span>
        </div>
      </a>
    </Link>
  )
}

export default Logo
