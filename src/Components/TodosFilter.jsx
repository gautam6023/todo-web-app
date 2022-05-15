import React from "react";
import { UserDtailsCon } from "./Common.styled";
import { Link } from "react-router-dom";
const TodosFilter = () => {
  return (
    <UserDtailsCon>
      <div className="optionsLinks">
        <div>
          <Link className="links" to={"#"}>
            All
          </Link>
          <p>0</p>
        </div>
        <div>
          <Link className="links" to={"#"}>
            Personal
          </Link>
          <p>0</p>
        </div>
        <div>
          <Link className="links" to={"#"}>
            Official
          </Link>
          <p>0</p>
        </div>
        <div>
          <Link className="links" to={"#"}>
            Others
          </Link>
          <p>0</p>
        </div>
      </div>
    </UserDtailsCon>
  );
};

export default TodosFilter;
