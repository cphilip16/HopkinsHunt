import React, { useState } from 'react';
import { X, Sparkles, MapPin, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SuggestSpotModal: React.FC = () => {
  const {
    isSuggestSpotModalOpen,
    setIsSuggestSpotModalOpen,
    submitSpot,
    spotSubmissions,
  } = useApp();

  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [notice, setNotice] = useState<string | null>(null);

  if (!isSuggestSpotModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = submitSpot(name, reason);
    if (res.success) {
      setNotice(res.message);
      setName('');
      setReason('');
      setTimeout(() => {
        setNotice(null);
        setIsSuggestSpotModalOpen(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-200 font-bubbly">
                Community Pick
              </span>
              <h3 className="text-xl font-black font-bubbly tracking-tight">
                Suggest a Spot
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsSuggestSpotModalOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Info pill */}
          <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-900 text-xs leading-relaxed flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Earn +50 Bonus Explorer Points!</p>
              <p className="text-slate-600 mt-0.5">
                Know a hidden Baltimore treasure, favorite study nook, or delicious eatery near campus? Submit it for inclusion into future Hopkins Hunt expeditions.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-bubbly">
                Place / Spot Name
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Charmington's Café, Rawlings Conservatory"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-bubbly">
                Why should Blue Jays visit?
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Cozy booths, amazing chai lattes, and free Wi-Fi just 5 minutes from campus."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {notice && (
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{notice}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-sm rounded-xl shadow-md shadow-sky-500/25 transition-all font-bubbly flex items-center justify-center gap-2 transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Suggestion (+50 pts)</span>
            </button>
          </form>

          {/* Recent Submissions List */}
          {spotSubmissions.length > 0 && (
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-700 font-bubbly">
                  Recent Community Suggestions
                </span>
                <span className="text-[11px] text-slate-400">
                  {spotSubmissions.length} submitted
                </span>
              </div>

              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {spotSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-900 font-bubbly">
                        {sub.name}
                      </span>
                      <span className="text-[10px] text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full font-semibold">
                        Under Review
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      "{sub.reason}"
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>Suggested by {sub.submittedBy}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

