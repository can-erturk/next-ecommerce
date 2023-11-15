import ItemContainer from "./ItemContainer"
import Description from "../ui/Description"
import StartingAt from "../ui/StartingAt"
import Title from "../ui/Title"
import Button from "../ui/Button"

export default function WomensFashion() {
  return (
    <ItemContainer backgroundImage="url('/images/hero-1.png')">
      <Description>Women Fashion Trends</Description>
      <Title>Women's Fashion</Title>

      <div className="flex items-center mt-6 gap-8 max-sm:flex-col">
        <StartingAt>$99.00</StartingAt>
        <Button>Shop Now</Button>
      </div>
    </ItemContainer>
  )
}