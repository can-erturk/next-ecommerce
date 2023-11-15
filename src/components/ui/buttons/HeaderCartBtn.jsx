import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function HeaderCartBtn() {
  return (
    <button className="header-btn">
      <AiOutlineShoppingCart size={20} />
      <span className="ml-1.5 mt-[1px] font-medium text-sm max-lg:hidden">Cart</span>
    </button>
  )
}