"use client"

import Logo from "@/components/ui/Logo"
import SearchBar from "@/components/SearchBar"
import HeaderSinginBtn from "@/components/ui/buttons/HeaderSigninBtn"
import HeaderCartBtn from "@/components/ui/buttons/HeaderCartBtn"
import HeaderBarsBtn from "@/components/ui/buttons/HeaderBarsBtn"
import useScrollPosition from "@/lib/hooks/useSrollPosition"
import classNames from "classnames"

export default function Header() {

  // Get scroll position
  const scrollPosition = useScrollPosition()

  // Check if scroll position is enough
  const isSticky = scrollPosition.y > 250

  return (
    <header className={classNames('header', { 'sticky-header': isSticky })}>
      <div className="container h-full flex justify-between items-center flex-wrap">

        {/* Logo area */}
        <div>
          <Logo />
        </div>

        {/* Searchbar area */}
        <div className="max-sm:w-full max-md:hidden">
          <SearchBar />
        </div>

        {/* Cart & Signin */}
        <div className="flex items-center gap-1.5 max-md:hidden">
          <HeaderCartBtn />
          <HeaderSinginBtn />
        </div>

        <HeaderBarsBtn />
      </div>
    </header>
  )
}