import React from "react";
import { useParams } from "react-router-dom";
import { classes } from "../data/classes";

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();

  const selectedClass = classes.find((c) => c.id === Number(id));

  if (!selectedClass) {
    return <div className="text-center text-xl mt-10">Session not found.</div>;
  }

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
        Book a Session with {selectedClass.instructor}
      </h1>

      {/* Step 1: Select Date */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Select a Date:</h2>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg p-2 mb-6"
        />

        {/* Step 2: Show Available Times (for now, hardcoded) */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Available Times:</h2>
        <div className="grid gap-4">
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            10:00 AM
          </button>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            2:00 PM
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;