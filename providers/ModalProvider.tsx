"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";

import Modal from "@/components/Modal";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
      {/* <SubscribeModal products={products} />
      <UploadModal /> */}
      {/* <Modal
        title="Test Modal"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        {" "}
        Test Children{" "}
      </Modal> */}
    </>
  );
};

export default ModalProvider;
