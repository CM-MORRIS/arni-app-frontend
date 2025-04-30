import { useEffect } from "react";

const BookingPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
        Book a Physiotherapy Session
      </h1>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/corie-morris/nrw-book"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default BookingPage;