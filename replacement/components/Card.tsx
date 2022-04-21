import React from "react"
import Image from "next/image"

type Props = {
  id: number
  name: string
  size: number
  weekdayPrice: number
  weekendPrice: number
  picture: any
}

function Card({ id, name, size, weekdayPrice, weekendPrice, picture }: Props) {
  return (
    <div className=" bg-white border rounded-2xl shadow-xl shadow-slate-300/60">
      <Image
        alt="Room Card"
        className="aspect-video w-96 rounded-t-2xl object-cover object-center"
        src="/room.jpg"
        height="100%"
        width="100%"
      />
      <div className="text-center ">
        <h1 className="text-2xl font-medium text-slate-600 pb-2">{name}</h1>
        <small className="text-blue-400 text-xxl">For {size} people</small>
        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
          Weekday Price: $ {weekdayPrice.toFixed(2)} | Weekdend Price: $
          {weekendPrice.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default Card
