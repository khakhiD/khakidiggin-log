import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { CONFIG } from "@/site.config"
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai"

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className="border-t border-slate-200 dark:border-gray-500 mt-10">
      <div className="post-footer pt-12 px-4 flex">
        <div className="member-card flex min-w-fit">
          <div className="group thumbnail-wrapper flex flex-col mr-[40px] top-0 w-20 h-20">
            <div className="top-0 m-0 rounded-full">
              <Image
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/74141521?v=4"
                alt="profile-image"
                width={200}
                height={200}
              />
            </div>
            <div className="text-center mt-1 text-gray-500 dark:text-gray-300 group-hover:text-sky-500 dark:group-hover:text-sky-400">
              khakiD
            </div>
          </div>
          <div className="description w-[100%] flex flex-col">
            <p className="leading-6 text-sm mt-2 text-gray-700 dark:text-gray-200 text-base">
              추억을 지지고 볶을 수 있는 웹 서비스를 개발하고 싶습니다.
              <br />
              <b>사용자 중심의 프론트엔드 개발자</b> 카키디 입니다.
            </p>
            <div className="flex gap-1 mt-3 pt-3">
              {" "}
              {/* border-t border-slate-100 dark:border-gray-500 */}
              <a
                href={`https://github.com/${CONFIG.profile.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="text-xl text-gray-700 hover:text-sky-500 dark:text-gray-200 dark:hover:text-sky-400 cursor-pointer" />
              </a>
              <a
                href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="text-xl text-gray-700 hover:text-sky-500 dark:text-gray-200 dark:hover:text-sky-400 cursor-pointer" />
              </a>
              <a
                href={`mailto:${CONFIG.profile.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillMail className="text-xl text-gray-700 hover:text-sky-500 dark:text-gray-200 dark:hover:text-sky-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400 mt-20">
        <a>
          <button
            onClick={() => router.push("/")}
            className="cursor-pointer hover:text-sky-500 dark:hover:text-sky-400"
          >
            ← Back
          </button>
        </a>
        <a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer hover:text-sky-500 dark:hover:text-sky-400"
          >
            ↑ Top
          </button>
        </a>
      </div>
    </div>
  )
}

export default Footer
