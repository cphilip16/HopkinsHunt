import React, { useState } from 'react';
import {
  Users,
  X,
  MapPin,
  Clock,
  Bus,
  CheckSquare,
  Sparkles,
  Award,
  Calendar,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MarylandRibbon } from './art/MarylandRibbon';
import { HopkinsShield } from './art/HopkinsShield';

const MEETUP_PRESETS = [
  'Charles Commons JHMI Shuttle Stop',
  'Brody Learning Commons Cafe Terrace',
  'Gilman Quad Clock Tower Steps',
  'Peabody Plaza Fountain (Mount Vernon)',
  'School of Medicine Armstrong Courtyard',
  'Barnes & Noble JHU Bookstore Patio',
];

export const CreateTripModal: React.FC = () => {
  const {
    isCreateTripModalOpen,
    setIsCreateTripModalOpen,
    places,
    createGroupTrip,
    profile,
  } = useApp();

  const [destinationPlaceId, setDestinationPlaceId] = useState<string>(places[0]?.id || '');
  const [title, setTitle] = useState('');
  const [meetupLocation, setMeetupLocation] = useState(MEETUP_PRESETS[0]);
  const [meetupTime, setMeetupTime] = useState('3:30 PM Saturday');
  const [dateLabel, setDateLabel] = useState('This Saturday');
  const [transitMethod, setTransitMethod] = useState<'JHMI Shuttle' | 'Charm City Circulator' | 'Walking Flock' | 'Light Rail' | 'Hopkins Night Ride'>('JHMI Shuttle');
  const [maxMembers, setMaxMembers] = useState(6);
  const [notes, setNotes] = useState('');
  const [checklistText, setChecklistText] = useState('Bring Hopkins J-Card for free entry\nComfortable walking shoes\nField camera for photo proof');

  if (!isCreateTripModalOpen) return null;

  const selectedPlace = places.find((p) => p.id === destinationPlaceId) || places[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tripTitle = title.trim() || `${selectedPlace.name} Exploration Flock`;
    const checklist = checklistText
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    createGroupTrip({
      title: tripTitle,
      destinationPlaceId: selectedPlace.id,
      destinationName: selectedPlace.name,
      neighborhood: selectedPlace.neighborhood,
      category: selectedPlace.category,
      meetupLocation,
      meetupTime,
      dateLabel,
      transitMethod,
      maxMembers,
      notes: notes.trim() || `Exploring ${selectedPlace.name} with fellow Blue Jays! All undergraduate and graduate students welcome.`,
      bonusGroupPoints: 50,
      checklist: checklist.length > 0 ? checklist : ['Bring J-Card', 'Meet on time at meetup spot'],
    });

    setIsCreateTripModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-hopkins-deep px-5 sm:px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-white/10 rounded-xl border border-white/20">
              <Users className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-heading font-black text-base sm:text-lg tracking-tight flex items-center gap-1.5">
                <span>Organize a Flock Expedition</span>
              </h3>
              <p className="text-[11px] text-blue-200 font-medium">
                Host a Baltimore group trip & earn +25 Organizer Bonus PTS
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCreateTripModalOpen(false)}
            className="p-1.5 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <MarylandRibbon height={3} />

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          
          {/* Destination Selector */}
          <div>
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
              Expedition Destination (Baltimore Landmark)
            </label>
            <select
              value={destinationPlaceId}
              onChange={(e) => setDestinationPlaceId(e.target.value)}
              className="w-full text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
            >
              {places.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.name} ({place.neighborhood}) &bull; +{place.points} PTS
                </option>
              ))}
            </select>
          </div>

          {/* Expedition Title */}
          <div>
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
              Flock Trip Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={`e.g. ${selectedPlace.name} Weekend Study Break Flock`}
              className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
            />
          </div>

          {/* Campus Meetup Spot */}
          <div>
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
              Hopkins Campus Meetup Location
            </label>
            <div className="space-y-2">
              <select
                value={meetupLocation}
                onChange={(e) => setMeetupLocation(e.target.value)}
                className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
              >
                {MEETUP_PRESETS.map((preset) => (
                  <option key={preset} value={preset}>
                    {preset}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                Day / Date
              </label>
              <input
                type="text"
                value={dateLabel}
                onChange={(e) => setDateLabel(e.target.value)}
                placeholder="e.g. This Saturday"
                className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                Meetup Time
              </label>
              <input
                type="text"
                value={meetupTime}
                onChange={(e) => setMeetupTime(e.target.value)}
                placeholder="e.g. 2:00 PM"
                className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
              />
            </div>
          </div>

          {/* Transit Method & Max Members */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                Transit Method
              </label>
              <select
                value={transitMethod}
                onChange={(e) => setTransitMethod(e.target.value as typeof transitMethod)}
                className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
              >
                <option value="JHMI Shuttle">JHMI Shuttle</option>
                <option value="Walking Flock">Walking Flock</option>
                <option value="Charm City Circulator">Charm City Circulator</option>
                <option value="Hopkins Night Ride">Hopkins Night Ride</option>
                <option value="Light Rail">Light Rail</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                Flock Capacity: {maxMembers} students
              </label>
              <input
                type="range"
                min={2}
                max={12}
                value={maxMembers}
                onChange={(e) => setMaxMembers(Number(e.target.value))}
                className="w-full accent-hopkins-heritage mt-2"
              />
            </div>
          </div>

          {/* Trip Notes */}
          <div>
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
              Expedition Notes & Invitation
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What are we doing? (e.g. Looking at Matisse paintings, then grabbing Berger cookies and sketching outdoors!)"
              className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
            />
          </div>

          {/* Checklist */}
          <div>
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
              Group Checklist (1 item per line)
            </label>
            <textarea
              rows={2}
              value={checklistText}
              onChange={(e) => setChecklistText(e.target.value)}
              className="w-full text-xs font-mono bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-hopkins-heritage"
            />
          </div>

          {/* Host Preview Box */}
          <div className="bg-sky-50 rounded-2xl p-3 border border-sky-200 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <HopkinsShield size={22} />
              <div>
                <span className="font-bold text-hopkins-deep">Host: {profile.studentName}</span>
                <span className="text-slate-500 block text-[11px]">{profile.major} &bull; {profile.classYear}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 font-black text-amber-600 bg-amber-100 px-2.5 py-1 rounded-xl">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>+25 PTS</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsCreateTripModalOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-hopkins-heritage to-hopkins-vibrant hover:from-hopkins-deep hover:to-hopkins-heritage text-white font-heading font-black text-xs shadow-lg shadow-blue-900/20 transform active:scale-95 transition-all"
            >
              <Users className="w-4 h-4 text-amber-300" />
              <span>Publish Flock Expedition</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

