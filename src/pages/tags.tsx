import Layout from "@components/Layout"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { getPosts } from "../libs/apis"
import { filterPosts, getAllSelectItemsFromPosts } from "../libs/utils/notion"
import { DEFAULT_CATEGORY } from "../constants"
import { TTags } from "../types"

export async function getStaticProps() {
  try {
    const posts = await getPosts()
    const filteredPost = filterPosts(posts)
    const tags = getAllSelectItemsFromPosts("tags", filteredPost)

    return {
      props: {
        tags: {
          ...tags,
        },
      },
      revalidate: 50,
    }
  } catch (error) {
    throw error
  }
}

type Props = {
  tags: TTags
}

const TagsPage: NextPageWithLayout<Props> = ({ tags }) => {
  console.log(tags)

  return <div>tags</div>
}

TagsPage.getLayout = (page) => {
  return (
    <Layout
      metaConfig={{
        title: `Tags | ${CONFIG.blog.title}`,
        description: CONFIG.blog.description,
        type: "website",
        url: CONFIG.link,
      }}
    >
      {page}
    </Layout>
  )
}

export default TagsPage
