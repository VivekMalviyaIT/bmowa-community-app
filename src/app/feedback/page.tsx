'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

export default function FeedbackPage() {
  return (
    <div>
      <PageHeader title="Feedback" subtitle="Share your thoughts with the community" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-6"
      >
        <form className="space-y-5">
          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Category</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all appearance-none">
              <option value="">Select a category</option>
              <option value="maintenance">Maintenance</option>
              <option value="security">Security</option>
              <option value="amenities">Amenities</option>
              <option value="cleanliness">Cleanliness</option>
              <option value="suggestion">Suggestion</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Subject</label>
            <input
              type="text"
              placeholder="Brief description of your feedback"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Details</label>
            <textarea
              rows={5}
              placeholder="Describe in detail..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all resize-none"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Priority</label>
            <div className="flex gap-3">
              {['Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  type="button"
                  className="flex-1 py-2 text-xs font-medium text-white/50 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white/80 transition-all"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/20"
          >
            Submit Feedback
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
