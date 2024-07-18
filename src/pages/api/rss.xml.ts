import { getPosts } from "@/src/libs/apis"
import { NextApiHandler } from "next"
import RSS from "rss"

const rss: NextApiHandler = async (req, res) => {
  const feed = new RSS({
    title: "dongho-log",
    site_url: "https://dongho.xyz",
    feed_url: "https://dongho.xyz/api/rss.xml",
  })

  const allPosts = await getPosts()
  const publicPosts = allPosts.filter(
    (post) => post.status && post.status.includes("Public")
  )

  publicPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://www.dongho.xyz/${post.slug}`,
      date: post.createdTime,
      description: post.summary ?? "",
    })
  })

  res.setHeader("Content-Type", "text/xml")
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, statle-while-revalidate=600"
  )
  res.write(feed.xml({ indent: true }))
  res.end()
}

export default rss
