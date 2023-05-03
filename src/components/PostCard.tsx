import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "@/src/libs/utils"
import Tag from "./Tag"
import { TPost } from "../types"
import Image from "next/image"
import Category from "./Category"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <Link href={`/${data.slug}`}>
      <a>
        <article
          key={data.id}
          className="group hover:scale-95 hover:shadow-lg overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white dark:bg-zinc-900 transition ease-in-out transform-gpu duration-500 m"
        >
          {category && (
            <Category className="absolute top-4 left-4 z-10">
              {category}
            </Category>
          )}
          {data.thumbnail && (
            <div className="group-hover:scale-100 group-hover:opacity-90 relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-zinc-900 transition ease-in-out transform-gpu duration-500">
              <Image
                src={data.thumbnail}
                className="object-cover"
                layout="fill"
                alt={data.title}
              />
            </div>
          )}
          <div className="p-4">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-2xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
                {data.title}
              </h2>
            </header>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 md:ml-0">
                {formatDate(
                  data?.date?.start_date || data.createdTime,
                  CONFIG.lang
                )}
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default PostCard
