"use client"

import { useDispatch } from "react-redux"
import { toggleModal } from "@/lib/redux/modal"
import { useSession } from "next-auth/react"
import { FaXmark } from "react-icons/fa6"
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineLogout } from "react-icons/ai"
import sidebarToggle from "@/lib/helpers/sidebarToggle"
import { signOut } from "next-auth/react"
import { IoBagCheckOutline } from "react-icons/io5"
import SidebarActionBtn from "../ui/buttons/SidebarActionBtn"

export default function Sidebar() {

  // Check if the user is logged in
  const { data: session } = useSession()

  // Open the modal when the button is clicked
  const dispatch = useDispatch()
  const openSigninModal = () => dispatch(toggleModal("authModal"))

  return (
    <>
      <aside className="mobile-sidebar">

        {/* Sidebar close */}
        <span className="sidebar-close" onClick={sidebarToggle}>
          <FaXmark size={20} />
        </span>

        {/* Auth button */}
        {!session && (
          <SidebarActionBtn
            icon={<AiOutlineUser size={20} />}
            text="Sign in"
            onClick={openSigninModal}
          />
        )}

        {/* User profile */}
        {session && (
          <SidebarActionBtn
            icon={<AiOutlineUser size={20} />}
            text={session.user.name}
          />
        )}

        {/* Search button */}
        <SidebarActionBtn
          icon={<AiOutlineSearch size={20} />}
          text="Search"
        />

        {/* Cart button */}
        <SidebarActionBtn
          icon={<AiOutlineShoppingCart size={20} />}
          text="Cart"
        />

        {/* Cart button */}
        <SidebarActionBtn
          icon={<IoBagCheckOutline size={20} />}
          text="Checkout"
        />

        {/* Logout */}
        {session && (
          <button className="mobile-sidebar-btn mt-auto bg-black text-white !py-3 !px-4" onClick={signOut}>
            < AiOutlineLogout size={16} />
            <span className="ml-2 mt-[1px] text-sm">Logout</span>
          </button>
        )}
      </aside >

      {/* Sidebar backdrop */}
      <div className="sidebar-backdrop" onClick={sidebarToggle} ></div>
    </>
  )
}
