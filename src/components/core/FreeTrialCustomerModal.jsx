"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegCircleCheck, FaXmark } from "react-icons/fa6";
import Modal from "./Modal";
import { sendData, sendWellnessZBackendData } from "@/api/server";

export default function FreeTrialCustomerModal({ referralCode, sponsoredBy }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function createCustomer(e) {
    try {
      e.preventDefault();
      const data = {
        name: e.currentTarget.name.value,
        phoneNumber: e.currentTarget.phoneNumber.value,
        email: e.currentTarget.email.value,
        goal: e.currentTarget.goal.value,
        frontEndClient: "True_Fit"
      }

      if (!data.name || !data.phoneNumber || !data.email) throw new Error("Please Enter Name, Email, Phone Number");

      if (data.phoneNumber.length !== 10) throw new Error("Phone Number should be 10 digits in length!");

      const [response, response2] = await Promise.all([
        sendData(
          "user/register-user",
          "POST",
          JSON.parse(JSON.stringify({ ...data }))
        ),
        sendWellnessZBackendData(
          "app/request-client",
          "POST",
          JSON.parse(JSON.stringify({
            name: data.name,
            mobileNumber: data.phoneNumber,
            email: data.email,
            dob: "01-01-2000",
            coachID: "tfa100"
          }))
        )
      ]);

      if (response.success) {
        setFormSubmitted(true)
        toast.success(response?.data?.message || "Successfully created User!");
      } else {
        toast.error(response?.data?.message || "Please try again Later!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  }

  if (formSubmitted) return <THankYouMessage
    onClose={() => setFormSubmitted(false)}
  />

  return <form id="register" onSubmit={createCustomer} className="w-full mx-auto py-8 md:py-20 rounded-md relative px-[20px]">
    <div className="max-w-[1200px] w-full bg-[#FAF8F8] mx-auto px-8 py-4 rounded-[24px] border-[1px] border-[var(--accent-1)]">
      <h2 className="text-[20px] md:text-[24px] font-bold">Let&apos;s Know You Better</h2>
      <div className=" grid md:grid-cols-2 gap-x-4">
        <FormControl title="Name" placeholder="Enter Your Name" name="name" />
        <FormControl title="Phone" placeholder="Enter Your Phone" name="phoneNumber" />
        <FormControl title="Email" placeholder="Enter Your Email" name="email" />
        <FormControl title="What is your goal" placeholder="What is your Goal" name="goal" />
      </div>
      <button className="bg-[var(--accent-1)] block text-white font-bold px-4 py-2 mx-auto mt-8 rounded-[8px]">Submit</button>
    </div>
  </form>
}

function FormControl({ title, className, ...props }) {
  return <label className={`text-[14px] block my-4 ${className}`}>
    <span className="cursor-pointer font-bold">{title}</span>
    <input type={props.text || "text"}
      className="input w-full mt-2 px-4 py-[10px] rounded-[8px] focus:outline-none shado w-2xl shadow-red"
      {...props}
    />
  </label>
}

function THankYouMessage({
  onClose,
}) {
  return <Modal onClose={onClose} open={true} className="flex items-center justify-center">
    <div className="max-w-[500px] w-full bg-white p-4 rounded-md relative">
      <FaXmark onClick={onClose} className="absolute top-4 right-4 cursor-pointer" />
      <h2 className="text-center text-[28px] font-bold">Thanks You For Registering</h2>
      <FaRegCircleCheck className="text-green-600 w-[64px] h-[64px] mt-8 mx-auto" />
      <div className="mt-8 flex items-center justify-center">
      </div>
    </div>
  </Modal>
}