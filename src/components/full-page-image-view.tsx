import {db} from "~/server/db";

export async function FullPageImageView(props:{id:string}) {
    const image = await db.query.posts.findFirst({where:(model,{eq})=>{
            return eq(model.id,Number.parseInt(props.id));
        }})
    if(!image){return }
    return (<div>
       <img src={image.url} alt={image.name}/>
    </div>)
}