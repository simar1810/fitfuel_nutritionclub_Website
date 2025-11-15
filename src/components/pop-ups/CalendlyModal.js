import Modal from "@mui/material/Modal";
import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import ThankYouPopup from "./ThankYouPopup";

const CalendlyModal = ({ isCalendlyOpen, setIsCalendlyOpen }) => {
  const [isThankyouModalOpen, setIsThankyouModalOpen] = useState(false);

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      console.log("calendly scheduled event info => ", e.data.payload);
      setIsCalendlyOpen(false);
      setIsThankyouModalOpen(true);
    },
  });

  return (
    <>
      <Modal
        open={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full flex justify-center items-center">
          <InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL} />
        </div>
      </Modal>
      <ThankYouPopup
        open={isThankyouModalOpen}
        setIsThankyouModalOpen={setIsThankyouModalOpen}
      />
    </>
  );
};

export default CalendlyModal;
