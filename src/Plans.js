import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import './Plans.css'; // Importing CSS for styling

const Plans = () => {
  const [planList, setPlanList] = useState([]);
  const [planInput1, setPlanInput1] = useState("");
  const [planInput2, setPlanInput2] = useState("");
  const [planInput3, setPlanInput3] = useState("");
  const [planInput4, setPlanInput4] = useState("");
  const [InputDisabled1, setInputDisabled1] = useState(false); 
  const [InputDisabled2, setInputDisabled2] = useState(false); 
  const [InputDisabled3, setInputDisabled3] = useState(false); 
  const [InputDisabled4, setInputDisabled4] = useState(false); 

  // Handle adding the plan when the button is clicked
  const changePlanStatus = (planInput, planSetter, setInputDisabled) => {
    if (typeof planInput === "string" && planInput.trim() !== "") {
      setPlanList([...planList, planInput]); // Add the current input value to the planList array
      planSetter(""); // Clear the input field after adding the plan
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
            {!InputDisabled1 && (
              <input
                type="text"
                placeholder="Plan #1"
                value={planInput1}
                onChange={(e) => setPlanInput1(e.target.value)}
              />
            )}
            <button
              className="Add-Plan"
              style={{ border: "none", cursor: "pointer", background: "none", position: "relative", top: "3px" }}
              onClick={() => changePlanStatus(planInput1, setPlanInput1, setInputDisabled1)}
            >
              {InputDisabled1 ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            <span>{planList[0]}</span>
          </div>
        </div>

        {/* Second Plan */}
        <div className="Second-Plan">
          <div className="Plans-Content">
            {!InputDisabled2 && (
              <input
                type="text"
                placeholder="Plan #2"
                value={planInput2}
                onChange={(e) => setPlanInput2(e.target.value)}
              />
            )}
            <button
              className="Add-Plan"
              style={{ border: "none", cursor: "pointer", background: "none", position: "relative", top: "3px" }}
              onClick={() => changePlanStatus(planInput2, setPlanInput2, setInputDisabled2)}
            >
              {InputDisabled2 ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            <span>{planList[1]}</span>
          </div>
        </div>

        {/* Third Plan */}
        <div className="Third-Plan">
          <div className="Plans-Content">
            {!InputDisabled3 && (
              <input
                type="text"
                placeholder="Plan #3"
                value={planInput3}
                onChange={(e) => setPlanInput3(e.target.value)}
              />
            )}
            <button
              className="Add-Plan"
              style={{ border: "none", cursor: "pointer", background: "none", position: "relative", top: "3px" }}
              onClick={() => changePlanStatus(planInput3, setPlanInput3, setInputDisabled3)}
            >
              {InputDisabled3 ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            <span>{planList[2]}</span>
          </div>
        </div>

        {/* Fourth Plan */}
        <div className="Fourth-Plan">
          <div className="Plans-Content">
            {!InputDisabled4 && (
              <input
                type="text"
                placeholder="Plan #4"
                value={planInput4}
                onChange={(e) => setPlanInput4(e.target.value)}
              />
            )}
            <button
              className="Add-Plan"
              style={{ border: "none", cursor: "pointer", background: "none", position: "relative", top: "3px" }}
              onClick={() => changePlanStatus(planInput4, setPlanInput4, setInputDisabled4)}
            >
              {InputDisabled4 ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
            <span>{planList[3]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
