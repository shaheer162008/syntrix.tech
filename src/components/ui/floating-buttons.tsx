"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function FloatingButtons() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "923072853163"; // Pakistan format without +
  const whatsappMessage = "Hi Nexiler! I'd like to discuss a project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* AI Chatbot Button - Coming Soon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => {
            // TODO: Implement AI Chatbot
            alert("AI Chatbot coming soon! Please use WhatsApp or Contact form for now.");
          }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/10"
          aria-label="AI Chatbot - Coming Soon"
        >
          <Image 
            src="/icons/aichatbot.svg" 
            alt="AI Chatbot" 
            width={28} 
            height={28}
          />
        </button>
        
        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-white/10 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl"
            >
              <p className="text-sm font-medium text-white">AI Chatbot</p>
              <p className="text-xs text-muted-foreground">Coming Soon</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#22c55e] flex items-center justify-center shadow-lg hover:shadow-xl transition-all border-2 border-white/20"
          aria-label="Contact us on WhatsApp"
        >
          <Image 
            src="/icons/whatsapp.svg" 
            alt="WhatsApp" 
            width={32} 
            height={32}
          />
        </a>
      </motion.div>
    </div>
  );
}
