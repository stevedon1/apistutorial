import Link from 'next/link';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/posts',{cache:"no-store"});
  const posts = await response.json();

  return (
    <div className="">
      <h1 className="font-bold text-center text-3xl mb-1">Blogs</h1>
      <div className="flex justify-center items-center mt-4">
        <ul>
          {posts.map((post: any) => (
            <li className="shadow-lg p-4 m-4 rounded-md" key={post._id}>
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="">{post.content}</p>
              <p><small>Created at: {post.createdAt}</small></p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/create-post">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Create Post</button>
        </Link>
      </div>
    </div>
  );
}
