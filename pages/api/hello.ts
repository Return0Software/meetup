import { NextApiRequest, NextApiResponse } from "next";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export interface HelloResponseType {
  name: string;
}

export const helloResponse = (): HelloResponseType => {
  return { name: "John Doe" };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(helloResponse());
};
