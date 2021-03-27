import { useState } from "react";

const Project = () =>{
    const[blogs, setBlogs] = useState([
        {title:'Online Exemination', id: 1},
        {title:'School Management', id: 2},
        {title:'Build Saas', id: 3},
        {title:'React js', id: 4},
        {title:'Final Project', id: 5},
        {title:'CMS', id: 6}
    ]);

    return(
        <div className="project">
            <h3>Side Projects</h3>
            <div className="row">
               {blogs.map((blog)=>(
                <div className="side-project" key={blog.id}>
                    <h4>{blog.title}</h4>
                    
                </div>
            ))}
            </div>

        </div>
    )
}
export default Project;