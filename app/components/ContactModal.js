"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {  faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const ContactModal = ({ isOpen, onClose, phoneNumber }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 lg:p-14 rounded-lg shadow-lg">
        <h2 className="text-xl lg:text-3xl font-bold mb-8">Contactez-moi</h2>
        <p className="mb-8 lg:text-2xl">Que souhaitez-vous faire ?</p>
        <div className="flex flex-col gap-8 ">
          <a href={`tel:${phoneNumber}`} className="flex lg:text-2xl items-center gap-4 text-blue-500 hover:underline">
            <FontAwesomeIcon icon={faPhone} className="text-2xl"/> Appeler
          </a>
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-green-500 lg:text-2xl hover:underline">
            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" /> Discuter sur WhatsApp
          </a>
        </div>
        <button onClick={onClose} className="mt-8 bg-red-500 text-white px-8 py-2 rounded">Fermer</button>
      </div>
    </div>
  );
};

export default ContactModal;
