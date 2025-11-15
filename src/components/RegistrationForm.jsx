
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";
import ThankYouPopup from "./pop-ups/ThankYouPopup";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    gender: "",
    age: "",
    email: "",
    phoneNumber: "",
  });
  const { name, email, phoneNumber, age, city, gender } = formData;

  const [loading, setLoading] = useState(false);
  const [isThankyouModalOpen, setIsThankyouModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !phoneNumber) {
      toast.error("Please provide Email or Phone Number");
      return;
    }
    if (phoneNumber && phoneNumber.length !== 10) {
      toast.error("Phone Number must be of 10 digits.");
      return;
    }
    if (email && !isValidEmail(email)) {
      toast.error("Invalid Email address");
      return;
    }
    if (!age || age < 1 || age > 120) {
      toast.error("Please enter a valid age.");
      return;
    }
    if (!city.trim()) {
      toast.error("City is required.");
      return;
    }
    if (!gender) {
      toast.error("Please select a gender.");
      return;
    }

    setLoading(true);
    try {
      const registrationResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/user/register-user`,
        {
          ...formData,
          frontEndClient: "True_Fit",
        }
      );
      console.log(registrationResponse);

      if (registrationResponse.status === 200) {
        toast.success("Registered Successfully!");
        setIsThankyouModalOpen(true);
      }
    } catch (err) {
      console.log("Error in registration API", err);
      toast.error(err?.response?.data?.message || "Registration Failed!");
    }
    setLoading(false);
  };

  return (
    <>
      <form className="pt-[4rem] md:shadow-xl -mt-[3rem] xl:mt-0 flex flex-col justify-center md:px-8 py-4 gap-6 rounded-2xl md:mt-14 w-full">
        <h1 className="text-[2rem] md:text-[3rem] leading-[4rem] font-semibold text-primary">
          Join Us
        </h1>

        {/* Name Input */}
        <div className="mb-2 relative">
          <label
            htmlFor="name"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-primary"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="text-left border border-primary placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div className="mb-2 relative">
          <label
            htmlFor="email"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-primary"
          >
            Email
          </label>
          <input
            type="email"
            required
            className="border border-primary text-black placeholder-[#9CA2A9] text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-2 relative">
          <label
            htmlFor="phoneNumber"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-primary"
          >
            Mobile
          </label>
          <input
            type="number"
            required
            className="border border-primary text-black placeholder-[#9CA2A9] text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>

        {/* Age Input */}
        <div className="mb-2 relative">
          <label
            htmlFor="age"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-primary"
          >
            Age
          </label>
          <input
            type="number"
            className="border border-primary text-black placeholder-[#9CA2A9] text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="age"
            required
            value={age}
            onChange={handleChange}
          />
        </div>

        {/* City Input */}
        <div className="mb-2 relative">
          <label
            htmlFor="city"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-primary"
          >
            City
          </label>
          <input
            type="text"
            required
            className="border border-primary text-black placeholder-[#9CA2A9] text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </div>

        {/* Gender Selection */}
        <div className="mb-2 relative">
          <label
            htmlFor="gender"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-primary"
          >
            Gender
          </label>
          <select
            className="border border-primary text-black text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="gender"
            required
            value={gender}
            onChange={handleChange}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-gradient-to-br from-primary to-[#053756] text-white font-medium mb-6 py-2.5 px-5 rounded-lg w-full"
        >
          {loading ? <Loader /> : "Submit Details"}
        </button>
      </form>

      <ThankYouPopup
        open={isThankyouModalOpen}
        setIsThankyouModalOpen={setIsThankyouModalOpen}
      />
    </>
  );
}
