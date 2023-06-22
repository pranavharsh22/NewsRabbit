import React from 'react'

const NewsItem=(props)=> {
  
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div className="my-3">
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"40%",zIndex:"1"}}>
    {source}
    
  </span>
  <img src={!imageUrl?"https://media.nbclosangeles.com/2023/06/Anna-Shay.png?resize=1200%2C675&quality=85&strip=all":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
