"use client"

import sidebarToggle from "@/lib/helpers/sidebarToggle"
import { FaBarsStaggered } from "react-icons/fa6"

export default function HeaderBarsBtn() {
  return (
    <span className="md:hidden px-3 py-4 cursor-pointer z-10" onClick={sidebarToggle} >
      <FaBarsStaggered />
    </span>
  )
}