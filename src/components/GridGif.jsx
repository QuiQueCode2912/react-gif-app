import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GridGif = ({category}) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
      <h3 className="text-3xl font-semibold pb-4">{ category }</h3>
      { isLoading && (<p>Cargando...</p>) }
      <ol className="grid grid-cols-3 gap-4">
        {images.map( (image) => (
          <GifItem 
            key={image.id}
            { ...image }
          />
        ))}
      </ol>
    </>
  )
}

export default GridGif