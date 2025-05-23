import React from "react";
import SideBar from "./SideBar";

const Contact = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", position: "relative", left: "450px", top: "80px" }}>
      <h1 style={{position:"relative",top: "0px", left:"100px"}}>Contact Us!</h1>
      <div className="Contact-form">
<p style={{position:"relative", right:"45px"}}>Have questions or feedback? Reach out to us using the form below.</p>
      <div style={{ position:"relative", left:"80px" }}>
        <form style={{ display: "flex", flexDirection: "column" }}>

          <label>
            <div style={{position:"relative", display:"flex", flexDirection:"column",fontSize:"30px", display:"flex", flexDirection:"column"}}>
            Name
            </div>
            <input type="text" name="Name" required  style={{width:"fit-content",height:"fit-content", minWidth:"100px", minHeight:"30px"}}/>
          </label>

          <label >
            
            
            <div style={{width:"fit-content", minWidth:"100px", fontSize:"30px", display:"flex", flexDirection:"column"}}>
              Email
            </div>
            <input type="text" name="Email" required style={{width:"fit-content", minWidth:"100px",minHeight:"30px"}} />
          </label>

          <label>
            
            <div style={{width:"fit-content", minWidth:"100px", fontSize:"30px", display:"flex", flexDirection:"column"}}>
              Message
            </div>
            <input type="text" name="Message" style={{ minHeight:"30px" }} required />
          </label>

          <button type="submit" style={{width:"fit-content", minWidth:"100px", backgroundColor:"#1E3A8A",color:"white", position:"relative", left:"35px", top:"3px", height:"30px",width:"100px", borderRadius:"2px",}}>
          
            Submit
          </button>

        </form>
</div>
      </div>
      
    </div>
  );
};

export default Contact;
