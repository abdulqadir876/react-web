import './style/form.css'

const Contact = () =>{
    return(
        <div className="contact">
       <div className="form-group  mt-10">
           <form action="">
               <div className="names">
                    <div className="labels-name">
                        <label htmlFor="">first name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="labels-name">
                        <label htmlFor="">last name</label>
                        <input type="text" className="form-control"/>
                    </div>
               </div>
               <div className="input-section">
                    <label htmlFor="">email</label>
                    <input type="text" className="form-control"/>
                    <p className="grey">Some tips - as long as needed</p>
               </div>
               <div className="input-section">
                    <label htmlFor="">message</label>
                    <textarea name=""  id="" cols="20" rows="5" className="form-control"></textarea>
                    <p className="grey">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
               </div>
               <div className="btn">
                        <button className="btn btn-primary">SEND</button>
               </div>
           </form>
       </div>
       </div>
    )
}
export default Contact;