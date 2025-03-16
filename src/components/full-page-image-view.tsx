import {db} from "~/server/db";
import {Button} from "~/components/ui/button";
import {deleteImage} from "~/server/querys";

export async function FullPageImageView(props:{id:string}) {
    const image = await db.query.posts.findFirst({where:(model,{eq})=>{
            return eq(model.id,Number.parseInt(props.id));
        }})
    if(!image){return }
    return (<div>
       <img src={image.url} alt={image.name}/>
        <form action={async ()=>{
            'use server'
            deleteImage()
        }}>
            <Button type={"submit"} variant="destructive">Destructive</Button>
        </form>

    </div>)
}