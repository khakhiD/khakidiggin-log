import { getPosts } from "@/src/libs/apis"
import { NextApiHandler } from "next"
import RSS from "rss"

const rss: NextApiHandler = async (req, res) => {
  const feed = new RSS({
    title: "asdf",
    site_url: "https://dongho.xyz",
    feed_url: "https://dongho.xyz/api/rss.xml",
  })

  const allPosts = await getPosts()

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://dongho.xyz/${post.slug}`,
      date: post.createdTime,
      description: post.summary as string,
    })
  })

  res.setHeader("Content-Type", "text/xml")
  // configure cache
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, statle-while-revalidate=600"
  )
  // actually write the RSS feed as formatted XML
  res.write(feed.xml({ indent: true }))
  res.end()
}

export default rss
