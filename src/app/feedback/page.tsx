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
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="editorial-card rounded-3xl p-10 text-center"
        >
          <div className="text-5xl mb-5">✓</div>
          <h2 className="font-serif text-2xl text-foreground mb-3">Thank You</h2>
          <p className="text-sm text-text-muted mb-5 max-w-md mx-auto">
            Your feedback has been recorded. The BMOWA committee will review it shortly.
          </p>
          {referenceId && (
            <p className="text-xs text-accent-slate mb-5">
              Reference: <span className="font-mono">{referenceId}</span>
            </p>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', flatNumber: '', category: '', subject: '', details: '', priority: 'Medium' });
            }}
            className="px-8 py-3 text-sm font-medium text-foreground bg-foreground/[0.04] border border-card-border rounded-full hover:bg-foreground/[0.08] transition-all"
          >
            Submit Another
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Feedback Corner" subtitle="Share your thoughts, suggestions & concerns with BMOWA" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="editorial-card rounded-3xl p-8 lg:p-10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Flat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-medium text-text-muted block mb-2 uppercase tracking-wider">Your Name (Optional)</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., Resident"
                className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-muted block mb-2 uppercase tracking-wider">Flat Number (Optional)</label>
              <input
                type="text"
                value={formData.flatNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, flatNumber: e.target.value }))}
                placeholder="e.g., A-101"
                className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-medium text-text-muted block mb-2 uppercase tracking-wider">Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all appearance-none"
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
            <label className="text-xs font-medium text-text-muted block mb-2 uppercase tracking-wider">Subject *</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              placeholder="Brief description of your feedback"
              className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
            />
          </div>

          {/* Details */}
          <div>
            <label className="text-xs font-medium text-text-muted block mb-2 uppercase tracking-wider">Details *</label>
            <textarea
              rows={5}
              value={formData.details}
              onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
              placeholder="Describe in detail..."
              className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all resize-none"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="text-xs font-medium text-text-muted block mb-2 uppercase tracking-wider">Priority</label>
            <div className="flex gap-3">
              {['Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, priority: level }))}
                  className={`flex-1 py-2.5 text-xs font-medium border rounded-full transition-all ${
                    formData.priority === level
                      ? level === 'High'
                        ? 'bg-accent-red/8 border-accent-red/20 text-accent-red'
                        : level === 'Medium'
                        ? 'bg-accent-amber/8 border-accent-amber/20 text-accent-amber'
                        : 'bg-accent-emerald/8 border-accent-emerald/20 text-accent-emerald'
                      : 'text-text-muted bg-background border-card-border hover:bg-foreground/[0.02] hover:text-foreground'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="px-4 py-3 bg-accent-red/5 border border-accent-red/15 rounded-xl">
              <p className="text-xs text-accent-red">{error}</p>
            </div>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-3.5 text-sm font-semibold rounded-full transition-all ${
              isSubmitting
                ? 'bg-foreground/5 text-text-subtle cursor-not-allowed'
                : 'bg-foreground text-white hover:bg-foreground/90'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </motion.button>

          <p className="text-[11px] text-text-subtle text-center">
            Your feedback is submitted to the BMOWA committee and logged in Google Sheets.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
