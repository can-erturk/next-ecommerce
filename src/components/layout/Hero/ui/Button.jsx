import { FaArrowRight } from "react-icons/fa6"

export default function Button({ children }) {
  return (
    <button className="max-w-max bg-black text-white text-sm py-2 px-5 inline-flex items-center gap-2 cursor-pointer">
      <span>{children}</span>
      <FaArrowRight size={14} />
    </button>
  )
}