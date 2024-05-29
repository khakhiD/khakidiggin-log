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

const TableOfContents: React.FC<Props> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.getAttribute("data-id") || "")
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px 0px -40% 0px",
      threshold: 0.1,
    })

    headings.forEach(({ id }) => {
      const element = document.querySelector(`[data-id="${id}"]`)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach(({ id }) => {
        const element = document.querySelector(`[data-id="${id}"]`)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  return (
    <nav className="sticky top-40">
      <div className="border-l border-zinc-200 dark:border-zinc-500">
        <ul className="space-y-3 ml-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`ml-${heading.level} text-sm tracking-tighter hover:-translate-y-[1px] transition duration-200`}
            >
              <Link href={`#${getTocLink(heading.id)}`} scroll={false} passHref>
                <a
                  className={`${
                    activeId === heading.id
                      ? "text-blue-500 font-bold"
                      : "text-zinc-700 dark:text-zinc-300"
                  } ml-1 hover:text-blue-500 hover:dark:text-blue-500 transition duration-200`}
                >
                  {heading.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 mb-6" />
      <div className="flex justify-end mr-1">
        <button
          className="group cursor-pointer text-sm hover:-translate-y-[1px] transition duration-200 text-zinc-700 dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-400"
          onClick={() => scrollToBottom()}
        >
          ↓ End
        </button>
      </div>
    </nav>
  )
}

export default TableOfContents
