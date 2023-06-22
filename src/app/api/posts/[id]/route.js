import { NextResponse } from 'next/server';
import connectDb from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (req, { params }) => {

  const { id } = params;

  try {
    await connectDb();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse('GET Post Error', { status: 500 });
  }
};
