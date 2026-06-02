'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    flatNumber: '',
    category: '',
    subject: '',
    details: '',
    priority: 'Medium',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.category || !formData.subject || !formData.details) {
      setError('Please fill in category, subject, and details.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setReferenceId(result.referenceId || '');
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div>
        <PageHeader title="Feedback" subtitle="Share your thoughts with the community" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-lg font-semibold text-white/90 mb-2">Thank You!</h2>
          <p className="text-sm text-white/60 mb-4">
            Your feedback has been recorded. The BMOWA committee will review it shortly.
          </p>
          {referenceId && (
            <p className="text-xs text-blue-400/80 mb-4">
              Reference ID: <span className="font-mono">{referenceId}</span>
            </p>
          )}
          <p className="text-[10px] text-white/30 mb-6">
            💡 Integration note: Full Google Sheets write-back is being finalized.
            Your submission is logged on the server.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', flatNumber: '', category: '', subject: '', details: '', priority: 'Medium' });
            }}
            className="px-6 py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
          >
            Submit Another
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Feedback Corner" subtitle="Share your thoughts, suggestions & complaints with BMOWA" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-6"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Flat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-white/60 block mb-2">Your Name (Optional)</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., Resident"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-white/60 block mb-2">Flat Number (Optional)</label>
              <input
                type="text"
                value={formData.flatNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, flatNumber: e.target.value }))}
                placeholder="e.g., A-101"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all appearance-none"
            >
              <option value="">Select a category</option>
              <option value="water">Water Supply</option>
              <option value="security">Security & CCTV</option>
              <option value="parking">Parking</option>
              <option value="maintenance">Maintenance</option>
              <option value="cleanliness">Cleanliness</option>
              <option value="amenities">Amenities</option>
              <option value="suggestion">Suggestion</option>
              <option value="committee">Committee / Governance</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Subject *</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              placeholder="Brief description of your feedback"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all"
            />
          </div>

          {/* Details */}
          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Details *</label>
            <textarea
              rows={5}
              value={formData.details}
              onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
              placeholder="Describe in detail..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-white/20 transition-all resize-none"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="text-xs font-medium text-white/60 block mb-2">Priority</label>
            <div className="flex gap-3">
              {['Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, priority: level }))}
                  className={`flex-1 py-2 text-xs font-medium border rounded-xl transition-all ${
                    formData.priority === level
                      ? level === 'High'
                        ? 'bg-red-500/20 border-red-400/40 text-red-300'
                        : level === 'Medium'
                        ? 'bg-amber-500/20 border-amber-400/40 text-amber-300'
                        : 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                      : 'text-white/50 bg-white/5 border-white/10 hover:bg-white/10 hover:text-white/80'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-xs text-red-400">{error}</p>
            </div>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-3 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20 ${
              isSubmitting
                ? 'bg-white/10 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-500 hover:to-purple-500'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </motion.button>

          {/* Note */}
          <p className="text-[10px] text-white/20 text-center">
            💡 Your feedback is submitted to the BMOWA server. Google Sheets write-back integration is being finalized.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
