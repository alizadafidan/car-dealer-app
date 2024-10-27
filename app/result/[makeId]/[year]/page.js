"use client";
import VehicleList from "../../../../components/VehicleList";
import { useFetchModels } from "../../../../hooks/useFetchModels";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import React from "react";
export default function ResultPage({ params }) {
  const { makeId, year } = React.use(params);
  const { data: models, isLoading, error } = useFetchModels(makeId, year);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error fetching models</p>;

  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Models for {makeId} ({year})
        </h1>
        <VehicleList models={models} />
      </div>
    </React.Suspense>
  );
}
