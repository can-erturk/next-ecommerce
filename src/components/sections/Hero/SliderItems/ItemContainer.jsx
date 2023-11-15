export default function ItemContainer({ children, backgroundImage }) {
  return (
    <div
      className="h-full bg-no-repeat bg-[length:auto_100%] bg-[position:right_top] max-xl:bg-[position:60%_top] max-lg:!bg-none pb-[32px]"
      style={{ backgroundImage }}
    >
      <div className="h-full relative container flex flex-col justify-center max-lg:items-center">
        {children}
      </div>
    </div>
  )
}