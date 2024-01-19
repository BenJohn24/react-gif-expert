import { FunctionComponent } from "react"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface PropertiesCategories {
    category: string
}

export const GifGrid: FunctionComponent<PropertiesCategories> = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>

       { isLoading && (<h2>Cargando...</h2>)  }
      <div className="card-grid">
        {
          images.map(( image) => (
           <GifItem key={ image.id } { ...image } />
          ))
        }
      </div>
    </>
  )
}

