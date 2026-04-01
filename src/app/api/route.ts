//import type { NextApiRequest, NextApiResponse } from 'next';
//import { prisma } from '@/lib/prisma';


export async function GET() {
    return Response.json("i work", {status: 200});
}