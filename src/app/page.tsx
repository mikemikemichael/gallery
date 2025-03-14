import Link from "next/link";
import {db} from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";

export const dynamic = 'force-dynamic';


export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main>
      <div className="flex flex-wrap gap-4">
          <SignedOut>
              <div>please sign in</div>
          </SignedOut>
          <SignedIn>
              {posts.map((post) => (
                  <div key={post.id} className="w-48">
                      <img src={post.url} />
                  </div>
              ))}
          </SignedIn>

      </div>
    </main>
  );
}
