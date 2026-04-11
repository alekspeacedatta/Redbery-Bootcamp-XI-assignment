import { Button } from "../button/Button";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, type ReactNode } from "react";

interface ModalCardType {
  children: ReactNode;
  onClose: () => void;
}

export const ModalCard = ({ children, onClose }: ModalCardType) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="h-screen w-full flex justify-center
        items-center z-11 fixed bg-[#00000040]"
      onClick={onClose}
    >
      <div
        className="p-4 bg-[#FFFFFF] rounded-xl w-115 relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button
          onClick={onClose}
          variant="link"
          className="absolute decoration-0 right-3.75"
        >
          <FontAwesomeIcon icon={faX} />
        </Button>
        {children}
      </div>
    </div>
  );
};
