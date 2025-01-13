'use client'


import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Modal from "@/components/ui/modal";

const SetupPage = () => {
return(
  <div className="p-4">
    <Modal tittle="Test Title" description="Test description" isOpen 
    onClose={ () => {}} >
      Children
    </Modal>
  </div>
);
};

export default SetupPage;