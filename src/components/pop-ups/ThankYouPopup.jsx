"use client";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

export default function ThankYouPopup({ open, setIsThankyouModalOpen }) {
  return (
    <Modal open={open} onClose={() => setIsThankyouModalOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          backgroundColor: "#C5D6F4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: "90%",
          overflow: "auto",
        }}
      >
        <section className="flex flex-col bg-[#C5D6F4] justify-center items-center ">
          <Image
            src="/thankyou.svg"
            alt="image"
            width={592}
            height={592}
          ></Image>
          <p className="opacity-60 text-[0.9rem] md:text-[1.5rem]">
            Our Team will get back to you shortly!
          </p>
        </section>
      </Box>
    </Modal>
  );
}
