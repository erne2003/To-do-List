import React, { useState, useEffect } from "react";
import "./Plans.css";

// Simple Plan class
export class Plan {
  constructor(name, taskList = []) {
    this.name = name;
    this.taskList = taskList;
  }
}

const Plans = () => {
  // Load + rehydrate from localStorage, ensuring exactly 4 slots
  const [planList, setPlanList] = useState(() => {
    const raw = localStorage.getItem("plans");
    let arr = [];
    if (raw) {
      try {
        arr = JSON.parse(raw).map(p => new Plan(p.name, p.taskList || []));
      } catch {
        arr = [];
      }
    }
    // Ensure fixed length of 4
    const slots = Array(10).fill(null);
    arr.forEach((p, i) => {
      if (i < 10) slots[i] = p;
    });
    return slots;
  });

  // Persist only real plans (no nulls) whenever planList changes
  useEffect(() => {
    const toSave = planList
      .filter(p => p !== null)
      .map(p => ({ name: p.name, taskList: p.taskList }));
    localStorage.setItem("plans", JSON.stringify(toSave));
  }, [planList]);

  // Four input slots for adding plans
  const [inputs, setInputs] = useState(Array(4).fill(""));

  const addPlan = index => {
    const name = inputs[index].trim();
    if (!name) return;
    const newP = new Plan(name);
    setPlanList(pls => {
      const copy = [...pls];
      copy[index] = newP;
      return copy;
    });
    setInputs(inp => {
      const c = [...inp];
      c[index] = "";
      return c;
    });
  };

  const clearPlan = index => {
    setPlanList(pls => {
      const copy = [...pls];
      copy[index] = null;    // clear that slot without reshaping array
      return copy;
    });
  };

  const renderSlot = index => {
    const plan = planList[index];
    return (
      <div key={index} className={`Plan-${index + 1}`}>
        <div className="Plans-Content">
          {plan ? (
            <>
              <h3>{plan.name}</h3>
            </>
          ) : (
            <input style={{width:'300px', height:'40px', position:'relative',}}
              type="text"
              placeholder={`Enter plan #${index + 1} name`}
              value={inputs[index]}
              onChange={e => {
                const c = [...inputs];
                c[index] = e.target.value;
                setInputs(c);
              }}
            />
          )}
          <button
            className="Add-Plan"
            onClick={() => (plan ? clearPlan(index) : addPlan(index))}
            style={{ border: "none", cursor: "pointer", background: "none" }}
          >
            {plan ? "Remove Plan" : "Add Plan"}
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
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(renderSlot)}
      </div>
    </div>
  );
};

export default Plans;
