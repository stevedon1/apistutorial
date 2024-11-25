import { NextResponse } from "next/server";
import Post from "@/models/Posts"; // Import the Post model
import { connectToDatabase } from "@/lib/mongodb";

// GET Handler: Fetch all posts from the MongoDB collection
export async function GET() {
  try {
    await connectToDatabase();

    // Fetch posts from the database
    const posts = await Post.find();

    return NextResponse.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to fetch posts", details: error.message },
        { status: 500 }
      );
    }
  }
}

// POST Handler: Create a new post in the MongoDB collection
export async function POST(request:Request) {
  try {
    await connectToDatabase();

    // Parse the incoming request body
    const body = await request.json();

    // Create a new post using the Post model
    const newPost = new Post({
      title: body.title,
      content: body.content,
    });

    // Save the new post to the database
    await newPost.save();

    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to create post", details: error.message },
        { status: 500 }
      );
    }
  }
}
