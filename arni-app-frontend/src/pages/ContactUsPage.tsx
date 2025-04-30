import { FaInstagram, FaFacebookF, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <main className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-15">Please Get In Touch!</h1>
        <div className="space-y-4 text-lg text-gray-600 mb-15">
          <p>If you have any questions or comments, please contact us via email or phone. Leave a voicemail or text message and we will get back to you as soon as possible.</p>
          <p>Emails are sent to and replied from our Team Secretary, Julie.</p>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2 justify-items-center">
        <div className="bg-white rounded-xl shadow p-6 flex items-start space-x-4 max-w-md w-full">
          <FaEnvelope className="text-blue-600 text-3xl flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
            <a href="mailto:NRWGlynneath@outlook.com" className="text-blue-600 hover:underline">
              NRWGlynneath@outlook.com
            </a>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-start space-x-4 max-w-md w-full">
          <FaPhone className="text-green-600 text-3xl flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Call or Text</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="tel:07896049222" className="hover:text-blue-600">07896 049222 &mdash; Brandon</a>
              </li>
              <li>
                <a href="tel:07453721558" className="hover:text-blue-600">07453 721558 &mdash; Alec</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="inline-flex items-center space-x-6 text-3xl text-blue-600">
          <a href="https://www.instagram.com/neuro_rehab_wales" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064278596616" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="mailto:NRWGlynneath@outlook.com" className="hover:text-blue-800">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
