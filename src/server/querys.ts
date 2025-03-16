import {db} from "~/server/db";

export async function getImages() {
    const posts = await db.query.posts.findMany()
    return posts
}

export function deleteImage() {
    console.log('+++++++++')
}