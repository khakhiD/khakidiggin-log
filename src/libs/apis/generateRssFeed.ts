import { getPosts } from "./getPosts"
import { TPosts, TPost } from "@/src/types"
import RSS from "rss"
import fs from "fs/promises"

export async function generateRssFeed() {
  const feed = new RSS({
    title: "dongho-log",
    site_url: "https://www.dongho.xyz",
    feed_url: "https://www.dongho.xyz/rss.xml",
    description: "신동호 기술 블로그",
  })

  try {
    const allPosts: TPosts = await getPosts()

    const publicPosts = allPosts.filter((post: TPost) => {
      const isPublic = post.status && post.status.includes("Public")
      return isPublic
    })

    publicPosts.map((post) => {
      feed.item({
        title: post.title,
        url: `https://www.dongho.xyz/${post.slug}`,
        date: post.createdTime,
        description: post.summary ?? "",
      })
    })

    const rss = feed.xml({ indent: true })

    // RSS 피드 파일을 생성하여 저장
    await fs.writeFile("./public/rss.xml", rss)
    console.log("RSS feed generated successfully")
  } catch (error) {
    console.error("Error generating RSS feed:", error)
  }
}
