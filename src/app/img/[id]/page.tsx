import {FullPageImageView} from "~/components/full-page-image-view";

export default async function PhotoModal({
                                             params,
                                         }: {
    params: Promise<{ id: string }>;
}) {
    const photoId = (await params).id;
    return  <FullPageImageView id={photoId}></FullPageImageView>
}