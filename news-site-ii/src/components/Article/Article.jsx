function Article({id, image, title, byline, caption, abstract, created_date}) {
 
  return (
    <div>
       {image ? <img src={image}/>: <h2>Image not found</h2>}
       {caption ? <h3>{caption}</h3> : <h2>No Caption</h2>}
    </div>
  )
}

export default Article;
