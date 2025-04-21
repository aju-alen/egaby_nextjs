import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppIcon() {
  return (
    <Link
      href="https://wa.me/971568880263?text=Hi%20there!%20I%20have%20a%20question"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
} 