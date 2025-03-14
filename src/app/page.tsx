import Link from "next/link";
import {db} from "~/server/db";

export const dynamic = 'force-dynamic';

const images = [
    'https://cdn.pixabay.com/photo/2025/03/06/09/08/woman-9450191_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/10/11/16/43/french-bulldog-7514725_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/12/26/17/31/newborn-photography-9292504_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/09/30/13/55/torii-7489492_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/08/06/14/34/woman-8173091_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/09/08/20/30/architecture-9033164_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/01/22/16/43/countryside-9352596_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/02/22/16/06/mountain-9424297_1280.jpg',
    ].map((url,index)=>({id:index+1,url}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...images, ...images].map(({ url, id }, index) => (
          <div key={index + "-" + id} className="w-48">
            <img src={url} />
          </div>
        ))}
      </div>
    </main>
  );
}
