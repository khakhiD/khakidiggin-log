import React, { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      {/* <div className="p-1 mb-3 dark:text-white">🔎 Search</div> */}
      <input
        className="rounded-lg px-10 py-2 w-full bg-gray-100 dark:bg-zinc-700 dark:text-white focus:bg-white focus:shadow-md dark:focus:bg-white dark:focus:shadow-md dark:focus:text-gray-600 outline-none transition"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
      <style jsx>{`
        input {
          background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
          background-position: 13px center;
          background-size: 1.5em;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  )
}

export default SearchInput
