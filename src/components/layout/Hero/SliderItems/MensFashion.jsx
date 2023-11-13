import ItemContainer from "./ItemContainer"
import Description from "../ui/Description"
import StartingAt from "../ui/StartingAt"
import Title from "../ui/Title"
import Button from "../ui/Button"

export default function MensFashion() {
  return (
    <ItemContainer backgroundImage="url('/images/hero-2.png')">
      <Description>Men Fashion Trends</Description>
      <Title>Men's Fashion</Title>

      <div className="flex items-center mt-6 gap-8 max-sm:flex-col">
        <StartingAt>$24.99</StartingAt>
        <Button>Shop Now</Button>
      </div>
    </ItemContainer>
  )
}