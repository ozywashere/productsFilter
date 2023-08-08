import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const fetchData = async () => {
    try {
      const response = await axios.get(url);

      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useAxiosFetch;
