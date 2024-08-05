"use client";

import PreviewModal from "@/components/ui/preview-modal";
import { useEffect, useState } from "react";

const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProviders;
