"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FilterForm from "../components/FilterForm";
import Image from "next/image";
import car from "@/shared/assets/images/car.png";
import React from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
export default function Home() {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (selectedMake && selectedYear) {
      router.push(`/result/${selectedMake}/${selectedYear}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Image src={car} alt="Half Car" width={100} height={200} />
      </div>

      <h1 className="text-4xl text-center font-bold mb-4">Car Dealer App</h1>
      <React.Suspense fallback={<LoadingSpinner />}>
        <FilterForm
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </React.Suspense>
      <center>
        <button
          onClick={handleNext}
          disabled={!selectedMake || !selectedYear}
          className={
            !selectedMake || !selectedYear
              ? "cursor-not-allowed bg-transparent btn-primary mt-4 hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-transparent rounded"
              : "bg-transparent hover:bg-black-500 btn-primary mt-4 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-transparent rounded"
          }
        >
          Next
        </button>
      </center>
    </div>
  );
}
