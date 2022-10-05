import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Modal } from "@mantine/core";
import type { ModalProps } from "@mantine/core";

export const ModalForm = ({
  Form,
  size = "lg",
  source = "",
  title,
  keepOpen,
}: {
  Form: React.FC;
  title?: string;
  source?: string;
  size?: ModalProps["size"];
  keepOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
    if (source) {
      return navigate(source);
    }
    return navigate(-1);
  };

  return (
    <Modal
      size={size}
      opened={keepOpen ?? isOpen}
      onClose={handleClose}
      title={title}
      overlayOpacity={0.55}
      overlayBlur={1}
      centered
    >
      <Form />
    </Modal>
  );
};
