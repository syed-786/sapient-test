import React,{useState, useEffect, useCallback} from "react";
import axios from "axios";
import "./main.css";
import loader from "../../loader.gif";

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(8);


  //this method will hit api and render initial data on screeen.
  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=${limit}`);
    setLoading(false);
    setData(res.data);
  },[limit])

//useEffect will run on initial render of component adn then rerun when their is a change in limit (when user clicks Load more button).
useEffect(() => {
  fetchData();
}, [limit, fetchData]);


  //method to set data limit
  const setLimitHandler = () => {
    setLimit(prevLimit => prevLimit + 8);
  }

  //contain jsx and data to display on screen
  const renderResult = () => {
    return (
      loading ? <img className='image-center' src={loader} alt='loader'/>
      :
      (
      <div className='band'>
        {data &&
          data.map(
            (
              { mission_name, mission_id, flight_number, launch_year, launch_success, links },
              idx
            ) => (
              <div className='card' key={idx}>
                <div className='text-center'>
                  <img width='100' src={links.mission_patch_small} alt={mission_name} />
                </div>
                <article>
                  <h4>
                    {mission_name}#{flight_number}
                  </h4>
                  <span>
                    <strong>Launch Year</strong>: {launch_year}
                  </span>
                  <span>
                    <strong>Successful Launch</strong>:{" "}
                    {JSON.stringify(launch_success || launch_success)}
                  </span>
                </article>
              </div>
            )
          )}
      </div>
      )
    );
  };

  return (
    <>
      <div className='divR'>
        <div className='support-grid'></div>
        {renderResult()}
        {/* Button to load more data from api */}
       { loading ? null :
        data.length > 7 ? <span className='load-more-button' onClick={setLimitHandler}>Load More...</span> : null
       }
        </div>
    </>
  );
}

export default React.memo(Main);   // React.memo() from component optimization. It will prevent unnecessory rerendring of Component. 
