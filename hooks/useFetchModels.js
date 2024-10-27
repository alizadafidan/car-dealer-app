"use client";
import { useEffect, useState } from "react";

export function useFetchModels(makeId, year) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.Results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [makeId, year]);

  return { data, isLoading, error };
}
