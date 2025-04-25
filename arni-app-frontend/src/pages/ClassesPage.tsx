import { classes } from "../data/classes";
import { Link } from "react-router-dom";

const ClassesPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Our Sessions</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {classes.map((c) => (
          <div key={c.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{c.instructor}</h2>
            <p className="text-gray-600 mb-4">{c.description}</p>
            <p className="text-gray-800 font-semibold mb-2">{c.time}</p>
            <p className="text-gray-700 text-sm mb-4">Duration: {c.duration}</p>
            <Link
              to={`/book/${c.id}`}
              className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full text-center no-underline"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;