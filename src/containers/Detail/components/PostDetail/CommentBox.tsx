import { TPost } from "@/src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"
import ReactFragment from "react"

const UtterancesComponent = dynamic(
  () => {
    return import("@components/Utterances")
  },
  { ssr: false }
)
const CusdisComponent = dynamic(
  () => {
    return import("@components/Cusdis")
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-10">
      <div className="mt-5">
        {CONFIG.utterances.enable && (
          <UtterancesComponent issueTerm={data.id} />
        )}
        {CONFIG.cusdis.enable && (
          <CusdisComponent id={data.id} slug={data.slug} title={data.title} />
        )}
      </div>
    </div>
  )
}

export default CommentBox
