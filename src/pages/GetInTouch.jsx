import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetInTouch() {
  const [placeholders, setPlaceholders] = useState({
    name: "Enter your name",
    email: "Enter your email",
    mobile: "Enter your mobile number",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("All fields are required");
      return;
    }
    console.log("Submitted Data:", formData);
    alert("You have submitted successfully, we will contact you soon");
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={placeholders.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={placeholders.email}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          placeholder={placeholders.mobile}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default GetInTouch;
