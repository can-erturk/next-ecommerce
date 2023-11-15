export default function SidebarActionBtn({ icon, text, onClick = () => { } }) {
  return (
    <button className="mobile-sidebar-btn" onClick={onClick}>
      {icon}
      <span className="ml-2 mt-[1px] font-medium">{text}</span>
    </button>
  )
}