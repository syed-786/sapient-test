import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import './sideBar.css'
//array of filter buttons
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
  'Clear filter'
];

function SideBar() {
  const [launch_year, setLaunchYear] = useState('');
  const [launch_success, setLaunchSuccess] = useState('');
  const [land_success, setLandSuccess] = useState('');

  let history = useHistory();

  //this function will accept the filer name and  value and set them in state 
  const onSearchSubmit = (state_val, state_name) => {
    
    //filter condition for launch years
    if (state_name === "launch_year") {
      if(state_val == "Clear filter"){
          setLaunchYear('');
          setLaunchSuccess('');
          setLandSuccess('');
          history.replace({pathname : "/"}); 
      }
      else{
          setLaunchYear(state_val);
      }
    }

    //filter condition for launch successful
    if (state_name === "launch_success") { 
      if(state_val == "clear"){
        // if(launch_year === '' && launch_success === ''){
        //   return;
        // }
        setLaunchSuccess('');
        history.replace({
          pathname: "/search",
          search: `${launch_year ? `&launch_year=${launch_year}` : ""}${
            land_success ? `&land_success=${land_success}` : ""
          }`,
        }); 
      }
      else{
          setLaunchSuccess(state_val);
      }
    }

    //filer condition for land successful
    if (state_name === "land_success") {
      if(state_val == "clear"){
        // if(launch_year === '' && land_success === ''){
        //   return;
        // }
        setLandSuccess('');
        history.replace({
          pathname: "/search",
          search: `${launch_year ? `&launch_year=${launch_year}` : ""}${
            launch_success ? `&launch_success=${launch_success}`: ""
          }`,
        }); 
      }
      else{
        setLandSuccess(state_val);
      }
    }

  };


  //useEffect will push the filer value and push them in history object  
  useEffect(() => {

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
          <button style={{backgroundColor : el ==='Clear filter' ? 'tomato': 
                  el === launch_year ? '#7cb902' : null}}          
                  className='pill' key={el} 
                  onClick={() => onSearchSubmit(el, "launch_year")}>
                  {el}
          </button>
      </li>
    ));
  };

  //jsx for side bar
  return (
    <div className='divL'>
      <h4>Filters</h4>
        <p>Launch Year</p>

      <div className='pills__container'>
        <ul>{renderYear()}</ul>
      </div>

      <h4>Successful Launch</h4>
        <div className='launch'>
           <button className='pill' 
                   style={{backgroundColor : launch_success  == 'true' ? '#7cb902' : null}}
                   onClick={() => onSearchSubmit("true", "launch_success")}>
                   True
           </button>
           <button className='pill' 
                   style={{backgroundColor : launch_success  == 'false' ? '#7cb902' : null}}
                   onClick={() => onSearchSubmit("false", "launch_success")}>
                   False
           </button>
           <button style={{backgroundColor : 'tomato'}} 
                   className='pill' onClick={() => onSearchSubmit("clear", "launch_success")}>
                   Clear filter
           </button>
        </div>

      <h4>Successful Landing</h4>
        <div className='launch'>
           <button className='pill'
                   style={{backgroundColor : land_success  == 'true' ? '#7cb902' : null }}
                   onClick={() => onSearchSubmit("true", "land_success")}>
                   True
           </button>
           <button className='pill'
                   style={{backgroundColor : land_success == 'false' ? '#7cb902' : null }}
                   onClick={() => onSearchSubmit("false", "land_success")}>
                   False
           </button>
           <button style={{backgroundColor : 'tomato'}} 
                   className='pill' onClick={() => onSearchSubmit("clear", "land_success")}>
                   Clear filter
           </button>
       </div>
    </div>
  );
}

export default React.memo(SideBar);
