const GifItem = ({title, url}) => {
  return (
    <div className="w-full rounded-md flex flex-col justify-between">
      <img className="h-40 object-cover" src={url} alt={title} />
      <p className="py-1">{ title }</p>
    </div>
  )
}

export default GifItem