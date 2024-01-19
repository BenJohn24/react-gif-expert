import { GIF } from "../interfaces/gif.interface";

export const getGifs = async (category: string) => {
    const url: string = `https://api.giphy.com/v1/gifs/search?api_key=Sd0oTptzPfI9aLBRMAyyPDmFjXwFdMF7&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } :GIF = await resp.json();

    const gifs = data.map( img  => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}