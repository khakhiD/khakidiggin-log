import PostCard from "@components/PostCard"
import { TPosts } from "@/src/types"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { DEFAULT_CATEGORY } from "@/src/constants"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

type Props = {
  q: string
  posts: TPosts
}

const PostList: React.FC<Props> = ({ q, posts }) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const postsPerPage = 7

  const currentTag = `${router.query.tag || ``}` || undefined
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY
  const currentOrder = `${router.query.order || ``}` || "desc"

  useEffect(() => {
    setFilteredPosts(() => {
      let filteredPosts = posts
      // keyword
      filteredPosts = filteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(" ") : ""
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(q.toLowerCase())
      })

      // tag
      if (currentTag) {
        filteredPosts = filteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }

      // category
      if (currentCategory !== DEFAULT_CATEGORY) {
        filteredPosts = filteredPosts.filter(
          (post) =>
            post && post.category && post.category.includes(currentCategory)
        )
      }
      // order
      if (currentOrder !== "desc") {
        filteredPosts = filteredPosts.reverse()
      }

      return filteredPosts
    })
  }, [q, currentTag, currentCategory, currentOrder, setFilteredPosts, posts])

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Handle pagination
  const handlePageChange = (page: number) => {
    if (page === 0) return;
    setCurrentPage(page)
    window.scrollTo(0, 0) // Scroll to top of the page
  }

  // Calculate the index of the last post on the current page
  const indexOfLastPost = currentPage * postsPerPage

  // Calculate the index of the first post on the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  // Get the current posts to display on the current page
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <div className="my-2">
        {!currentPosts.length && (
          <div className="flex justify-center p-5 align-center">
            <p className="text-gray-500 dark:text-gray-300">검색 결과 없음(⊙_⊙;)</p>
        </div>
        )}
        {currentPosts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>

      {/* Render pagination */}
      <div className="flex justify-center content-center my-8">
        <button onClick={() => handlePageChange(!(currentPage === 0) ? currentPage - 1 : 0)} className="text-3xl text-gray-700 dark:text-white hover:text-sky-500 dark:hover:text-sky-400">
          <BiChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-2 ${
              currentPage === page ?
              "w-[30px] h-[30px] rounded-md font-bold text-gray-500 dark:text-white hover:text-white hover:bg-sky-500 dark:hover:bg-sky-900" :
              "w-[30px] h-[30px] rounded-md text-gray-500 dark:text-white dark:text-white hover:text-white hover:bg-sky-500 dark:hover:bg-sky-900"
            }`}
          >
            {page}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage !== totalPages ? currentPage + 1 : 0)} className="text-3xl text-gray-700 dark:text-white hover:text-sky-500 dark:hover:text-sky-400">
          <BiChevronRight />
        </button>
      </div>

    </>
  )
}

export default PostList