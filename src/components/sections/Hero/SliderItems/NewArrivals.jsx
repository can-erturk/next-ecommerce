import ItemContainer from "./ItemContainer"
import Button from "../ui/Button"
import Description from "../ui/Description"
import Title from "../ui/Title"

export default function NewArrivals() {
  return (
    <ItemContainer backgroundImage="url('/images/hero-3.png')">
      <Description>Explore recently added</Description>
      <Title>New Arrivals</Title>

      <div className="mt-6">
        <Button>Explore Now</Button>
      </div>
    </ItemContainer>
  )
}