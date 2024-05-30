import { CONFIG } from "@/site.config"
import Link from "next/link"
import React from "react"

const d = new Date()
const y = d.getFullYear().toString().substring(2, 4)
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        className="text-gray-400 text-sm mt-3"
        rel="noreferrer"
      >
        {!from ? y : `${from}-${y}`}{" "}
        <span className="font-bold">{`© ${CONFIG.profile.name}`}</span> Powered
        by Next.js, Notion API with Vercel
      </a>
    </div>
  )
}

export default Footer
