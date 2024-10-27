"use client";

import { useEffect } from "react";
import { useFetchMakes } from "../hooks/useFetchMakes";
import LoadingSpinner from "./LoadingSpinner";

export default function FilterForm({
  selectedMake,
  setSelectedMake,
  selectedYear,
  setSelectedYear,
}) {
  const { data: makes, isLoading, error } = useFetchMakes();

  useEffect(() => {
    if (!selectedMake) {
      setSelectedMake("");
    }
  }, [selectedMake]);

  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => 2015 + i
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error fetching vehicle makes</p>;

  return (
    <div className="flex flex-col items-center">
      <select
        className="form-select mb-4 border border-black bg-white text-black py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-black"
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
      >
        <option value="">Select Vehicle Make</option>
        {makes.map((make) => (
          <option key={make.MakeId} value={make.MakeId}>
            {make.MakeName}
          </option>
        ))}
      </select>
      <select
        className="form-select mb-4 border border-black bg-white text-black py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-black"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Select Model Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
