import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {/* <div className="p-1 mb-3 dark:text-white">💻 Profile</div> */}
      <div className="w-full md:p-4 lg:p-4 mb-3">
        <div className="relative w-full rounded-3xl overflow-hidden after:content-[''] after:block after:pb-[100%] drop-shadow-sm">
          <Image
                src="https://avatars.githubusercontent.com/u/74141521?v=4"
                alt="profile-image"
                layout="fill"
          />
        </div>
        <div className="p-2 flex flex-col items-center dark:text-white">
          <div className=" text-lg font-bold">@{CONFIG.profile.name}</div>
          <div className="text-sm text-center mb-4 text-gray-500 dark:text-gray-400">
            {CONFIG.profile.role}
          </div>
          {/* <div className="text-sm mb-2 text-center">{CONFIG.profile.bio}</div> */}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
