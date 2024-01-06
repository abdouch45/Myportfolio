// Blogs.js
import React from 'react';
import '../Styles/blogs.css';

const Blogs = (props) => {
  return (
    <div className="centered-blogs-container">
      {props.data.map((blog) => (
        <div className="centered-blog-card" key={blog.title}>
          <img src={blog.path} alt="blog img" />
          <h3>{blog.title}</h3>
          <p>{blog.text}</p>
          <p className='auth'>written by: <h4>{blog.author}</h4></p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
