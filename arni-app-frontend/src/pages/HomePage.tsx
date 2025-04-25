import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from 'framer-motion';
import logo from '../assets/nrw_transparent.png';

const services = [
  {
    title: "Stroke & Brain Injury Rehabilitation",
    description: "One-on-one sessions to rebuild strength, balance, and independence.",
    points: [
      "Improve overall health and fitness",
      "Regain arm and leg function",
      "Increase mobility for everyday activities",
    ],
    location: "Available at Private Gym, Vale of Neath Leisure Centre, and Glynneath Training Centre (SA115DB).",
  },
  {
    title: "Personalised Home Recovery Programs",
    description: "Tailored plans empowering recovery from the comfort of your home.",
    quote: "Consistent exercise and activity at home is essential for maximal progress.",
  },
  {
    title: "GP-Referred Exercise Programs",
    description: "Exercise strategies designed with your GP to manage specific health needs.",
  },
];

const instructors = [
  { name: "David", description: "Founder of NRW and senior ARNI instructor with 10 years’ experience in stroke and neurological rehabilitation. Retired fireman and personal trainer.", photo: "/images/david.jpeg" },
  { name: "Brandon", description: "Director and ARNI instructor with 8 years’ experience, and a Level 4 GP referral qualified specialist.", photo: "/images/brandon.jpeg" },
  { name: "Alec", description: "Director and ARNI instructor with 8 years’ experience, and over 10 years as a personal trainer and MMA coach.", photo: "/images/alec.jpeg" },
  { name: "Shanice", description: "Volunteer instructor supporting neurological and mobility rehabilitation.", photo: "/images/shanice.jpeg" },
  { name: "Julie", description: "Director and secretary with a professional background in accountancy and banking.", photo: "/images/headshot_default.png" },
  { name: "John", description: "Director and promoter of NRW, and author of “Tiny Steps”.", photo: "/images/headshot_default.png" },
  { name: "Mollie", description: "Qualified ARNI instructor with over 5 years’ experience and founder of MG Rehab, collaborating with NRW to support clients.", photo: "/images/headshot_default.png" },
  { name: "Gavin", description: "Chronic pain management and orthopedic physiotherapy expert.", photo: "/images/gavin.jpeg" },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-br from-blue-50 to-blue-100 antialiased">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:px-8 shadow-sm bg-white">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Neuro Rehab Wales Logo" className="h-25 object-contain" />
        </Link>
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <a href="https://www.instagram.com/neuro_rehab_wales" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064278596616" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <FaFacebookF />
            <span>Facebook</span>
          </a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center justify-start flex-grow container mx-auto px-4 text-center py-12">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2 leading-tight">
          Unlock Your Recovery Potential
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Expert rehabilitation programs tailored to your journey.  
          Supporting survivors to rebuild strength, confidence, and independence.
        </p>
        <Link to="/classes" className="mb-12 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 hover:scale-105 transition">
          Begin Your Journey
        </Link>

        {/* About Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600">
            We specialise in personalised recovery pathways for stroke survivors and individuals with neurological conditions.
            <br />
            Our compassionate, one-on-one approach empowers you to reclaim mobility, strength, and confidence.
          </p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us: Trusted Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              "15+ Years of Specialist Experience",
              "Certified ARNI Stroke Rehabilitation Experts",
              "Qualified Level 4 Exercise Referral Specialists",
              "Dedicated to South Wales Community Health",
            ].map((title, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="font-bold text-blue-700 mb-2">{title}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Proven success supporting neurological recovery."}
                  {index === 1 && "Trained to deliver the gold standard in post-stroke care."}
                  {index === 2 && "Safe, effective support for complex health conditions."}
                  {index === 3 && "Locally based, passionately serving South Wales."}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Comprehensive Rehabilitation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{service.title}</h3>
                <p className="text-gray-700 text-lg mb-4">{service.description}</p>
                {service.points && (
                  <ul className="text-gray-700 space-y-2 text-left text-lg mb-6">
                    {service.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                )}
                {service.quote && (
                  <blockquote className="italic text-blue-600 text-lg bg-blue-100 p-4 rounded-xl">{service.quote}</blockquote>
                )}
                {service.location && (
                  <p className="text-gray-600 text-sm mt-auto">{service.location}</p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Instructors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet the Experts Behind Your Recovery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition">
                <img
                  src={instructor.photo}
                  alt={instructor.name}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-blue-800">{instructor.name}</h3>
                <p className="text-gray-600 text-center mt-2">{instructor.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full max-w-4xl mx-auto text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ready to Take the First Step?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Contact our friendly team today and discover how we can support your recovery journey.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/neuro_rehab_wales" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100064278596616" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl">
              <FaFacebookF />
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-50 text-center text-blue-500 text-lg py-8">
        &copy; {new Date().getFullYear()} Neuro Rehab Wales. Empowering Recovery, One Step at a Time.
      </footer>
    </div>
  );
};

export default HomePage;