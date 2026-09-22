import React, { useState } from 'react';
import { showImageFallback } from '../utils/imageFallback';
import {
  Users,
  Plus,
  Calendar,
  Clock,
  MapPin,
  Bus,
  Check,
  Award,
  Sparkles,
  Camera,
  CheckCircle2,
  ShieldCheck,
  Share2,
  Filter,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GroupTrip } from '../types';
import { AvatarVectorArt } from './art/VectorArt';
import { HopkinsShield } from './art/HopkinsShield';
import { BabyJaySticker, HopkinsShuttleSticker } from './art/AnimatedStickers';
import { MarylandRibbon } from './art/MarylandRibbon';

export const FlockTripsView: React.FC = () => {
  const {
    groupTrips,
    joinGroupTrip,
    leaveGroupTrip,
    checkInGroupTrip,
    setIsCreateTripModalOpen,
    openCameraForPlace,
    places,
    profile,
  } = useApp();

  const [activeFilter, setActiveFilter] = useState<'all' | 'weekend' | 'shuttle' | 'my-trips'>('all');

  const filteredTrips = groupTrips.filter((trip) => {
    if (activeFilter === 'my-trips') {
      return trip.members.some((m) => m.name === profile.studentName);
    }
    if (activeFilter === 'shuttle') {
      return trip.transitMethod === 'JHMI Shuttle';
    }
    if (activeFilter === 'weekend') {
      return trip.dateLabel.toLowerCase().includes('sat') || trip.dateLabel.toLowerCase().includes('sun');
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Banner & Hero */}
      <div className="relative bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-hopkins-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden border border-blue-900/60">
        
        {/* Subtle background Maryland ribbon */}
        <div className="absolute top-0 inset-x-0">
          <MarylandRibbon height={3} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold border border-white/15">
              <Users className="w-3.5 h-3.5 text-amber-300" />
              <span>Hopkins Student Travel Pods</span>
            </div>

            <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white">
              Flock Expeditions
            </h1>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              Venture beyond the campus bubble together! Join small student pods exploring Baltimore landmarks, museums, and food markets with fellow Blue Jays.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs font-bold text-amber-300">
              <span className="flex items-center gap-1 bg-amber-400/20 px-2.5 py-1 rounded-xl border border-amber-300/30">
                <Award className="w-4 h-4 text-amber-300" />
                <span>+50 Bonus Exploration PTS when visiting with a Flock</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsCreateTripModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-heading font-black text-sm shadow-lg shadow-amber-400/20 ring-2 ring-white/30 transform active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Organize a Flock Trip</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-1">
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          {[
            { id: 'all', label: `All Expeditions (${groupTrips.length})` },
            { id: 'weekend', label: 'Weekend Flocks' },
            { id: 'shuttle', label: 'JHMI Shuttle Accessible' },
            {
              id: 'my-trips',
              label: `My Flocks (${groupTrips.filter((t) => t.members.some((m) => m.name === profile.studentName)).length})`,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all whitespace-nowrap border ${
                activeFilter === tab.id
                  ? 'bg-hopkins-heritage text-white border-hopkins-deep shadow-md shadow-blue-900/20 ring-1 ring-sky-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs font-semibold text-slate-500">
          Showing {filteredTrips.length} active student pods
        </div>
      </div>

      {/* Trips Cards Grid */}
      {filteredTrips.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mb-3">
            <Users className="w-8 h-8 text-hopkins-heritage" />
          </div>
          <h3 className="font-heading font-bold text-base text-slate-800">
            No expeditions in this filter
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try switching filter tabs or start your own student flock trip to any landmark in Baltimore!
          </p>
          <button
            onClick={() => setIsCreateTripModalOpen(true)}
            className="mt-4 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-hopkins-heritage text-white text-xs font-bold shadow-md hover:bg-hopkins-deep transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Organize Flock Trip</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTrips.map((trip) => {
            const isUserJoined = trip.members.some((m) => m.name === profile.studentName);
            const isFull = trip.members.length >= trip.maxMembers;
            const spotsRemaining = trip.maxMembers - trip.members.length;
            const placeObj = places.find((p) => p.id === trip.destinationPlaceId);

            return (
              <div
                key={trip.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-300/80 shadow-card-high hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Destination Image Banner */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                    <img
                      src={placeObj?.imageUrl || '/places/inner-harbor.jpg'}
                      onError={showImageFallback}
                      alt={trip.destinationName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-between p-4">
                      
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-white/20">
                          {trip.neighborhood}
                        </span>
                        <div className="flex items-center space-x-1.5">
                          <span className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs shadow-md">
                            +{trip.bonusGroupPoints} GROUP PTS
                          </span>
                        </div>
                      </div>

                      {/* Bottom Title on Image */}
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                          Destination: {trip.destinationName}
                        </div>
                        <h3 className="font-heading font-black text-white text-lg sm:text-xl tracking-tight line-clamp-1">
                          {trip.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Trip Details & Meetup Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    
                    {/* Meetup & Transit Highlights */}
                    <div className="grid grid-cols-2 gap-2.5 bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-hopkins-heritage flex-shrink-0" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Departure</span>
                          <span className="font-black text-slate-900">{trip.meetupTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Bus className="w-4 h-4 text-hopkins-heritage flex-shrink-0" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Transit Mode</span>
                          <span className="font-black text-slate-900">{trip.transitMethod}</span>
                        </div>
                      </div>

                      <div className="col-span-2 flex items-center space-x-2 pt-1 border-t border-slate-200/80">
                        <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <div className="text-left truncate">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Campus Meetup</span>
                          <span className="font-bold text-slate-800 text-[11px] truncate block">{trip.meetupLocation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Invitation Notes */}
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      "{trip.notes}"
                    </p>

                    {/* Student Host Tag */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center overflow-hidden">
                          <AvatarVectorArt avatarId={trip.creator.avatar} size={28} />
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 font-bold text-slate-900 text-xs">
                            <span>Host: {trip.creator.name}</span>
                            {trip.creator.isJhuVerified && (
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            )}
                          </div>
                          <span className="text-[10px] text-slate-500 block">
                            {trip.creator.major} &bull; {trip.creator.classYear}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {trip.dateLabel}
                      </span>
                    </div>

                    {/* Attendees & Capacity Bar */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-hopkins-heritage" />
                          <span>Student Flock ({trip.members.length}/{trip.maxMembers})</span>
                        </span>
                        <span className={`text-[11px] font-bold ${spotsRemaining > 0 ? 'text-emerald-700' : 'text-slate-500'}`}>
                          {spotsRemaining > 0 ? `${spotsRemaining} spots left` : 'Flock Full'}
                        </span>
                      </div>

                      {/* Attendee Avatar Bubbles */}
                      <div className="flex items-center space-x-1.5 overflow-x-auto py-1 no-scrollbar">
                        {trip.members.map((member) => (
                          <div
                            key={member.id}
                            title={`${member.name} (${member.major})`}
                            className="relative group/member flex-shrink-0"
                          >
                            <div className="w-8 h-8 rounded-full bg-sky-50 border-2 border-white shadow-sm ring-1 ring-slate-200 flex items-center justify-center overflow-hidden">
                              <AvatarVectorArt avatarId={member.avatar} size={24} />
                            </div>
                            {member.isCreator && (
                              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border border-white" title="Trip Host" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-hopkins-spirit to-hopkins-heritage transition-all duration-300"
                          style={{ width: `${(trip.members.length / trip.maxMembers) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Group Checklist Accordion */}
                    <div className="bg-blue-50/60 rounded-xl p-3 border border-blue-100 space-y-1.5 text-[11px]">
                      <span className="font-extrabold text-hopkins-deep uppercase tracking-wider text-[10px] block">
                        Flock Packing & Prep Checklist
                      </span>
                      {trip.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-slate-700 font-medium">
                          <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 stroke-[3]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                  
                  {/* Snap Photo Button */}
                  {placeObj && (
                    <button
                      onClick={() => openCameraForPlace(placeObj)}
                      className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 text-xs font-bold transition-colors"
                      title="Snap photo proof for this trip"
                    >
                      <Camera className="w-3.5 h-3.5 text-hopkins-heritage" />
                      <span className="hidden sm:inline">Photo Proof</span>
                    </button>
                  )}

                  {/* Main Join / Check-In Action Button */}
                  <div className="flex items-center space-x-2 ml-auto">
                    {isUserJoined ? (
                      <>
                        <button
                          onClick={() => checkInGroupTrip(trip.id)}
                          className="inline-flex items-center space-x-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-heading font-black text-xs shadow-md shadow-emerald-600/20 hover:from-emerald-400 hover:to-emerald-500 transform active:scale-95 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Check In (+50 PTS)</span>
                        </button>

                        <button
                          onClick={() => leaveGroupTrip(trip.id)}
                          className="px-3 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 transition-colors"
                        >
                          Leave
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => joinGroupTrip(trip.id)}
                        disabled={isFull}
                        className={`inline-flex items-center space-x-1.5 px-5 py-2 rounded-xl font-heading font-black text-xs shadow-md transition-all ${
                          isFull
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-hopkins-heritage to-hopkins-vibrant hover:from-hopkins-deep hover:to-hopkins-heritage text-white shadow-blue-900/20 transform active:scale-95'
                        }`}
                      >
                        <Users className="w-4 h-4 text-amber-300" />
                        <span>{isFull ? 'Flock Full' : 'Join This Flock'}</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
