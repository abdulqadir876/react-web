import Profile from "./Profile";
import Project from "./Project";
import "./style/body.css";
import "./style/profile.css";

const Home = () =>{
    return(
        <div className="container-home">
            <div className="content">
            <div className="text-presentation">
                <div className="text">
                <h2>Abdikadir Mohamed</h2>
                <h5>I'm a Fullstack Enginner in Garowe</h5>
                <p>I am a full-stack PHP developer.I spend my days 
                    designing and developing web applications. I specialize in the Laravel PHP framework on the 
                    backend, React.js on the frontend ,Bootstrap and Tailwind CSS 
                    for styling. Currently I work full time as a Laravel developer, 
                    building internal apps and tools for my employer.</p>
            </div>
              <Project/>
            </div>
            <div className="profile-section">
                <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt=""/>
                <div className="profesionals">
                    <h2>Profesionals</h2>
                    <Profile/>
                </div> 
              
            </div> 
            </div> 
        </div>
       
    )
}
export default Home;