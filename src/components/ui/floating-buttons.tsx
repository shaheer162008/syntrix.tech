"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AIChat from "@/components/AIChat";

export function FloatingButtons() {
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const callPhone = "+14057098512";
  const callUrl = `tel:${callPhone}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* AI Chatbot Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 rounded-full bg-[#1B1B1B] hover:bg-[#1B1B1B] flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-gray-600"
            aria-label="AI Chatbot"
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
                className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1B1B1B] border border-gray-600 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl"
              >
                <p className="text-sm font-medium text-white">AI Chatbot</p>
                <p className="text-xs text-gray-400">Ask me anything</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={callUrl}
            className="w-14 h-14 rounded-full bg-[#1B1B1B] hover:bg-[#1B1B1B] flex items-center justify-center shadow-lg hover:shadow-xl transition-all border-2 border-gray-600"
            aria-label="Call Nexiler"
          >
            <Image 
              src="/icons/phone.svg" 
              alt="Call" 
              width={28} 
              height={28}
            />
          </a>
        </motion.div>
      </div>

      {/* AI Chat Modal */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
