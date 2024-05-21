import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { CONFIG } from "@/site.config"
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai"

type Props = {}

const description = [
  {
    lg: '직관에 근거를 더하기 위해 학습하고 공유합니다.<br /><b>사용자 중심의 프론트엔드 개발자</b> <span className="text-sky-500 dark:text-sky-400 font-bold">카키디</span> 입니다.',
  },
  {
    sm: '직관에 근거를 더하기 위해<br/>학습하고 공유합니다.<br/><b>사용자 중심의 프론트엔드 개발자</b><br/><span className="text-sky-500 dark:text-sky-400 font-bold">카키디</span> 입니다.',
  },
]

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className="border-t border-slate-200 dark:border-gray-500 mt-10">
      <div className="post-footer pt-12 lg:px-4 flex justify-start">
        <div className="member-card flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div className="group mr-[30px] w-[128px] h-[128px]">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/74141521?v=4"
              alt="profile-image"
              width={128}
              height={128}
            />
          </div>
          <div className="description w-auto flex flex-col">
            <div className="mt-1 text-lg font-black text-gray-700 dark:text-gray-200 group-hover:text-sky-500 dark:group-hover:text-sky-400">
              @{CONFIG.profile.name}
            </div>
            <p className="break-words leading-5 text-[16px] mt-2 text-gray-500 dark:text-gray-400 text-base">
              직관에 근거를 더하기 위해 학습하고 공유합니다.
              <span className="block">
                사용자 중심의 프론트엔드 개발자{" "}
                <span className="text-sky-500 dark:text-sky-400 font-bold">
                  카키디
                </span>
                입니다.
              </span>
            </p>
            <div className="flex gap-1 mt-3 pt-3 justify-start">
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
