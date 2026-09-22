import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Heart,
  UserPlus,
  Compass,
  MapPin,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Share2,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HoppyMascot } from './HoppyMascot';
import { getRankAndSubrank } from '../data/ranksData';

export const FriendsLeaderboard: React.FC = () => {
  const {
    friends,
    addFriend,
    cheerFriend,
    profile,
    totalPoints,
    setIsSuggestSpotModalOpen,
    setActiveTab,
  } = useApp();

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Combine user with friends and sort by points descending
  const userInitials = profile.studentName
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'SH';

  const userEntry = {
    id: 'user-current',
    name: profile.studentName,
    email: profile.email || `${profile.jhedId || 'student'}@jh.edu`,
    points: totalPoints,
    visitedCount: profile.visitedPlaceIds.length,
    cheers: 0,
    avatarInitials: userInitials,
    isUser: true,
  };

  const allParticipants = [...friends, userEntry].sort((a, b) => b.points - a.points);
  const userRankIndex = allParticipants.findIndex((p) => p.isUser) + 1;
  const totalCount = allParticipants.length;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = addFriend(newName, newEmail);
    if (result.success) {
      setFeedback({ type: 'success', text: result.message });
      setNewName('');
      setNewEmail('');
    } else {
      setFeedback({ type: 'error', text: result.message });
    }

    setTimeout(() => {
      setFeedback(null);
    }, 4500);
  };

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      {/* Hero Banner with Bubbly Aesthetic and Mascot */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-blue-50/70 to-indigo-50/50 p-6 md:p-8 border border-sky-200 shadow-sm">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider border border-sky-200 font-bubbly">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Blue Jay Squad Rankings</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-bubbly tracking-tight">
              Friends & Classmates <span className="text-sky-600">Leaderboard</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Cheer on your Hopkins study group, challenge your roommates, and see who has unlocked the most historic landmarks and culinary treasures across Charm City!
            </p>

            {/* User Standing Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-sm border border-sky-200">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-xs text-slate-600">Your Standing:</span>
                <span className="font-extrabold text-sm text-sky-950 font-bubbly">
                  Rank #{userRankIndex} of {totalCount} Blue Jays
                </span>
              </div>
              <button
                onClick={() => setIsSuggestSpotModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs rounded-2xl shadow-sm transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Suggest a Spot (+50 pts)</span>
              </button>
            </div>
          </div>

          {/* Interactive Hoppy Mascot Feature */}
          <div className="flex flex-col items-center justify-center p-4 bg-white/70 backdrop-blur-sm rounded-3xl border border-sky-200 shadow-sm">
            <HoppyMascot size="hero" showSpeechBubble={true} />
            <span className="text-xs font-bold text-slate-500 mt-2 font-bubbly">
              Tap Hoppy to Cheer!
            </span>
          </div>
        </div>
      </section>

      {/* Top 3 Podium Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allParticipants.slice(0, 3).map((person, idx) => {
          const podiumTiers = [
            {
              rankLabel: '1st Place',
              badgeColor: 'from-amber-400 to-yellow-500',
              borderColor: 'border-amber-300 ring-2 ring-amber-200',
              bgColor: 'bg-amber-50/50',
              icon: Trophy,
              iconColor: 'text-amber-500',
            },
            {
              rankLabel: '2nd Place',
              badgeColor: 'from-slate-300 to-slate-400',
              borderColor: 'border-slate-300 ring-1 ring-slate-200',
              bgColor: 'bg-slate-50/50',
              icon: Medal,
              iconColor: 'text-slate-400',
            },
            {
              rankLabel: '3rd Place',
              badgeColor: 'from-amber-600 to-yellow-700',
              borderColor: 'border-amber-200 ring-1 ring-amber-100',
              bgColor: 'bg-orange-50/40',
              icon: Award,
              iconColor: 'text-amber-700',
            },
          ];

          const theme = podiumTiers[idx];
          const PodiumIcon = theme.icon;
          const { currentSubrank } = getRankAndSubrank(person.points);

          return (
            <div
              key={person.id}
              className={`relative overflow-hidden rounded-3xl p-5 bg-white ${theme.borderColor} ${theme.bgColor} shadow-sm flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl bg-gradient-to-tr ${theme.badgeColor} text-white shadow-sm`}>
                    <PodiumIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-bubbly">
                      {theme.rankLabel}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5 font-bubbly">
                      {person.name}
                      {person.isUser && (
                        <span className="px-1.5 py-0.5 bg-sky-500 text-white text-[10px] font-bold rounded-full">
                          YOU
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xl font-black text-sky-950 font-bubbly">
                    {person.points}
                  </span>
                  <span className="text-[10px] block text-slate-500 font-semibold uppercase">
                    Points
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>{person.visitedCount} spots visited</span>
                </div>
                <span className="font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-lg text-[11px]">
                  {currentSubrank.subrankName}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Grid: Full Leaderboard & Add Friend Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Leaderboard Table (2 Columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 font-bubbly">
                  Classmate Standings
                </h2>
                <p className="text-xs text-slate-500">
                  Updated in real-time as stamps are verified
                </p>
              </div>
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                {allParticipants.length} Active Explorers
              </span>
            </div>

            {/* List */}
            <div className="space-y-2.5">
              {allParticipants.map((person, idx) => {
                const rankNum = idx + 1;
                const { currentSubrank } = getRankAndSubrank(person.points);

                return (
                  <div
                    key={person.id}
                    className={`flex items-center justify-between p-3.5 md:p-4 rounded-2xl transition-all border ${
                      person.isUser
                        ? 'bg-sky-50/80 border-sky-300 ring-2 ring-sky-200/60 shadow-sm'
                        : 'bg-white border-slate-100 hover:border-sky-200 hover:bg-sky-50/20'
                    }`}
                  >
                    {/* Left: Rank, Avatar, Name */}
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`w-7 text-center font-extrabold font-bubbly text-sm ${
                        rankNum === 1 ? 'text-amber-500 text-base' :
                        rankNum === 2 ? 'text-slate-500' :
                        rankNum === 3 ? 'text-amber-700' : 'text-slate-400'
                      }`}>
                        #{rankNum}
                      </span>

                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm ${
                        person.isUser
                          ? 'bg-gradient-to-tr from-sky-600 to-blue-500 text-white'
                          : 'bg-gradient-to-tr from-blue-100 to-sky-100 text-sky-800'
                      }`}>
                        {person.avatarInitials}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-slate-900 text-sm md:text-base font-bubbly truncate">
                            {person.name}
                          </span>
                          {person.isUser && (
                            <span className="px-1.5 py-0.5 bg-sky-500 text-white text-[10px] font-bold rounded-md font-bubbly">
                              YOU
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">
                          {person.email}
                        </p>
                      </div>
                    </div>

                    {/* Right: Stats & Cheer Button */}
                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <div className="text-right">
                        <span className="font-black text-slate-900 text-sm md:text-base font-bubbly block">
                          {person.points} pts
                        </span>
                        <span className="text-[10px] text-slate-500 hidden sm:inline-block">
                          {currentSubrank.subrankName} · {person.visitedCount} spots
                        </span>
                      </div>

                      {!person.isUser ? (
                        <button
                          type="button"
                          onClick={() => cheerFriend(person.id)}
                          className="px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-700 font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm"
                          title="Cheer your friend on!"
                        >
                          <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                          <span>{person.cheers}</span>
                        </button>
                      ) : (
                        <div className="w-16 text-center text-[10px] text-sky-600 font-bold bg-sky-100/60 py-1.5 rounded-xl">
                          You
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Add Friend & Quick Spot Suggestion */}
        <div className="space-y-6">
          {/* Add a Friend Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-sky-100 text-sky-700">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg font-bubbly">
                  Add a Friend
                </h3>
                <p className="text-xs text-slate-500">
                  Invite your Hopkins study buddy or roommate
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Challenge classmates across Homewood, Peabody, and East Baltimore. Track who discovers Baltimore first!
            </p>

            <form onSubmit={handleAddSubmit} className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-bubbly">
                  Friend's Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samira Patel"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-bubbly">
                  Hopkins Email (@jh.edu)
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. spatel@jh.edu"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>

              {feedback && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-sm rounded-xl shadow-md shadow-sky-500/20 transition-all font-bubbly flex items-center justify-center gap-2 transform active:scale-95"
              >
                <UserPlus className="w-4 h-4" />
                <span>Add to Leaderboard +</span>
              </button>
            </form>
          </div>

          {/* Suggest a Spot Callout Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl p-6 border border-amber-200/80 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm font-bubbly">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Community Spot Discovery</span>
            </div>
            <h4 className="font-extrabold text-slate-900 text-base font-bubbly leading-snug">
              Know a spot we should hunt next?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Suggest a Baltimore hidden gem, cozy café, or campus study nook for community review. Submissions earn you <strong className="text-amber-800">+50 bonus points</strong>!
            </p>
            <button
              onClick={() => setIsSuggestSpotModalOpen(true)}
              className="w-full py-2.5 px-4 bg-white hover:bg-amber-100/60 border border-amber-300 text-amber-900 font-extrabold text-xs rounded-xl shadow-sm transition-all font-bubbly flex items-center justify-center gap-1.5"
            >
              <span>Submit a Suggestion</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

