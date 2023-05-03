import { useState } from "react"

import * as Cards from "./components/cards"
import * as Lists from "./components/lists"

import { TCategories, TPosts, TTags } from "@customTypes/index"
import SearchInput from "./components/SearchInput"
import { FeedHeader } from "./components/FeedHeader"
import Footer from "./components/Footer"
import PostCard from "@/src/components/PostCard"

type Props = {
  categories: TCategories
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ posts }) => {
  return (
    <div className="">
      {/* <div className="grid grid-cols-2 gap-4">
        <Cards.ProfileCard />
        <div>
          <Cards.ServiceCard />
          <Cards.ContactCard />
        </div>
      </div> */}
      <div className="text-black dark:text-white mb-4 text-2xl font-bold md:text-3xl lg:mb-8">
        Latest Posts💫
      </div>
      <div className="my-2 grid grid-cols-2 gap-8">
        {!posts.length && (
          <p className="text-black dark:text-white">Nothing! 😺</p>
        )}
        {posts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
      <Footer className="block flex justify-center pb-8" />

      {/* <Footer className="pt-4" /> */}
    </div>
  )
}

export default Feed
