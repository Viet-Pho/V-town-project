import React from "react"
import Card from "../../components/Card"
type Props = {}

interface Room {
  id: number
  name: string
  size: number
  weekdayPrice: number
  weekendPrice: number
  picture: any
}
const rooms: Room[] = [
  {
    id: 1,
    name: "VIP01",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 2,
    name: "VIP02",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 3,
    name: "VIP03",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 4,
    name: "VIP04",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 5,
    name: "VIP05",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 6,
    name: "VIP06",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 7,
    name: "VIP07",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 8,
    name: "VIP08",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
  {
    id: 9,
    name: "VIP09",
    size: 5,
    weekdayPrice: 100,
    weekendPrice: 150,
    picture: "/room.jpg",
  },
]

function booking({}: Props) {
  return (
    <>
      <div className="p-5 gap-5 grid grid-cols-3 bg-gradient-to-r from-rose-100 to-teal-100">
        {rooms.map((room, index) => (
          <Card
            key={index}
            id={room.id}
            name={room.name}
            size={room.size}
            weekdayPrice={room.weekdayPrice}
            weekendPrice={room.weekendPrice}
            picture={room.picture}
          />
        ))}
      </div>
    </>
  )
}

export default booking
