import Layout from "@components/Layout"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "./_app"

const categories: NextPageWithLayout = () => {
  return <div>categories</div>
}

categories.getLayout = (page) => {
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

export default categories
