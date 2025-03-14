import Link from "next/link";
import {db} from "~/server/db";

export const dynamic = 'force-dynamic';


export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <img src={post.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
