const Blog = (props)=>{
    const names = props.name;
    return(
    <div  style={blogStyle}>
       {names.map((name)=>(
        <div className="card text-center">
                <div className="blog-review" key={name.id}>
                   <img src={name.avatar_url} className="rounded-circle"/>
                   <h2>{name.login}</h2>
                   <a href={name.html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
                 </div>
            ))}
        </div> 
    )
}
const blogStyle={
    display: 'grid',
    // gridTempleteColumns: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    marginTop: '1rem'
}
export default Blog;