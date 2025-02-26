import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ClaimBonus() {
  const [searchParams] = useSearchParams();
  const [claimed, setClaimed] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleClaim = () => {
    setClaimed(true);
    triggerConfetti();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <span className="text-4xl">🎁</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center text-gray-800 mb-4"
        >
          Claim Your Bonus!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 mb-8"
        >
          You&apos;ve been referred by {searchParams.get("referrer")} for the{" "}
          {searchParams.get("course")} course
        </motion.p>

        {!claimed ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClaim}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all"
          >
            Claim 20% Discount
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-2xl mb-4">🎉</div>
            <p className="text-green-600 font-semibold">
              Bonus Claimed Successfully!
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Check your email for the discount code
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500">Valid for next 48 hours</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
