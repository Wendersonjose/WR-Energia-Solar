import React from 'react';
import { MessageSquare } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511988775471"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      aria-label="Falar no WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
}