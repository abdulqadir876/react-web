import { useState } from "react";

const Profile = () =>{
    const[profile, setProfile] = useState([
        {title:'React js', id: 1},
        {title:'Laravel', id: 1},
        {title:'Tailwind', id: 1},
    ]);
    return(
        <div className="project">
            <div className="profile-row">
               {profile.map((pro)=>(
                <div className="profile-project" key={pro.id}>
                    <h4>{pro.title}</h4>
                </div>
            ))}
            </div>

        </div>
    )
}

export default Profile;