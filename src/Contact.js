import React from "react";
import SideBar from "./SideBar";
import "./Contact.css";
const Contact = () => {
  return (
    <div  className="Contact-Form border border-gray-300 shadow-md">
      <h1 style={{position:"relative",top: "0px", alignContent:'center', left:"125px"}}>Contact Us!</h1>
      <div className="Contact-form">
        <p style={{position:"relative", fontFamily:'lora', justifyContent:'center'}}>Have questions or feedback? Reach out to us using the form below.</p>
        <div style={{ position:"relative", left:"80px" }}>
          <form style={{ display: "flex", flexDirection: "column", justifyContent:'center', alignContent:'center', position:'relative', left:'40px'}}>

          <label>
            <div style={{position:"relative", display:"flex", flexDirection:"column",fontSize:"30px", display:"flex", flexDirection:"column"}}>
            Name
            </div>
            <input type="text" name="Name" required placeholder="Name"  style={{width:"fit-content",height:"fit-content", minWidth:"100px", minHeight:"30px"}}/>
          </label>

          <label >
            
            
            <div style={{width:"fit-content", minWidth:"100px", fontSize:"30px", display:"flex", flexDirection:"column", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', }}>
              Email
            </div>
            <input type="text" name="Email" required  placeholder="Email" style={{width:"fit-content", minWidth:"100px",minHeight:"30px"}} />
          </label>

          <label>
            
            <div style={{width:"fit-content", minWidth:"100px", fontSize:"30px", display:"flex", flexDirection:"column", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              Message
            </div>
            <input type="text" name="Message" placeholder="Message" style={{ minHeight:"30px" }} required />
          </label>

          <button type="submit" style={{width:"fit-content", minWidth:"100px", backgroundColor:"#1E3A8A",color:"white", position:"relative", left:"35px", top:"3px", height:"30px",width:"100px", borderRadius:"2px", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
          
            Submit
          </button>

        </form>
      </div>
    </div>
      
    </div>
  );
};

export default Contact;
