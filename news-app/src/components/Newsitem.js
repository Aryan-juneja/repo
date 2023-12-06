import React from 'react'

 const Newsitem =(props)=>  {
  
    let {title,description,imageUrl,url,author,date,source} = props;
    return (
      <div className='my-2'>
       
       <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9vCfFbqpuVoZF9Tk8smaYTAotzxFkc52vQ&usqp=CAU"} className="card-img-top" alt="..." />
 
  <div className="card-body">
    <h5 className="card-title"> {title} <span className="badge rounded-pill text-bg-danger">{source}</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small>By {author?author:'unknown'} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={url} target='_blank'  className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  
}
export default  Newsitem ;