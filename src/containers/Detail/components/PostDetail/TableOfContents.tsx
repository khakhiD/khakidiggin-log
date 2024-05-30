import { THeading } from "@/src/types"
import { useEffect, useState } from "react"
import Link from "next/link"

type Props = {
  headings: THeading[]
}

const getTocLink = (id: string) => {
  return id.replaceAll("-", "")
}

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  })
}

const getIndentStyle = (headingLevel: number) => {
  switch (headingLevel) {
    case 1:
      return "pl-2"
    case 2:
      return "pl-4"
    default:
      return "pl-0"
  }
}

const TableOfContents: React.FC<Props> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>("")

  // useEffect(() => {
  //   const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setActiveId(entry.target.getAttribute("data-id") || "")
  //       }
  //     })
  //   }

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     rootMargin: "0px 0px -40% 0px",
  //     threshold: 0.1,
  //   })

  //   headings.forEach(({ id }) => {
  //     const element = document.querySelector(`[data-id="${id}"]`)
  //     if (element) {
  //       observer.observe(element)
  //     }
  //   })

  //   return () => {
  //     headings.forEach(({ id }) => {
  //       const element = document.querySelector(`[data-id="${id}"]`)
  //       if (element) {
  //         observer.unobserve(element)
  //       }
  //     })
  //   }
  // }, [headings])

  //   <Link
  //   href={`#${getTocLink(heading.id)}`}
  //   key={heading.id}
  //   scroll={false}
  //   passHref
  // >
  //   <li
  //     className={`text-sm tracking-tighter hover:-translate-y-[1px] transition duration-200 mb-3`}
  //   >
  //     <a
  //       className={`${
  //         activeId === heading.id
  //           ? "text-blue-500 font-bold"
  //           : "text-zinc-700 dark:text-zinc-300"
  //       } pl-${heading.level * 2} -indent-${
  //         heading.level * 2
  //       } hover:text-blue-500 hover:dark:text-blue-500 transition duration-200`}
  //     >
  //       {heading.title}
  //     </a>
  //   </li>
  // </Link>

  return (
    <nav className="inline-block lg:sticky lg:top-40">
      <div className="border-l border-zinc-200 dark:border-zinc-500">
        <ul className="ml-3 list-outside">
          {headings.map((heading) => (
            <Link
              href={`#${getTocLink(heading.id)}`}
              key={heading.id}
              scroll={false}
              passHref
            >
              <li
                className={`mb-3 text-sm list-outside tracking-tighter hover:-translate-y-[1px] transition duration-200 cursor-pointer`}
              >
                <a
                  className={`block hover:text-blue-500 hover:dark:text-blue-500 transition duration-200
                  ${getIndentStyle(heading.level)}
                ${
                  activeId === heading.id
                    ? "text-blue-500 font-bold"
                    : "text-zinc-700 dark:text-zinc-300"
                }`}
                >
                  {heading.title}
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="mt-6 mb-6" />
      <div className="flex justify-end mr-1">
        <button
          className="cursor-pointer text-sm hover:-translate-y-[1px] transition duration-200 text-zinc-700 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400"
          onClick={() => scrollToBottom()}
        >
          ↓ End
        </button>
      </div>
    </nav>
  )
}

export default TableOfContents
