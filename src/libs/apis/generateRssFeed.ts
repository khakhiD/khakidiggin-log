import { TPosts, TPost } from "@/src/types"
import RSS from "rss"

export async function generateRssFeed(allPosts: TPosts) {
  const feed = new RSS({
    title: "dongho-log",
    site_url: "https://www.dongho.xyz",
    feed_url: "https://www.dongho.xyz/rss.xml",
    description: "신동호 기술 블로그",
  })

  const publicPosts = allPosts.filter(
    (post: TPost) => post.status && post.status.includes("Public")
  )

  publicPosts.map((post, _i) => {
    feed.item({
      title: post.title,
      url: `https://www.dongho.xyz/${post.slug}`,
      date: post.createdTime,
      description: post.summary ?? "",
    })
  })

  const rss = feed.xml({ indent: true })
  return rss
}
