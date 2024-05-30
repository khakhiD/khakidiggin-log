import { THeading } from "@/src/types"
import Link from "next/link"
import useScrollSpy from "@/src/hooks/useScrollSpy"

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
  const activeId = useScrollSpy()

  return (
    <nav className="inline-block lg:sticky lg:top-40">
      <div className="border-l border-zinc-200 dark:border-zinc-500">
        <ul className="list-outside">
          {headings.map((heading) => (
            <Link
              href={`#${getTocLink(heading.id)}`}
              key={heading.id}
              scroll={false}
              passHref
            >
              <li
                id={heading.id}
                className={`mb-3 text-sm list-outside tracking-tighter hover:-translate-y-[1px] transition duration-200 cursor-pointer
                ${
                  activeId === getTocLink(heading.id)
                    ? "pl-1 border-l-2 border-blue-400 transition duration-200"
                    : "pl-2"
                }
                `}
              >
                <a
                  className={`block text-zinc-700 dark:text-zinc-300 hover:text-blue-500 hover:dark:text-blue-500 transition duration-200
                  ${getIndentStyle(heading.level)}
                  ${activeId === getTocLink(heading.id) && "font-bold"}`}
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
