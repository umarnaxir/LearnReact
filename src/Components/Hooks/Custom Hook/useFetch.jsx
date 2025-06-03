import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setError("No URL provided");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error(errorMsg);
          throw new Error(errorMsg);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        console.error("Fetching failed:", error);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
