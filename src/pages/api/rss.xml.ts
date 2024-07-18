import { getPosts, generateRssFeed } from "@/src/libs/apis"
import { NextApiHandler } from "next"

const rss: NextApiHandler = async (req, res) => {
  const allPosts = await getPosts()
  const rss = await generateRssFeed(allPosts)

  res.setHeader("Content-Type", "text/xml")
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, statle-while-revalidate=600"
  )
  res.write(rss)
  res.end()
}

export default rss
