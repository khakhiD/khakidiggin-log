import React from "react"
import { CONFIG } from "site.config"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai"

type Props = {
  className?: string
}

const Hero: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 w-[100%] items-center justify-center bg-white dark:bg-inherit rounded-lg px-2 shadow-none dark:shadow-none">
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`overline font-['VitroInspire-Subset'] text-[72px] text-transparent bg-clip-text
              bg-gradient-to-r from-sky-600 to-sky-800 drop-shadow-2xl
              dark:from-gray-100 dark:to-sky-500`}
          >
            카키디깅록
          </h1>
          <p className="font-['Pretendard'] tracking-tighter text-lg text-slate-500 dark:text-slate-400 leading-6 drop-shadow-lg">
            <b>
              {"{"} 중괄호 {"}"}
            </b>{" "}
            열며 삽질한 것들을{" "}
            <b>
              {"<"}기록{">"}
            </b>
            합니다
          </p>
        </div>
        <div className="rounded-2xl p-1 flex">
          {CONFIG.profile.github && (
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
            >
              <AiOutlineGithub className="text-2xl" />
              {/* <div className="text-sm">github</div> */}
            </a>
          )}
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
            >
              <AiOutlineInstagram className="text-2xl" />
              {/* <div className="text-sm">instagram</div> */}
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
            >
              <AiOutlineMail className="text-2xl flex-shrink-0" />
              {/* <div className="text-sm">email</div> */}
            </a>
          )}
          {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
            >
              <AiFillLinkedin className="text-2xl flex-shrink-0" />
              {/* <div className="text-sm">linkedin</div> */}
            </a>
          )}
        </div>
      </div>
      {/* </section> */}
    </div>
  )
}

export default Hero
