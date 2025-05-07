import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import "./Plans.css";

const Plans = () => {
  // 1. Initialize from localStorage (or empty array)
  const [planList, setPlanList] = useState(() => {
    const saved = localStorage.getItem("plans");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Inputs for each of the four slots
  const [planInput1, setPlanInput1] = useState("");
  const [planInput2, setPlanInput2] = useState("");
  const [planInput3, setPlanInput3] = useState("");
  const [planInput4, setPlanInput4] = useState("");

  // 3. Persist planList whenever it changes
  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(planList));
  }, [planList]);

  // 4. Add or replace a plan at slot `index`
  const addPlan = (index, inputValue, setter) => {
    if (!inputValue.trim()) return;
    const updated = [...planList];
    if (index === planList.length) {
      updated.push(inputValue);
    } else {
      updated[index] = inputValue;
    }
    setPlanList(updated);
    setter("");
  };

  // 5. Remove the plan at slot `index`
  const clearPlan = (index) => {
    const updated = [...planList];
    updated.splice(index, 1);
    setPlanList(updated);
  };

  // Helper to render one slot
  const renderSlot = (index, inputValue, setter) => {
    const hasPlan = planList[index] != null;
    return (
      <div className={`Plan-${index + 1}`}>
        <div className="Plans-Content">
          {hasPlan ? (
            <span>{planList[index]}</span>
          ) : (
            <input
              type="text"
              placeholder={`Plan #${index + 1}`}
              value={inputValue}
              onChange={(e) => setter(e.target.value)}
            />
          )}
          <button
            className="Add-Plan"
            onClick={() =>
              hasPlan
                ? clearPlan(index)
                : addPlan(index, inputValue, setter)
            }
            style={{
              border: "none",
              cursor: "pointer",
              background: "none",
            }}
          >
            {hasPlan ? <FaMinusCircle /> : <FaPlusCircle />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="Plans">
      <div className="Plan-Title">
        <h1>Plans Screen</h1>
      </div>
      <div className="Plans-Container">
        {renderSlot(0, planInput1, setPlanInput1)}
        {renderSlot(1, planInput2, setPlanInput2)}
        {renderSlot(2, planInput3, setPlanInput3)}
        {renderSlot(3, planInput4, setPlanInput4)}
      </div>
    </div>
  );
};

export default Plans;
