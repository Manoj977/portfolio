import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Achievements } from "../../typing";


const query = groq`*[_type == "achievements"]{
  ...,
  technologies[]->
}`;


type Data = {
  Achievements: Achievements[];
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const Achievements: Achievements[] = await sanityClient.fetch(query);
  res.status(200).json({ Achievements });
}
