import { useRouter } from "next/router"
import Image from "next/image"
import React from "react"

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
            : "text-gray-500 dark:text-gray-400"
        }`}
        onClick={() => handleClickOrderBy("asc")}
      >
        <Image className={`hover:rounded-md hover:bg-white transition-shadow`} src="/icons/sort-descending.svg" alt="desc" width="24" height="24" />
      </a>}
      {currentOrder === "asc" && <a
        className={`cursor-pointer ${
          currentOrder === "asc"
            ? "text-black font-bold dark:text-white"
            : "text-gray-500 dark:text-gray-400"
        }`}
        onClick={() => handleClickOrderBy("desc")}
      >
        <Image className={`hover:rounded-md hover:bg-white transition-shadow`} src="/icons/sort-ascending.svg" alt="asc" width="24" height="24" />
      </a>}
    </div>
  )
}

export default OrderButtons
