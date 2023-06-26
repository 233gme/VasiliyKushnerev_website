import { NextResponse } from 'next/server';
import connectDb from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request) => {
  try {
    await connectDb();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Get Posts Error', { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await connectDb();

    await newPost.save();

    return new NextResponse('Post has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Create Post Error', { status: 500 });
  }
};
