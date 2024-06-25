import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const Modal = ({ isOpen, onClose, title, description, tags, imageUrl }: ModalProps) => {
  // const modalRef = useRef(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // const handleClickOutside = (event) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target)) {
  //     onClose();
  //   }
  // };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <motion.div
        className="bg-white dark:bg-black rounded-lg shadow-lg p-6 max-w-4xl w-full max-h-[75vh] overflow-y-auto relative flex flex-col sm:flex-row"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        ref={modalRef}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">✖</button>
        <div className="w-full sm:w-1/2 pr-0 sm:pr-4">
          <Image
            src={imageUrl}
            alt={title}
            layout="responsive"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 pl-0 sm:pl-4 mt-4 sm:mt-0">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="mb-4">{description}</p>
          <ul className="flex flex-wrap mb-4 gap-2">
            {tags.map((tag, index) => (
              <li key={index} className="bg-black dark:bg-white  px-3 py-1 text-white dark:text-black rounded-full text-sm">{tag}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
