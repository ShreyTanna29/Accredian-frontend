import { motion } from "framer-motion";
import { useState } from "react";
import ReferralModal from "./ReferralModal";

function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      title: "Refer Friends",
      description: "Share your unique referral link with friends",
      icon: "🤝",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "They Enroll",
      description: "When they join any course using your link",
      icon: "📚",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Earn Rewards",
      description: "Get exciting rewards for successful referrals",
      icon: "🎁",
      color: "from-pink-500 to-orange-500",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Students" },
    { number: "₹50,000", label: "Rewards Given" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div {...fadeInUp} className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Refer & Earn Rewards
          </h1>
          <p className="text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Share the knowledge, earn amazing rewards, and help others succeed
            in their learning journey!
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`bg-gradient-to-r ${item.color} bg-opacity-20 backdrop-blur-lg rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-2xl`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-5xl mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-purple-200 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </h2>
              <p className="text-purple-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-lg rounded-2xl mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 px-4">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your free account",
                icon: "👤",
              },
              {
                step: "2",
                title: "Choose Course",
                desc: "Select from our premium courses",
                icon: "📚",
              },
              {
                step: "3",
                title: "Share Link",
                desc: "Send to your friends",
                icon: "🔗",
              },
              {
                step: "4",
                title: "Earn Rewards",
                desc: "Get amazing bonuses",
                icon: "💎",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="text-center relative"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-purple-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Popular Courses Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Popular Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Development",
                price: "₹29,999",
                duration: "6 months",
                features: ["MERN Stack", "Real Projects", "Job Assistance"],
                color: "from-blue-600 to-indigo-600",
              },
              {
                title: "Data Science Pro",
                price: "₹34,999",
                duration: "8 months",
                features: ["Python", "Machine Learning", "Live Projects"],
                color: "from-purple-600 to-pink-600",
              },
              {
                title: "UI/UX Design",
                price: "₹24,999",
                duration: "4 months",
                features: ["Figma", "Portfolio", "Internship"],
                color: "from-orange-600 to-red-600",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${course.color} rounded-2xl p-6 text-white`}
              >
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <div className="text-3xl font-bold mb-2">{course.price}</div>
                <div className="text-sm mb-4">{course.duration}</div>
                <ul className="space-y-2">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Community Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl mb-16"
        >
          <div className="px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Join Our Community
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-white">
                  Connect. Learn. Grow.
                </h3>
                <p className="text-purple-200 text-lg">
                  Join thousands of learners in our vibrant community. Share
                  experiences, get help, and grow together.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "24/7 Support",
                    "Expert Mentors",
                    "Live Sessions",
                    "Networking",
                    "Job Updates",
                    "Events",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-purple-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { number: "15K+", label: "Community Members" },
                  { number: "200+", label: "Daily Active Users" },
                  { number: "50+", label: "Live Events Monthly" },
                  { number: "100%", label: "Satisfaction Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-purple-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center py-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Referring Now
          </button>
          <p className="text-purple-300 mt-4 text-lg">
            Join thousands of successful referrers today!
          </p>
        </motion.div>
      </div>

      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Landing;
