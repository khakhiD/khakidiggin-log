import { NotionRenderer } from "react-notion-x"
import dynamic from "next/dynamic"
import { THeading, TPost } from "@/src/types"
import React, { useEffect, useState } from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import TableOfContents from "./TableOfContents"
import CommentBox from "./CommentBox"
import Category from "@components/Category"
import Image from "next/image"
import Link from "next/link"
import { getPageTableOfContents, TableOfContentsEntry } from "notion-utils"

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    await Promise.all([
      import("prismjs/components/prism-markup-templating.js"),
      import("prismjs/components/prism-markup.js"),
      import("prismjs/components/prism-bash.js"),
      import("prismjs/components/prism-c.js"),
      import("prismjs/components/prism-cpp.js"),
      import("prismjs/components/prism-csharp.js"),
      import("prismjs/components/prism-docker.js"),
      import("prismjs/components/prism-java.js"),
      import("prismjs/components/prism-js-templates.js"),
      import("prismjs/components/prism-coffeescript.js"),
      import("prismjs/components/prism-diff.js"),
      import("prismjs/components/prism-git.js"),
      import("prismjs/components/prism-go.js"),
      import("prismjs/components/prism-graphql.js"),
      import("prismjs/components/prism-handlebars.js"),
      import("prismjs/components/prism-less.js"),
      import("prismjs/components/prism-makefile.js"),
      import("prismjs/components/prism-markdown.js"),
      import("prismjs/components/prism-objectivec.js"),
      import("prismjs/components/prism-ocaml.js"),
      import("prismjs/components/prism-python.js"),
      import("prismjs/components/prism-reason.js"),
      import("prismjs/components/prism-rust.js"),
      import("prismjs/components/prism-sass.js"),
      import("prismjs/components/prism-scss.js"),
      import("prismjs/components/prism-solidity.js"),
      import("prismjs/components/prism-sql.js"),
      import("prismjs/components/prism-stylus.js"),
      import("prismjs/components/prism-swift.js"),
      import("prismjs/components/prism-wasm.js"),
      import("prismjs/components/prism-yaml.js"),
    ])
    return m.Code
  })
)
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
)

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

type Props = {
  blockMap: any
  data: TPost
  tableOfContents?: Array<TableOfContentsEntry>
}

const PostDetail: React.FC<Props> = ({ blockMap, data, tableOfContents }) => {
  const [headings, setHeadings] = useState<THeading[]>([])

  useEffect(() => {
    const extractedHeadings: THeading[] = []
    const blocks = blockMap?.block || {}

    Object.keys(blocks).forEach((key) => {
      const block = blocks[key].value
      if (
        block.type === "header" ||
        block.type === "sub_header" ||
        block.type === "sub_sub_header"
      ) {
        const level =
          block.type === "header" ? 0 : block.type === "sub_header" ? 1 : 2
        extractedHeadings.push({
          id: block.id,
          title: block.properties?.title[0][0],
          level,
        })
      }
    })

    setHeadings(extractedHeadings)
  }, [blockMap])

  const category = (data.category && data.category?.[0]) || undefined
  return (
    <div className={`m-auto max-w-5xl py-12 px-1 md:px-6 md:mb-6`}>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
        <article
          className={`${
            data.status[0] === "PublicOnDetail" && "lg:col-span-8"
          } lg:col-span-6 m-auto max-w-2xl`}
        >
          {category && (
            <Category
              className="mb-2"
              readOnly={data.status?.[0] === "PublicOnDetail"}
            >
              {category}
            </Category>
          )}
          {data.type[0] === "Post" && <PostHeader data={data} />}
          {blockMap && (
            <div className="-mt-4">
              <NotionRenderer
                recordMap={blockMap}
                components={{
                  Code,
                  Collection,
                  Equation,
                  Modal,
                  Pdf,
                  nextImage: Image,
                  nextLink: Link,
                }}
                mapPageUrl={mapPageUrl}
              />
            </div>
          )}
          {data.type[0] === "Post" && (
            <>
              <Footer />
              <CommentBox data={data} />
            </>
          )}
        </article>
        {data.status[0] !== "PublicOnDetail" && headings.length > 0 && (
          <aside className="hidden lg:block lg:col-span-2">
            <TableOfContents headings={headings} />
          </aside>
        )}
      </div>
    </div>
  )
}

export default PostDetail
