//import type { NextApiRequest, NextApiResponse } from 'next';
//import { prisma } from '@/lib/prisma';


export async function GET(request: Request) {
    return Response.json({message: "i work"}, {status: 200});
}