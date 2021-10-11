export const API_URL_PUBLIC = "https://api.covid19api.com/summary";

export const requestCoronavirusData = async (setError, setLoading, setCovidData) => {
  setLoading(true);
  setError(false);
  try {
    const response = await fetch(API_URL_PUBLIC);
    if (!response) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const result = await response.json();
    setCovidData(result)
    console.log(result)
  } catch (err) {
    setError(true);
    console.log(err);
  } finally {
    setLoading(false)
  }
};