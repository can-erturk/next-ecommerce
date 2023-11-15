import Logo from "@/components/ui/Logo"
import SearchBar from "@/components/SearchBar"
import HeaderSinginBtn from "@/components/ui/buttons/HeaderSigninBtn"
import HeaderCartBtn from "@/components/ui/buttons/HeaderCartBtn"
import HeaderBarsBtn from "@/components/ui/buttons/HeaderBarsBtn"

export default function Header() {
  return (
    <header className="h-max border-b border-default">
      <div className="container h-24 max-sm:h-20 flex justify-between items-center flex-wrap">

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