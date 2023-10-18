"use client"

import { AiOutlineUser } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { toggleModal } from "@/lib/redux/modal"
import { useSession } from "next-auth/react"
import HeaderUserDropdown from "./HeaderUserDropdown"


export default function HeaderSinginBtn() {

  // Check if the user is logged in
  const { data: session } = useSession()

  // Open the modal when the button is clicked
  const dispatch = useDispatch()
  const openSigninModal = () => dispatch(toggleModal("authModal"))

  // Check the length of the user name
  const checkName = (name = "") => {
    return name.length > 12 ? name.slice(0, 12) + "..." : name
  }

  if (!session) {
    return (
      <button className="header-btn" onClick={openSigninModal}>
        <AiOutlineUser size={20} />
        <span className="ml-1 mt-[1px] font-medium text-sm max-lg:hidden">Sign in</span>
      </button>
    )
  }

  if (session) {
    return (
      <HeaderUserDropdown name={checkName(session.user?.name)} />
    )
  }
}