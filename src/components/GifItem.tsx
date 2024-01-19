import { FunctionComponent } from "react"

interface PropertiesGifGrid {
    title:  string;
    url:    string;
}
export const GifItem: FunctionComponent<PropertiesGifGrid> = ({url, title}: PropertiesGifGrid) => {
  return (
    <div className="card">
      <p>{ title }</p>
      <img srcSet={ url } alt={ title } />
    </div>
  )
}

