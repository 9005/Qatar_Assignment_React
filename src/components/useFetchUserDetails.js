import axios from "axios";
import { useState, useEffect } from "react";

/*
 re-usable custom hook to fetch user details and return user details!
*/

export const useFetchUserDetails = (url) => {
  const [data, setData] = useState(null);

  const getUserDetails = async (url) => {
    const response = await axios.get(url);
    return response;
  }

  useEffect(() => {
    getUserDetails(url).then(response => setData(response.data)).catch(() => { })
  }, [url]);

  return [data];
};