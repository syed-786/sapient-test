import React,{useState, useEffect} from "react";
import axios from "axios";
import "../App.css";

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    fetchData();
  }, [limit]);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=${limit}`);
    setLoading(false);
    setData(res.data);
  };

  const setLimitHandler = () => {
    setLimit(prevLimit => prevLimit + 8);
  }

  const renderResult = () => {
    return (
      loading ? <img className='image-center' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
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
        {data.length > 7 ? <span className='load-more-button' onClick={setLimitHandler}>Load More...</span> : null}
      </div>
    </>
  );
}

export default React.memo(Main);
