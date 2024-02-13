import React from "react";
import "./BlogPost.css";
import { Carousel } from "./Carousel";
import link1 from "./photos/link1.jpg";
import link2 from "./photos/link2.jpg";
import link3 from "./photos/link3.jpg";

const DATA = [{
  img: link1,
  title: "10 tips for pelvic health", 
  snippet: "this is a blog about health",
  description: "Carla Walker",
  link: "https://codepen.io/AdamMorsi/pen/VNWvww"
}, {
  img: link3,
  title: "ways to decrease stress", 
  snippet: "this is a blog about more health",
  description: "John Hamm",
  link: "https://codepen.io/AdamMorsi/pen/VNWvww"
}, {
  img: link2,
  title: "foods for healthy gut", 
  snippet: "even more health",
  description: "Lydia Wilson",
  link: "https://codepen.io/AdamMorsi/pen/VNWvww"
}]

console.log("what is DATA", DATA)

export const BlogPost = () => {
  return (
    <div className="container column">
    <h1 className="header"> BLOG POSTS </h1>
    <div className="blog-category"> 
          <h2> CATEGORY </h2>
    </div>
    <div className="posts">
    <Carousel>
      {DATA.map((d, i) => 
        <Post data={d} key={i} />
      )}
    </Carousel>

    </div>
  </div>
  )
}


const Post = ({data}) => {

  const { img, title, snippet, description, link} = data;

  return (
      <div className="post-container">
        <div className="post-img-container">
          <img className="post-img" src={img} alt="post"/>
          <a href={link} target="_blank" className="read-more-text" rel="noreferrer" >read more</a>
          </div>
          <h3>{title}</h3>
          <h4>{snippet}</h4>
          <div>{description}</div>
          {/* <div>{link}</div> */}
      </div>
  )
}