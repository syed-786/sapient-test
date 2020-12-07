import React,{useState, useEffect, useCallback} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./search.css";
import loader from "../../loader.gif";

function Search() {
  let location = useLocation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  
//fetch the search result and set the data in state
  const fetchData = useCallback(async () => {
    setLoading(true);
    const search_params = location && location.search.replace("?", "");
    const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100${search_params}`);
    if(res && res.data)
    setLoading(false);
    setData(res.data);
  },[location])


  useEffect(() => {
    fetchData();
  }, [location.search, fetchData]);


  const renderResult = () => {
    return (
      loading ? <img className='image-center' src={loader} alt='loader'/>
      :
      (
      <div className='band'>
        {data && data.length ? (
          data.map(
            (
              {
                mission_name,
                flight_number,
                launch_year,
                launch_success,
                links,
                rocket,
              },
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
                  <span>
                    <strong>Successful Landing</strong>:{" "}
                    {JSON.stringify(
                      rocket &&
                        rocket.first_stage &&
                        rocket.first_stage.cores &&
                        rocket.first_stage.cores[0].land_success
                    )}
                  </span>
                </article>
              </div>
            )
          )
        ) : (
          <h3>Data not found!</h3>
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
      </div>
    </>
  );
}

export default React.memo(Search);     // React.memo() from component optimization. It will prevent unnecessory rerendring of Component. 
