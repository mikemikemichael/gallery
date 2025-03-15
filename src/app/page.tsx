import Link from "next/link";
import {db} from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import {getImages} from "~/server/querys";
import Image from "next/image";

export const dynamic = 'force-dynamic';

async function Images() {
    const posts = await getImages()
    return (
        <div className="flex flex-wrap gap-4">
            {posts.map((post) => (
                <div key={post.id} className="w-48">
                    <Link href={`/img/${post.id}`}>
                        <Image width={600} height={600} alt={post.name} src={post.url} />
                    </Link>
                </div>
        ))}
        </div>
    );
}


export default async function HomePage() {


  return (
    <main>
      <div >
          <SignedOut>
              <div>please sign in</div>
          </SignedOut>
          <SignedIn>
              <Images/>
          </SignedIn>

      </div>
    </main>
  );
}
