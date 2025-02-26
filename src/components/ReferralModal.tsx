import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState, useRef, KeyboardEvent } from "react";
import { toast } from "react-hot-toast";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ReferralModal({ isOpen, onClose }: ReferralModalProps) {
  const refreeNameRef = useRef<HTMLInputElement>(null);
  const refreeEmailRef = useRef<HTMLInputElement>(null);
  const referedNameRef = useRef<HTMLInputElement>(null);
  const referedEmailRef = useRef<HTMLInputElement>(null);
  const courseRef = useRef<HTMLSelectElement>(null);
  const API_URL = process.env.BACKEND_URL;
  const [formDetails, setFormDetails] = useState({
    referedName: "",
    referedEmail: "",
    refreeName: "",
    refreeEmail: "",
    course: "Web Development",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement | HTMLSelectElement | null>,
    nextRef: React.RefObject<HTMLInputElement | HTMLSelectElement | null>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef?.current?.focus();
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formDetails.referedName.trim()) {
      newErrors.referedName = "Friend's name is required";
    }

    if (!formDetails.referedEmail.trim()) {
      newErrors.referedEmail = "Friend's email is required";
    } else if (!/\S+@\S+\.\S+/.test(formDetails.referedEmail)) {
      newErrors.referedEmail = "Please enter a valid email";
    }

    if (!formDetails.refreeName.trim()) {
      newErrors.refreeName = "Your name is required";
    }

    if (!formDetails.refreeEmail.trim()) {
      newErrors.refreeEmail = "Your email is required";
    } else if (!/\S+@\S+\.\S+/.test(formDetails.refreeEmail)) {
      newErrors.refreeEmail = "Please enter a valid email";
    }

    if (formDetails.referedEmail === formDetails.refreeEmail) {
      newErrors.referedEmail =
        "Referral email cannot be the same as your email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/details`,
        formDetails
      );

      if (response.data.status === 201) {
        toast.success("Referral sent successfully!");
        onClose();
      }
    } catch (error) {
      toast.error("Failed to send referral. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Refer a Friend
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  ref={refreeNameRef}
                  type="text"
                  value={formDetails.refreeName}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      refreeName: e.target.value,
                    })
                  }
                  onKeyDown={(e) => handleKeyDown(e, refreeEmailRef)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.refreeName ? "border-red-500" : ""
                  }`}
                />
                {errors.refreeName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.refreeName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  ref={refreeEmailRef}
                  type="email"
                  value={formDetails.refreeEmail}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      refreeEmail: e.target.value,
                    })
                  }
                  onKeyDown={(e) => handleKeyDown(e, referedNameRef)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.refreeEmail ? "border-red-500" : ""
                  }`}
                />
                {errors.refreeEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.refreeEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Friend&apos;s Name
                </label>
                <input
                  ref={referedNameRef}
                  type="text"
                  value={formDetails.referedName}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      referedName: e.target.value,
                    })
                  }
                  onKeyDown={(e) => handleKeyDown(e, referedEmailRef)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.referedName ? "border-red-500" : ""
                  }`}
                />
                {errors.referedName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.referedName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Friend&apos;s Email
                </label>
                <input
                  ref={referedEmailRef}
                  type="email"
                  value={formDetails.referedEmail}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      referedEmail: e.target.value,
                    })
                  }
                  onKeyDown={(e) => handleKeyDown(e, courseRef)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.referedEmail ? "border-red-500" : ""
                  }`}
                />
                {errors.referedEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.referedEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Course
                </label>
                <select
                  ref={courseRef}
                  value={formDetails.course}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, course: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Data Science</option>
                  <option>UI/UX Design</option>
                  <option>Machine Learning</option>
                  <option>Cloud Computing</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Invitation"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ReferralModal;
