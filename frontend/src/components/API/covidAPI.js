import { CircularProgress } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { requestCoronavirusData } from "../../actions/apiActions";


const Api = () => {
  const [covidData, setCovidData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestCoronavirusData(setError, setLoading, setCovidData);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestCoronavirusData}>Retry</button>
      </>
    );
  }


  return (
    <div>
      <h4>Global coronavirus data:</h4>
      {
        covidData &&
        <ul>
          <li key={covidData.id}>{covidData.Date || 'No data'}</li>
          <li key={covidData.id}>New Confirmed: {covidData.Global.NewConfirmed || 'No data'}</li>
          <li key={covidData.id}>New Deaths: {covidData.Global.NewDeaths || 'No data'}</li>
          <li key={covidData.id}>Total Confirmed: {covidData.Global.TotalConfirmed || 'No data'}</li>
          <li key={covidData.id}>Total Deaths: {covidData.Global.TotalDeaths || 'No data'}</li>
        </ul>
      }
    </div>
  );
};


export default Api;