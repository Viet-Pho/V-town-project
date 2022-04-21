// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  amount: number | null
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req
  if (method === "POST") {
    const { amount } = req.body
    await setTimeout(() => {}, 500)
    res.status(200).json({ amount: amount + 1 })
  } else {
    res.status(404).json({
      amount: null,
      message: "Method not found",
    })
  }
  // get data from body
}
