import { signOut } from "next-auth/react"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineUser } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"

export default function HeaderUserDropdown({ name = "" }) {
  return (
    <Menu as="div" className="relative z-[150]">
      <Menu.Button className="header-btn">
        <AiOutlineUser size={20} />
        <span className="ml-1 mt-[1px] font-medium text-sm max-lg:hidden">{name}</span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 py-1 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none overflow-hidden border border-black/10">

          {/* Sign out button */}
          <Menu.Item as="button" onClick={signOut} className="px-4 py-3 text-xs w-full text-left hover:cursor-pointer hover:text-primary flex items-center">
            <FiLogOut size={16} className="inline-block mr-2 opacity-90" />
            <span>Sign out</span>
          </Menu.Item>

        </Menu.Items>
      </Transition>
    </Menu>
  )
}