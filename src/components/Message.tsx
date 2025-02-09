import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Happy Birthday to an incredible friend! You bring so much joy and positivity into my life. 
        I am so grateful for the laughter, love, and unforgettable moments we've shared. I hope teri life 
        me khushiyan hi khushiyan hi khushiyan ho jese tu mere life me bharti hai. I hope Hume aage bhi 
        ese hi acche dost bane rahe. Thank you iss boring se insaan ka humesha saath aur dhyan rakhne ke liye
        rakhne ke liye. Enjoy every moment of your special day, you deserve the bestest of the best!
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          And on your special day, I wish you the happiest birthday. 
          Aur meri taraf se ye eak bohot chota sa gift tha.
        </p>
      </motion.div>
    </div>
  );
};

export default Message;