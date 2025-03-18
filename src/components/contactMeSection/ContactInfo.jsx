import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="giorgioagnello.a@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+39 3279124008" Image={FiPhone} />
      <SingleInfo text="Torino, Italia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
