import { useState } from "react"

import * as Cards from "./components/cards"
import * as Lists from "./components/lists"

import { TCategories, TPosts, TTags } from "@customTypes/index"
import SearchInput from "./components/SearchInput"
import { FeedHeader } from "./components/FeedHeader"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ContactCard from "./components/cards/ContactCard"

type Props = {
  categories: TCategories
  tags: TTags
  posts: TPosts
}

const Feed: React.FC<Props> = ({ categories, tags, posts }) => {
  const [q, setQ] = useState("")

  //   .box {
  //     -ms-overflow-style: none;
  //     scrollbar-width: none;
  // }
  // .box::-webkit-scrollbar {
  //     display: none;
  // }
  return (
    <>
      <div className="flex flex-col">
        {/* <div className="hidden lg:block min-w-[full]">
          <Hero className="flex w-[100%] h-auto" />
        </div> */}

        <div className="block md:grid md:grid-cols-12 gap-6">
          <div className="mt-5 top-[200px] hidden lg:block col-span-2">
            <Cards.ProfileCard />
            <div
              className="common-no-scroll-bar sticky mt-12 top-[81px] hidden lg:block overflow-scroll"
              style={{
                height: "calc(100vh - 81px)",
              }}
            >
              <Lists.TagList data={tags} />
            </div>
            {/* <Lists.CategoryList data={categories} /> */}

            {/* <Cards.ContactCard /> */}
          </div>
          <div className="col-span-12 lg:col-span-10 ">
            <Hero className="flex w-[100%] h-auto hidden md:block md:flex-row pt-12 pb-12 w-[100%]" />
            <Cards.MobileProfileCard />
            <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
            <Lists.TagList
              className="flex w-[100%] h-auto lg:hidden"
              data={tags}
            />
            <FeedHeader categories={categories} />
            <Lists.PostList q={q} posts={posts} />
            <Footer className="block flex justify-center pb-8" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed
