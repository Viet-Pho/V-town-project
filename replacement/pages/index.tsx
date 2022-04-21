import axios from "axios"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState, useEffect } from "react"

const Home: NextPage = () => {
  const [name, setName] = useState("Nothing")
  useEffect((): void => {
    console.log("hello")
    axios.get("/api/hello").then((res) => {
      setName(res.data.name)
    })
  }, [])
  return <div className="p-10">{name}</div>
}

export default Home
