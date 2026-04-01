import type { NextApiRequest, NextApiResponse } from 'next';
//import { prisma } from '@/lib/prisma';


export async function GET(req: NextApiRequest, res:NextApiResponse) {
    return Response.json("i work");
}