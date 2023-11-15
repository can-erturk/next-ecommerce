export default function StartingAt({ children }) {
  return (
    <div className="flex items-center gap-2 mt-1 max-lg:mt-2 max-sm:hidden">
      Starting at: <span className="font-medium bg-white shadow py-1 px-2 -rotate-2 -translate-y-px">{children}</span>
    </div>
  )
}