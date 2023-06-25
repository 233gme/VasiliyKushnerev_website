import { NextResponse } from 'next/server';
import connectDb from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (req, { params }) => {

  const { id } = params;

  try {
    await connectDb();

    const filter = { _id: id };
    const update = { $inc: { views: 1 } };
    const returnAfter = { returnOriginal: false };

    const post = await Post.findOneAndUpdate(filter, update, returnAfter);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse('GET Post Error', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connectDb();

    await Post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
