import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const Newsitem = (props)=> {
  



  // constructor(){

  //   super();

  //   console.log("Inside Newsitem constructor")
  // }
        
/*
<button type="button" className="btn btn-primary position-relative">
  Inbox
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 99+</span>
</button>
*/


    return (
      <div>
        <div className="card">
  <img src={props.imageUrl!=null?props.imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_icnonsILxOwjnB_JigBAq9s_l0WcRZ6DVw&usqp=CAU"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title!=null?props.title:"Unknown"} <span className="badge bg-secondary">New</span><span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger my-2" style={{left:'90%',zIndex:1}}> {props.source}</span></h5>
    <p className="card-text">{props.description!=null?props.description:"Unknown"}</p>
    <p className="card-text"><small className="text-body-secondary">By {props.author!=null?props.author:"Unknown"} on {new Date(props.date).toGMTString()}</small></p>
    <a href={props.url!=null?props.url:""} className="btn btn-primary" target= "_blank">Read More</a>
    
  </div>
</div>
      </div>

      /*
<div className="card mb-3">
  <img src="..." className="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  <img src="..." className="card-img-bottom" alt="...">
</div>
      */
    )
  
}

export default Newsitem
