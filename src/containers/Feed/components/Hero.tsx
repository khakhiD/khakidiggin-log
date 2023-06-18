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
      {/* <section className="flex lg:flex-row flex-col py-20 mb-10 w-[100%]"> */}
      {/* <h1 className="font-['VitroInspire'] text-[72px] text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-300 dark:from-gray-100 dark:to-sky-500">
              카키디깅록
              <br className="sm:block hidden" />
            </h1> */}

      <div className="flex flex-col gap-3 w-[100%] items-center justify-center bg-white dark:bg-inherit rounded-lg px-2 shadow-none dark:shadow-none">
        {/* <div className="rounded-2xl w-[15%] h-auto">
            <div className="relative rounded-xl overflow-hidden after:content-[''] after:block after:pb-[100%]
              ring-2 ring-gray-200 ring-offset-2 ring-offset-white
              dark:ring-2 dark:ring-offset-zinc-800 dark:ring-white dark:ring-offset-zinc-900
              drop-shadow-lg">
              <Image
                // src="/favicon.ico"
                src="https://avatars.githubusercontent.com/u/74141521?v=4"
                alt="profile-image"
                layout="fill"
              />
            </div>
          </div> */}
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`overline font-['VitroInspire'] text-[72px] text-transparent bg-clip-text
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
