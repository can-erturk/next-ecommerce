"use client"

import { settings } from "./utils"
import Slider from "react-slick"
import WomensFashion from "./SliderItems/WomensFashion"
import MensFashion from "./SliderItems/MensFashion"
import NewArrivals from "./SliderItems/NewArrivals"

export default function Hero() {
  return (
    <>
      <div className="h-[30rem] max-sm:h-80 mb-12 relative bg-[#f3f3f3]">
        <Slider {...settings}>
          <WomensFashion />
          <MensFashion />
          <NewArrivals />
        </Slider>
      </div>
    </>
  )
}
