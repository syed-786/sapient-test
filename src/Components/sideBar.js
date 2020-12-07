import React from "react";

import { useHistory } from "react-router-dom";
const launch_year_arr = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];

function SideBar() {
  const [launch_year, setLaunchYear] = React.useState();
  const [launch_success, setLaunchsuccess] = React.useState();
  const [land_success, setLandSuccess] = React.useState();

  let history = useHistory();

  const onSearchSubmit = (state_val, state_name) => {
    if (state_name === "launch_year") {
      setLaunchYear(state_val);
    }
    if (state_name === "launch_success") {
      setLaunchsuccess(state_val);
    }
    if (state_name === "land_success") {
      setLandSuccess(state_val);
    }
  };

  React.useEffect(() => {
    const { push } = history || {};
    if (push && launch_year || launch_success || land_success)
      push({
        pathname: "/search",
        search: `${launch_year ? `&launch_year=${launch_year}` : ""}${
          launch_success ? `&launch_success=${launch_success}` : ""
        }${land_success ? `&land_success=${land_success}` : ""}`,
      });
  }, [launch_year, launch_success, land_success, history]);

  const renderYear = () => {
    return launch_year_arr.map((el) => (
      <li key={el}>
        <button className='pill' key={el} onClick={() => onSearchSubmit(el, "launch_year")}>
          {el}
        </button>
      </li>
    ));
  };
  return (
    <div className='divL'>
      <h4>Filters</h4>
      <p>Launch Year</p>
      <div className='pills__container'>
        <ul>{renderYear()}</ul>
      </div>
      <h4>Successful Launch</h4>
      <div className='launch'>
        <button className='pill' onClick={() => onSearchSubmit("true", "launch_success")}>
          True
        </button>
        <button className='pill' onClick={() => onSearchSubmit("false", "launch_success")}>
          False
        </button>
      </div>
      <h4>Successful Landing</h4>
      <div className='launch'>
        <button className='pill' onClick={() => onSearchSubmit("true", "land_success")}>
          True
        </button>
        <button className='pill' onClick={() => onSearchSubmit("false", "land_success")}>
          False
        </button>
      </div>
    </div>
  );
}

export default React.memo(SideBar);
