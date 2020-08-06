import React, { useState, useEffect } from "react";


const Flexi = ({ onSubmit, config }) => {
  const [userName, setuserName] = useState("");
  const [userState, setuserState] = useState("");

  useEffect(() => {
  }, []);

  const userNameHandler = e => {
    setuserName(e.target.value);
  };

  const userStateHandler = e => {
    setuserState(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    onSubmit({ name: userName, place: userState });
  };

  return (
   
        <div className="form-wrapper">
      <h1>GoodWorkLab</h1>
      <form>
        {(config.length > 0) ?config.map((val) => {
          if (val.type === "TextField") {
            return (
                <div className="user">
                <label htmlFor={val.label}>{val.label}:</label>
                <input type="text" onChange={userNameHandler} />
              </div>
            );
          }
          if (val.type === "DropDown") {
            return (
                <div className="state">
                <label htmlFor={val.label}>{val.label}:</label>
                <select type="text"  onChange={userStateHandler}>
                  <option value="" />
                  {val.values.map(stateOption => {
                    return <option value={stateOption}>{stateOption}</option>;
                  })}
                </select>
              </div>
            );
          }
        }): <p>No data received</p> }
        <div className="button">
        <button type="submit" onClick={formSubmitHandler}>Submit</button>
        </div>
      </form>
      
    </div>
  );
};

export default Flexi;
