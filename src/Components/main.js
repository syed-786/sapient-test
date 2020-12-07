import React from "react";
import axios from "axios";
import "../App.css";

function Main() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("https://api.spaceXdata.com/v3/launches?limit=100");
    setLoading(false);
    setData(res.data);
  };

  const renderResult = () => {
    return (
      loading ? <h2>Loading Data...</h2>
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
      </div>
    </>
  );
}

export default React.memo(Main);