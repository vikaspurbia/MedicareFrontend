import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PatientNavbar from '../../../layout/userLayout/PatientNavbar';
import doctorImage from "../../../assets/Images/doctor1.jpg"; // Update the image path if necessary

const DoctorAnesthesiology: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBookAppointment = () => {
    navigate('/make-appointment'); // Replace with the correct route for booking appointments
  };

  return (
    <div>
      <PatientNavbar />
      {/* Add a gradient background for better visuals */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-start pt-10">
        {/* Main container with two columns: Doctor Profile and Appointment Schedule */}
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl w-full p-4">
          {/* Doctor Profile Card on the right */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 md:ml-6 mb-6 md:mb-0">
            <div className="flex flex-col items-center">
              <img
                src={doctorImage}
                alt="Dr. A. B. Smith"
                className="w-48 h-48 object-cover mb-6 rounded-full border-4 border-gray-300"
              />
              <h2 className="text-2xl font-semibold text-center mb-4 text-blue-900">Dr. John Smith</h2>
              <h1 className="text-2xl font-semibold text-center mb-4 text-blue-900">Consultant Anesthesiology</h1>
            </div>

            {/* Booking Button */}
            <div className="mt-6 flex justify-center">
              <button 
                onClick={handleBookAppointment} // Add onClick handler
                className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-full"
              >
                Book an Appointment
              </button>
            </div>
          </div>

          {/* Appointment Schedule block on the left */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 md:ml-4">
            <h3 className="text-lg mb-2 text-gray-700"><strong>Qualifications :</strong> MBBS, MD (Anesthesiology)</h3>
            <h3 className="text-lg mb-4 text-gray-700"><strong>Experience : </strong>Senior Anesthetist, General Hospital</h3>  
            <h3 className="text-lg mb-8 text-center text-gray-700"><strong> Director & Chief Consultant Anesthesiology</strong></h3>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Appointment Schedules</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-right text-gray-700">Day</th>
                  <th className='px-4 py-2 text-right text-gray-700 pr-20'>Time</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-gray-600 text-right ml-4 capitalize">{day}</td>
                    <td className="px-4 py-2 text-right text-gray-600">10:00am - 5:00pm</td>
                    <td className="px-4 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Adding some padding at the bottom to avoid cutting content on mobile */}
        <div className="py-8"></div>
      </div>
    </div>
  );
};

export default DoctorAnesthesiology;
