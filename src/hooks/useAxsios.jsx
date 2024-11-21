import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (endpoint, method = "GET", body = null, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'https://youtube-api-orpin.vercel.app';  

  useEffect(() => { 
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios({
          url: `${apiUrl}${endpoint}`,
          method,
          data: body,
          ...options,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

console.log(data);

  return { data, loading, error };
};

export default useAxios;
