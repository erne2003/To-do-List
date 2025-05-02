import React, { useState } from "react";
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
import './Plans.css'; // Importing CSS for styling

const Plans = () => {
  const [planList, addPlan] = useState([]);
  const [planInput, setPlanInput] = useState("");
  const [InputDisabled, setInputDisabled] = useState(false); // State to manage input field disabled status]

  // Handle adding the plan when the button is clicked
  const changePlanStatus = () => {
    if (planInput.trim() !== "") {
      addPlan([...planList, planInput]); // Add the current input value to the planList array
      setPlanInput(""); // Clear the input field after adding the plan
      setInputDisabled(true); // Disable the input field after adding a plan
    }
  };

  return (
    <div className="Plans">
      <div className="Plan-Title">
        <h1>Plans Screen</h1>
      </div>

      <div className="Plans-Container">
        {/* First Plan */}
        <div className="First-Plan">
          <div className="Plans-Content">
            {/* Input field for Plan #1 */}
            <input
              type="text"
              placeholder="Plan #1"
              value={planInput} // Bind the input value to the planInput state
              onChange={(e) => setPlanInput(e.target.value)} // Update planInput state on change
              disabled={InputDisabled} // Disable the input field if InputDisabled is true
              style={{ visibility: InputDisabled ? "hidden" : "visible" }} // Hide the input field if InputDisabled is true
            />
            {/* Button to add plan */}
            <button
              className="Add-Plan"
              style={{
                border: "none",
                cursor: "pointer",
                background: "none",
                position: "relative",
                top: "3px",
              }}
              onClick={changePlanStatus} // Add the plan to the list when clicked
            >{InputDisabled ? (
              <FaMinusCircle /> // Icon when input is disabled
            ) : (
              <FaPlusCircle /> // Icon when input is enabled
            )}
            </button>
            {/* Display the first plan from the list */}
            <span style={{left:"-240px", position:"relative", marginRight:"10px"}}>{planList[0]}</span>
          </div>
        </div>

        {/* Second Plan */}
        <div className="Second-Plan">
          <div className="Plans-Content">
            <input type="text" placeholder="Plan #2" />
            <button className="Add-Plan" style={{ border: "none", cursor: "pointer", background: "none", position: "relative", top: "3px" }}>
              <FaPlusCircle />
            </button>
            <span style={{left:"-240px", position:"relative", marginRight:"10px"}}>{planList[1]}</span>
          </div>
        </div>

        {/* Third Plan */}
        <div className="Third-Plan">
          <div className="Plans-Content">
            <input type="text" placeholder="Plan #3" />
            <button className="Add-Plan" style={{ border: "none", cursor: "pointer", background: "none", position: "relative", top: "3px" }}>
              <FaPlusCircle />
            </button>
            <span style={{left:"-240px", position:"relative", marginRight:"10px"}}>{planList[2]}</span>
          </div>
        </div>

        {/* Fourth Plan */}
        <div className="Fourth-Plan">
          <div className="Plans-Content">
            <input type="text" placeholder="Plan #4" />
            <button className="Add-Plan" style={{ border: "none", cursor: "pointer", background: "none", position: "relative", top: "3px" }}>
              <FaPlusCircle />
            </button>
            <span style={{left:"-240px", position:"relative", marginRight:"10px"}}>{planList[3]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
