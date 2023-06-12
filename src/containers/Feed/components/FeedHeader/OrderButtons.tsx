import { useRouter } from "next/router"
import Image from "next/image"
import React from "react"
import AscIcon from '@/public/icons/sort-ascending.svg';
import DescIcon from '@/public/icons/sort-descending.svg';

type TOrder = "asc" | "desc"

type Props = {}

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter()

  const currentOrder = `${router.query.order || ``}` || ("desc" as TOrder)

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }
  return (
    <div className={`flex text-sm gap-2  `}>
      {currentOrder === "desc" && <a
        className={`cursor-pointer ${
          currentOrder === "desc"
            ? "text-black font-bold dark:text-white"
            : "dark:text-gray-400"
        }`}
        onClick={() => handleClickOrderBy("asc")}
      >
        <DescIcon className={`stroke-black hover:rounded-md hover:bg-gray-200 transition-shadow dark:stroke-white dark:hover:stroke-black dark:hover:bg-sky-400`} alt="now:desc" width="24" height="24" />
      </a>}
      {currentOrder === "asc" && <a
        className={`cursor-pointer ${
          currentOrder === "asc"
            ? "text-black font-bold dark:text-white"
            : "dark:text-gray-400"
        }`}
        onClick={() => handleClickOrderBy("desc")}
      >
        <AscIcon className={`stroke-black hover:rounded-md hover:bg-gray-200 transition-shadow dark:stroke-white dark:hover:stroke-black dark:hover:bg-sky-400`} alt="now:asc" width="24" height="24" />
      </a>}
    </div>
  )
}

export default OrderButtons
