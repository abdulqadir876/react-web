import { useState } from "react";
import './style/resume.css'
const Resume = () =>{
    const[text, setText] = useState([
       {title: 'Education', name: 'Puntland S. University', year: [2018,'-', 2021], id:1},
       {title: 'Work Experience', name: 'Lorem ipsum dolor sit', year: [2019, '-',2021], id:2},
       {title: 'Education', name: 'Gambool High School', year: [2014,'-',2018], id:3}
    ]);
    const [circleText, setCircleText] = useState([
        {year: 2018, month: 'Oct'},
        {year: 2019, month: 'Feb'},
        {year: 2021, month: 'Feb'}
    ])
    return(
        <div className="resume-container">
            <div className="content-footer">
                <div className="line">
                {circleText.map((circle)=>(
                <div className="circle">
                    <div className="text" key={circle.id}>
                        <h5>{circle.year}</h5>
                        <h5>{circle.month}</h5>
                    </div>
                    </div>  
                ))}
    
                </div>
                 {text.map((pro)=>(
                <div className="card">
                    <div className="text" key={pro.id}>
                        <h4>{pro.title}</h4>
                        <h5>{pro.name}</h5>
                        <h5>{pro.year}</h5>
                    </div>
                    </div>  
                ))}
            </div>
        </div>
    )
}
export default Resume;