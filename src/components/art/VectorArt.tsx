import React from 'react';

// ==========================================
// 1. SUBRANK INSIGNIA VECTOR ART (15 LEVELS)
// ==========================================

export const RankInsigniaArt: React.FC<{
  insignia?: string;
  id?: string;
  size?: number;
  className?: string;
}> = ({ insignia = '', id = '', size = 32, className = '' }) => {
  // Match by id or semantic insignia name or legacy emoji
  const key = (insignia + ' ' + id).toLowerCase();

  // Helper render for 15 subrank SVGs
  const renderSvg = () => {
    // Level 1: Fledgling Fencer (Simplified Collegiate Crest with Crossed Foils & Blue Jay Feather)
    if (/\bsubrank-1\b/.test(key) || key.includes('fledgling') || key.includes('fencer') || key.includes('nestling-hatch')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub1-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003D99" />
              <stop offset="60%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#001438" />
            </linearGradient>
            <linearGradient id="sub1-gold-trim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="40%" stopColor="#FEF08A" />
              <stop offset="80%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="sub1-foil-blade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>

          {/* Clean Collegiate Shield Base */}
          <path
            d="M24 4 C34 4 41 6 41 16 C41 28 32 38 24 44 C16 38 7 28 7 16 C7 6 14 4 24 4 Z"
            fill="url(#sub1-shield-grad)"
            stroke="url(#sub1-gold-trim)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          {/* Inner Light Blue Accent Border */}
          <path
            d="M24 6.5 C32 6.5 38.5 8.2 38.5 16.5 C38.5 26.5 30.5 35.5 24 41 C17.5 35.5 9.5 26.5 9.5 16.5 C9.5 8.2 16 6.5 24 6.5 Z"
            fill="none"
            stroke="#68ACE5"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Crossed Fencing Foils */}
          {/* Foil 1 (Top-Left to Bottom-Right) */}
          <g>
            <line x1="12" y1="12" x2="33" y2="33" stroke="url(#sub1-foil-blade)" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="12.5" y1="12.5" x2="32.5" y2="32.5" stroke="#FFFFFF" strokeWidth="0.6" strokeLinecap="round" />
            {/* Foil Tip Stopper */}
            <circle cx="11.5" cy="11.5" r="1.3" fill="#68ACE5" stroke="#002D72" strokeWidth="0.4" />
            {/* Guard & Grip */}
            <ellipse cx="32" cy="32" rx="2.4" ry="3.4" transform="rotate(-45 32 32)" fill="url(#sub1-gold-trim)" stroke="#78350F" strokeWidth="0.5" />
            <line x1="33" y1="33" x2="36.5" y2="36.5" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="37.5" cy="37.5" r="1.1" fill="url(#sub1-gold-trim)" />
          </g>

          {/* Foil 2 (Top-Right to Bottom-Left) */}
          <g>
            <line x1="36" y1="12" x2="15" y2="33" stroke="url(#sub1-foil-blade)" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="35.5" y1="12.5" x2="15.5" y2="32.5" stroke="#FFFFFF" strokeWidth="0.6" strokeLinecap="round" />
            {/* Foil Tip Stopper */}
            <circle cx="36.5" cy="11.5" r="1.3" fill="#68ACE5" stroke="#002D72" strokeWidth="0.4" />
            {/* Guard & Grip */}
            <ellipse cx="16" cy="32" rx="2.4" ry="3.4" transform="rotate(45 16 32)" fill="url(#sub1-gold-trim)" stroke="#78350F" strokeWidth="0.5" />
            <line x1="15" y1="33" x2="11.5" y2="36.5" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="10.5" cy="37.5" r="1.1" fill="url(#sub1-gold-trim)" />
          </g>

          {/* Centerpiece: Clean Hopkins Fledgling Blue Jay Feather */}
          <g>
            {/* Feather Silhouette Left (Hopkins Sky Blue) & Right (Hopkins Deep Blue) */}
            <path d="M24 10 C18 16 17 24 24 30 Z" fill="#68ACE5" />
            <path d="M24 10 C30 16 31 24 24 30 Z" fill="#0072CE" />
            {/* Center Quill Shaft */}
            <line x1="24" y1="9" x2="24" y2="32" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
            {/* Clean Blue Jay Wing Bar Detail */}
            <line x1="20.5" y1="20" x2="27.5" y2="20" stroke="#001845" strokeWidth="1.2" />
            <line x1="21.5" y1="22" x2="26.5" y2="22" stroke="#FFFFFF" strokeWidth="0.8" />
          </g>

          {/* Top Gold Star Accent */}
          <polygon
            points="24,6.5 24.8,8.2 26.6,8.2 25.1,9.3 25.7,11 24,9.9 22.3,11 22.9,9.3 21.4,8.2 23.2,8.2"
            fill="url(#sub1-gold-trim)"
          />

          {/* Subtle Bottom Chevron Indicator */}
          <path
            d="M21 37.5 L24 40 L27 37.5"
            fill="none"
            stroke="url(#sub1-gold-trim)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    // Level 2: Brody Stalker (Archival Open Leather Tome / Bookplate Silhouette)
    if (key.includes('subrank-2') || key.includes('brody') || key.includes('brody-books') || key.includes('stalker')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub2-leather" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="35%" stopColor="#451A03" />
              <stop offset="70%" stopColor="#291102" />
              <stop offset="100%" stopColor="#1B0A01" />
            </linearGradient>
            <linearGradient id="sub2-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="30%" stopColor="#FEF08A" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="sub2-vellum" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="50%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
            <linearGradient id="sub2-navy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001845" />
              <stop offset="40%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="sub2-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#064E3B" />
              <stop offset="40%" stopColor="#0F766E" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="sub2-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7F1D1D" />
              <stop offset="40%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <clipPath id="sub2-book-clip">
              <path d="M6 10 C12 7 20 9 24 12 C28 9 36 7 42 10 L42 38 C36 35 28 37 24 34 C20 37 12 35 6 38 Z" />
            </clipPath>
          </defs>

          {/* Archival Open Leather Tome Silhouette */}
          {/* Leather Binding Backing */}
          <path
            d="M5 9 C11.5 6 20 8 24 11 C28 8 36.5 6 43 9 L43 39 C36.5 36 28 38 24 35 C20 38 11.5 36 5 39 Z"
            fill="url(#sub2-leather)"
            stroke="url(#sub2-gold)"
            strokeWidth="1.2"
          />

          {/* Gold Filigree Corner Bookplate Corners */}
          <polygon points="5,9 10,9 5,14" fill="url(#sub2-gold)" />
          <polygon points="43,9 38,9 43,14" fill="url(#sub2-gold)" />
          <polygon points="5,39 10,39 5,34" fill="url(#sub2-gold)" />
          <polygon points="43,39 38,39 43,34" fill="url(#sub2-gold)" />

          {/* Clipped Vellum Pages Field */}
          <g clipPath="url(#sub2-book-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub2-vellum)" />

            {/* Central Book Spine Valley Shadow */}
            <line x1="24" y1="11" x2="24" y2="36" stroke="#D97706" strokeWidth="1.2" />

            {/* Faint Archival Library Grid / Page Ruled Lines */}
            <line x1="9" y1="16" x2="21" y2="17" stroke="#CBD5E1" strokeWidth="0.5" />
            <line x1="9" y1="20" x2="21" y2="21" stroke="#CBD5E1" strokeWidth="0.5" />
            <line x1="27" y1="17" x2="39" y2="16" stroke="#CBD5E1" strokeWidth="0.5" />
            <line x1="27" y1="21" x2="39" y2="20" stroke="#CBD5E1" strokeWidth="0.5" />

            {/* Stack of 3 Scholarly Academic Volumes */}
            {/* Book 1 (Bottom): Johns Hopkins Heritage Navy */}
            <rect x="10" y="29" width="28" height="6.5" rx="1.5" fill="url(#sub2-navy)" stroke="#001438" strokeWidth="0.7" />
            <rect x="13" y="30.5" width="22" height="3.5" rx="0.5" fill="#F8FAFC" />
            <line x1="14" y1="29" x2="14" y2="35.5" stroke="#F59E0B" strokeWidth="1.2" />
            <line x1="17" y1="29" x2="17" y2="35.5" stroke="#F59E0B" strokeWidth="1.2" />

            {/* Book 2 (Middle): Ivy Gilman Green */}
            <rect x="12" y="22" width="24" height="6" rx="1.5" fill="url(#sub2-green)" stroke="#064E3B" strokeWidth="0.7" />
            <rect x="14.5" y="23.5" width="19" height="3" rx="0.5" fill="#FFFBEB" />
            <line x1="15" y1="22" x2="15" y2="28" stroke="#FBBF24" strokeWidth="1" />
            <line x1="18" y1="22" x2="18" y2="28" stroke="#FBBF24" strokeWidth="1" />

            {/* Book 3 (Top): Homewood Crimson (Angled) */}
            <g transform="rotate(-3 24 17)">
              <rect x="14" y="15" width="20" height="5.5" rx="1.2" fill="url(#sub2-red)" stroke="#7F1D1D" strokeWidth="0.7" />
              <rect x="16" y="16.5" width="16" height="2.5" rx="0.5" fill="#F8FAFC" />
              <line x1="17" y1="15" x2="17" y2="20.5" stroke="#FDE047" strokeWidth="1" />
              {/* Satin Gold Ribbon Bookmark */}
              <path d="M28 20 L28 27 L30 25.5 L32 27 L32 20 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="0.4" />
            </g>

            {/* Academic Gold Wireframe Reading Glasses */}
            <circle cx="19" cy="11.5" r="3.8" stroke="#D97706" strokeWidth="1.2" fill="#FFFFFF" fillOpacity="0.85" />
            <circle cx="29" cy="11.5" r="3.8" stroke="#D97706" strokeWidth="1.2" fill="#FFFFFF" fillOpacity="0.85" />
            {/* Bridge */}
            <path d="M22.8 11.5 Q24 10.2 25.2 11.5" stroke="#D97706" strokeWidth="1.2" fill="none" />
            {/* Specular Lens Reflection */}
            <line x1="17" y1="9.8" x2="20" y2="12.5" stroke="#60A5FA" strokeWidth="0.7" opacity="0.8" />
            <line x1="27" y1="9.8" x2="30" y2="12.5" stroke="#60A5FA" strokeWidth="0.7" opacity="0.8" />
          </g>

          {/* Central Gold Spine Rivet Head */}
          <circle cx="24" cy="11.5" r="1.2" fill="url(#sub2-gold)" stroke="#78350F" strokeWidth="0.4" />
          <circle cx="24" cy="34.5" r="1.2" fill="url(#sub2-gold)" stroke="#78350F" strokeWidth="0.4" />
        </svg>
      );
    }

    // Level 3: Charles Street Sprinter (Aerodynamic Winged Speed Shield Silhouette)
    if (key.includes('subrank-3') || key.includes('charles') || key.includes('charles-runner') || key.includes('sprinter')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub3-speed-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#002D72" />
            </linearGradient>
            <linearGradient id="sub3-asphalt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="60%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="sub3-shoe" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#002D72" />
            </linearGradient>
            <linearGradient id="sub3-wing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="40%" stopColor="#38BDF8" />
              <stop offset="80%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#001845" />
            </linearGradient>
            <clipPath id="sub3-shield-clip">
              <path d="M8 12 L24 4 L40 12 L38 28 C36 38 24 44 24 44 C24 44 12 38 10 28 Z" />
            </clipPath>
          </defs>

          {/* Swept-Back Hermes Wing Feathers Extending From Flanks */}
          <path d="M8 14 C3 12 2 18 5 22 C2 21 3 26 7 28 Z" fill="url(#sub3-wing)" stroke="#002D72" strokeWidth="0.6" />
          <path d="M40 14 C45 12 46 18 43 22 C46 21 45 26 41 28 Z" fill="url(#sub3-wing)" stroke="#002D72" strokeWidth="0.6" />

          {/* Aerodynamic Speed Shield Outer Frame */}
          <path
            d="M8 12 L24 4 L40 12 L38 28 C36 38 24 44 24 44 C24 44 12 38 10 28 Z"
            fill="url(#sub3-speed-rim)"
            stroke="#001438"
            strokeWidth="1.2"
          />

          {/* Inner Inset Rim */}
          <path
            d="M9.5 13 L24 5.8 L38.5 13 L36.8 27.5 C34.8 36.5 24 42 24 42 C24 42 13.2 36.5 11.2 27.5 Z"
            fill="#0F172A"
          />

          {/* Clipped Track Field */}
          <g clipPath="url(#sub3-shield-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub3-asphalt)" />

            {/* Charles Street Crosswalk Speed Stripes */}
            <line x1="6" y1="20" x2="16" y2="20" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="3 2" opacity="0.6" />
            <line x1="4" y1="26" x2="18" y2="26" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 2" />
            <line x1="8" y1="32" x2="18" y2="32" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

            {/* Hermes-Style Winged Blue Jay Sneaker */}
            {/* Sneaker Air Cushion Sole */}
            <path
              d="M13 34 C18 34 24 36 30 36 C35 36 38 34 40 33 C41 32 39 30 37 30 L16 30 C13 30 11 32 13 34 Z"
              fill="#FFFFFF"
              stroke="#64748B"
              strokeWidth="1"
            />
            <path d="M19 34 L36 34" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 1" />

            {/* Sneaker Upper Body */}
            <path d="M16 30 L20 21 C22 17 26 17 29 21 L33 26 L38 30 Z" fill="url(#sub3-shoe)" stroke="#001845" strokeWidth="0.7" />
            {/* Golden Laces */}
            <line x1="22" y1="22" x2="26" y2="25" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="24" y1="20" x2="28" y2="23" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />

            {/* Majestic Hermes Blue Jay Feathered Wing on Shoe */}
            <g>
              {/* Primary Wing */}
              <path
                d="M18 20 C18 11 28 10 37 7 C33 12 31 15 28 17 C33 16 36 14 38 12 C35 17 30 21 24 22 Z"
                fill="url(#sub3-wing)"
                stroke="#001438"
                strokeWidth="0.6"
              />
              {/* Secondary Feathers */}
              <path d="M22 16 C26 12 32 10 35 8 C32 12 29 15 26 17 Z" fill="#BAE6FD" />
              <polygon points="37,7 39,12 36,12" fill="#FFFFFF" />
            </g>
          </g>

          {/* 4-Point Golden Track Star at Shield Apex */}
          <polygon points="24,3 25,6 28,7 25,8 24,11 23,8 20,7 23,6" fill="#FDE047" stroke="#B45309" strokeWidth="0.4" />
        </svg>
      );
    }

    // Level 4: Wyman Park Wanderer (Botanical Gothic Quatrefoil Silhouette)
    if (key.includes('subrank-4') || key.includes('wyman') || key.includes('wyman-dell') || key.includes('wanderer')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub4-quatre-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <radialGradient id="sub4-dell-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#ECFDF5" />
              <stop offset="70%" stopColor="#D1FAE5" />
              <stop offset="100%" stopColor="#A7F3D0" />
            </radialGradient>
            <linearGradient id="sub4-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="sub4-acorn" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="60%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
            <linearGradient id="sub4-gold-acc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <clipPath id="sub4-quatre-clip">
              <path d="M24 3 C27 3 30 6 33 9 C36 12 40 15 42 18 C45 22 45 26 42 30 C40 33 36 36 33 39 C30 42 27 45 24 45 C21 45 18 42 15 39 C12 36 8 33 6 30 C3 26 3 22 6 18 C8 15 12 12 15 9 C18 6 21 3 24 3 Z" />
            </clipPath>
          </defs>

          {/* Botanical 4-Lobed Gothic Quatrefoil Silhouette Outer Frame */}
          <path
            d="M24 2 C27.5 2 31 5.5 34 8.5 C37 11.5 41 14.5 43.5 18 C46.5 22 46.5 26 43.5 30 C41 33.5 37 36.5 34 39.5 C31 42.5 27.5 46 24 46 C20.5 46 17 42.5 14 39.5 C11 36.5 7 33.5 4.5 30 C1.5 26 1.5 22 4.5 18 C7 14.5 11 11.5 14 8.5 C17 5.5 20.5 2 24 2 Z"
            fill="url(#sub4-quatre-border)"
            stroke="#064E3B"
            strokeWidth="1.2"
          />
          {/* Inner Inset Gold Cord */}
          <path
            d="M24 3.5 C27 3.5 30 6.5 33 9.5 C36 12.5 39.5 15.2 42 18.5 C44.5 22 44.5 26 42 29.5 C39.5 32.8 36 35.5 33 38.5 C30 41.5 27 44.5 24 44.5 C21 44.5 18 41.5 15 38.5 C12 35.5 8.5 32.8 6 29.5 C3.5 26 3.5 22 6 18.5 C8.5 15.2 12 12.5 15 9.5 C18 6.5 21 3.5 24 3.5 Z"
            stroke="url(#sub4-gold-acc)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.8"
          />

          {/* Clipped Forest Dell Field */}
          <g clipPath="url(#sub4-quatre-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub4-dell-bg)" />

            {/* Faint Botanical Dell Leaflet Rings */}
            <circle cx="24" cy="24" r="14" stroke="#6EE7B7" strokeWidth="0.8" strokeDasharray="2 2" fill="none" opacity="0.6" />

            {/* Sculpted Maryland White Oak Leaf */}
            <path
              d="M23 8 C27 13 36 14 33 22 C37 26 33 32 29 34 C25 36 23 40 23 40 C23 40 21 36 17 34 C13 32 9 26 13 22 C10 14 19 13 23 8 Z"
              fill="url(#sub4-leaf)"
              stroke="#047857"
              strokeWidth="1"
            />
            {/* Main Leaf Stem & Gold-Lit Veins */}
            <path d="M23 8 L23 40" stroke="#FDE68A" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M23 15 Q28 18 31 20" stroke="#FEF08A" strokeWidth="0.9" />
            <path d="M23 23 Q28 26 30 28" stroke="#FEF08A" strokeWidth="0.9" />
            <path d="M23 15 Q18 18 15 20" stroke="#FEF08A" strokeWidth="0.9" />
            <path d="M23 23 Q18 26 16 28" stroke="#FEF08A" strokeWidth="0.9" />

            {/* Glossy Forest Dell Acorn */}
            <ellipse cx="33" cy="32" rx="5" ry="6" fill="url(#sub4-acorn)" stroke="#451A03" strokeWidth="0.6" />
            {/* Specular Curved Gleam */}
            <path d="M35 29 Q37 32 36 35" stroke="#FEF3C7" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
            {/* Textured Woody Cap */}
            <path d="M28 29 C28 25 38 25 38 29 Z" fill="#451A03" stroke="#78350F" strokeWidth="0.8" />
            <line x1="30" y1="27" x2="36" y2="27" stroke="#D97706" strokeWidth="0.8" strokeDasharray="1 1" />
            {/* Stem */}
            <path d="M33 25 Q35 22 34 21" stroke="#451A03" strokeWidth="1.6" strokeLinecap="round" />

            {/* Glowing Firefly Dew Sparkles */}
            <circle cx="14" cy="14" r="1.8" fill="#FDE047" />
            <circle cx="14" cy="14" r="0.7" fill="#FFFFFF" />
            <circle cx="34" cy="14" r="1.5" fill="#FDE047" />
            <circle cx="14" cy="34" r="1.5" fill="#FDE047" />
          </g>

          {/* 4 Gold Studs at Quatrefoil Intersections */}
          <circle cx="24" cy="2.5" r="1" fill="url(#sub4-gold-acc)" stroke="#064E3B" strokeWidth="0.3" />
          <circle cx="45.5" cy="24" r="1" fill="url(#sub4-gold-acc)" stroke="#064E3B" strokeWidth="0.3" />
          <circle cx="24" cy="45.5" r="1" fill="url(#sub4-gold-acc)" stroke="#064E3B" strokeWidth="0.3" />
          <circle cx="2.5" cy="24" r="1" fill="url(#sub4-gold-acc)" stroke="#064E3B" strokeWidth="0.3" />
        </svg>
      );
    }

    // Level 5: JHMI Shuttle Veteran (Notched Transit Ticket / Keystone Plaque Silhouette)
    if (key.includes('subrank-5') || key.includes('shuttle') || key.includes('jhmi-shuttle') || key.includes('transit')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub5-ticket-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="50%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#001438" />
            </linearGradient>
            <radialGradient id="sub5-sky" cx="50%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="70%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </radialGradient>
            <linearGradient id="sub5-bus" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002D72" />
              <stop offset="50%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#001845" />
            </linearGradient>
            <linearGradient id="sub5-glass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="sub5-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <clipPath id="sub5-keystone-clip">
              <path d="M10 5 L38 5 C38 13 43 16 43 24 C43 32 38 35 38 43 L10 43 C10 35 5 32 5 24 C5 16 10 13 10 5 Z" />
            </clipPath>
          </defs>

          {/* Notched Transit Ticket / Keystone Plaque Outer Frame */}
          <path
            d="M10 5 L38 5 C38 13 43 16 43 24 C43 32 38 35 38 43 L10 43 C10 35 5 32 5 24 C5 16 10 13 10 5 Z"
            fill="url(#sub5-ticket-rim)"
            stroke="url(#sub5-gold)"
            strokeWidth="1.2"
          />

          {/* Inner Beveled Border */}
          <path
            d="M11.5 6.5 L36.5 6.5 C36.5 13.8 41.5 16.5 41.5 24 C41.5 31.5 36.5 34.2 36.5 41.5 L11.5 41.5 C11.5 34.2 6.5 31.5 6.5 24 C6.5 16.5 11.5 13.8 11.5 6.5 Z"
            stroke="#38BDF8"
            strokeWidth="0.6"
            strokeDasharray="2 1.5"
            fill="none"
            opacity="0.8"
          />

          {/* Clipped Highway Ground */}
          <g clipPath="url(#sub5-keystone-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub5-sky)" />

            {/* Roadway & Asphalt */}
            <rect x="4" y="32" width="40" height="12" fill="#334155" />
            <line x1="8" y1="38" x2="40" y2="38" stroke="#FDE047" strokeWidth="1.2" strokeDasharray="3 2" />

            {/* Blue Jay Shuttle Bus Body */}
            <rect x="10" y="14" width="28" height="19" rx="4" fill="url(#sub5-bus)" stroke="#001845" strokeWidth="1.2" />

            {/* University Gold Swoosh */}
            <path d="M10 25 C16 25 24 28 38 26 L38 29 C24 31 16 28 10 28 Z" fill="url(#sub5-gold)" />

            {/* Windshield & Side Windows */}
            <rect x="13" y="17" width="9" height="7" rx="1.5" fill="url(#sub5-glass)" />
            <rect x="24" y="17" width="6" height="7" rx="1" fill="url(#sub5-glass)" />
            <rect x="31" y="17" width="5" height="7" rx="1" fill="url(#sub5-glass)" />
            <line x1="14.5" y1="18" x2="19.5" y2="23" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />

            {/* Illuminated Green LED Destination Sign */}
            <rect x="15" y="14.8" width="18" height="2.2" rx="0.6" fill="#047857" />
            <text x="24" y="16.5" textAnchor="middle" fontSize="1.5" fontWeight="bold" fill="#34D399" fontFamily="monospace" letterSpacing="0.5">JHMI</text>

            {/* Chrome Headlights */}
            <circle cx="12" cy="28" r="1.6" fill="#FBBF24" stroke="#D97706" strokeWidth="0.5" />
            <circle cx="36" cy="28" r="1.6" fill="#FBBF24" stroke="#D97706" strokeWidth="0.5" />

            {/* Dual Transit Wheels */}
            <circle cx="16" cy="33" r="3.8" fill="#0F172A" />
            <circle cx="16" cy="33" r="1.8" fill="#94A3B8" />
            <circle cx="32" cy="33" r="3.8" fill="#0F172A" />
            <circle cx="32" cy="33" r="1.8" fill="#94A3B8" />
          </g>

          {/* Gold Transit Ticket Punch Hole Rings */}
          <circle cx="5" cy="24" r="2.2" stroke="url(#sub5-gold)" strokeWidth="0.8" fill="none" />
          <circle cx="43" cy="24" r="2.2" stroke="url(#sub5-gold)" strokeWidth="0.8" fill="none" />
        </svg>
      );
    }

    // Level 6: Peabody Harmonizer (Classical Concert Lyre / Music Harp Silhouette)
    if (key.includes('subrank-6') || key.includes('peabody') || key.includes('peabody-violin') || key.includes('harmonizer')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub6-lyre-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="30%" stopColor="#FEF08A" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <radialGradient id="sub6-hall-bg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="60%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.4" />
            </radialGradient>
            <linearGradient id="sub6-wood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="sub6-clef-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <clipPath id="sub6-lyre-clip">
              <path d="M9 6 C13 12 15 26 12 35 C15 42 33 42 36 35 C33 26 35 12 39 6 C35 10 29 10 24 6 C19 10 13 10 9 6 Z" />
            </clipPath>
          </defs>

          {/* Classical Concert Lyre Silhouette Outer Frame */}
          <path
            d="M9 6 C13 12 15 26 12 35 C15 42 33 42 36 35 C33 26 35 12 39 6 C35 10 29 10 24 6 C19 10 13 10 9 6 Z"
            fill="url(#sub6-lyre-gold)"
            stroke="#78350F"
            strokeWidth="1.2"
          />

          {/* Classical Horn Finials Atop Lyre */}
          <circle cx="9" cy="6" r="2.2" fill="url(#sub6-lyre-gold)" stroke="#78350F" strokeWidth="0.6" />
          <circle cx="39" cy="6" r="2.2" fill="url(#sub6-lyre-gold)" stroke="#78350F" strokeWidth="0.6" />
          {/* Lyre Base Pedestal */}
          <rect x="18" y="41" width="12" height="3" rx="1" fill="url(#sub6-lyre-gold)" stroke="#78350F" strokeWidth="0.6" />

          {/* Clipped Concert Hall Field */}
          <g clipPath="url(#sub6-lyre-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub6-hall-bg)" />

            {/* Vertical Golden Lyre / Harp Strings Behind Violin */}
            <line x1="18" y1="8" x2="18" y2="38" stroke="#D97706" strokeWidth="0.6" opacity="0.6" />
            <line x1="22" y1="8" x2="22" y2="38" stroke="#D97706" strokeWidth="0.6" opacity="0.6" />
            <line x1="26" y1="8" x2="26" y2="38" stroke="#D97706" strokeWidth="0.6" opacity="0.6" />
            <line x1="30" y1="8" x2="30" y2="38" stroke="#D97706" strokeWidth="0.6" opacity="0.6" />

            {/* Peabody Conservatory Master Violin */}
            <g transform="rotate(28 24 24)">
              {/* Lower Bout */}
              <ellipse cx="24" cy="27" rx="8" ry="9.5" fill="url(#sub6-wood)" stroke="#451A03" strokeWidth="0.8" />
              {/* Upper Bout */}
              <ellipse cx="24" cy="17" rx="6" ry="7" fill="url(#sub6-wood)" stroke="#451A03" strokeWidth="0.8" />
              {/* C-Bout Waist Insets */}
              <circle cx="17" cy="22" r="2.8" fill="#FDE68A" />
              <circle cx="31" cy="22" r="2.8" fill="#FDE68A" />
              {/* Ebony Fingerboard & Scroll Pegbox */}
              <rect x="22.2" y="6" width="3.6" height="13" fill="#1E293B" rx="0.8" />
              <circle cx="24" cy="5" r="2.2" fill="#78350F" stroke="#451A03" strokeWidth="0.8" />
              {/* F-Holes */}
              <path d="M21 20 Q20 22 21 24" stroke="#451A03" strokeWidth="1.1" strokeLinecap="round" />
              <path d="M27 20 Q28 22 27 24" stroke="#451A03" strokeWidth="1.1" strokeLinecap="round" />
              {/* Violin Strings */}
              <line x1="23.2" y1="7" x2="23.2" y2="33" stroke="#FEF3C7" strokeWidth="0.6" />
              <line x1="24.8" y1="7" x2="24.8" y2="33" stroke="#FEF3C7" strokeWidth="0.6" />
            </g>

            {/* Floating Gold Treble Clef & Musical Notes */}
            <path
              d="M37 13 C35 11 32 13 32 16 C32 20 37 22 37 26 C37 29 34 30 32 29 M34 10 L34 32 C34 35 31 36 29 34"
              stroke="url(#sub6-clef-gold)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="29" cy="34" r="2" fill="#D97706" />

            {/* Sparkle Notes */}
            <polygon points="12,13 13,15 15,16 13,17 12,19 11,17 9,16 11,15" fill="#F59E0B" />
          </g>
        </svg>
      );
    }

    // Level 7: Hampden "Hon" Hunter (Atomic 1960s Hon Harlequin / Winged Cat-Eye Cartouche)
    if (key.includes('subrank-7') || key.includes('hampden') || key.includes('hon') || key.includes('hampden-shades') || key.includes('hunter')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub7-cartouche" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="40%" stopColor="#DB2777" />
              <stop offset="80%" stopColor="#BE185D" />
              <stop offset="100%" stopColor="#831843" />
            </linearGradient>
            <radialGradient id="sub7-field" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#FFF1F2" />
              <stop offset="50%" stopColor="#FCE7F3" />
              <stop offset="100%" stopColor="#FBCFE8" />
            </radialGradient>
            <linearGradient id="sub7-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="sub7-frame" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>
            <linearGradient id="sub7-lens" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="60%" stopColor="#2E1065" />
              <stop offset="100%" stopColor="#BE185D" />
            </linearGradient>
            {/* Curved Heart Text Baseline Path */}
            <path id="sub7-heart-path" d="M 19.5,38.8 Q 24,40.8 28.5,38.8" />
            <clipPath id="sub7-atomic-clip">
              <path d="M24 7 C31 7 38 3 44 8 C46 16 43 27 38 36 C31 43 26 46 24 46 C22 46 17 43 10 36 C5 27 2 16 4 8 C10 3 17 7 24 7 Z" />
            </clipPath>
          </defs>

          {/* Atomic 1960s Harlequin Cartouche Outer Silhouette */}
          <path
            d="M24 7 C31 7 38 3 44 8 C46 16 43 27 38 36 C31 43 26 46 24 46 C22 46 17 43 10 36 C5 27 2 16 4 8 C10 3 17 7 24 7 Z"
            fill="url(#sub7-cartouche)"
            stroke="url(#sub7-gold)"
            strokeWidth="1.5"
          />

          {/* Winged Tip Rhinestone Ornaments */}
          <circle cx="4" cy="8" r="1.8" fill="#FFFFFF" stroke="url(#sub7-gold)" strokeWidth="0.8" />
          <circle cx="44" cy="8" r="1.8" fill="#FFFFFF" stroke="url(#sub7-gold)" strokeWidth="0.8" />
          <circle cx="24" cy="46" r="1.5" fill="url(#sub7-gold)" stroke="#831843" strokeWidth="0.6" />

          {/* Clipped Retro Field */}
          <g clipPath="url(#sub7-atomic-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub7-field)" />

            {/* Atomic Retro 4-Point Starbursts */}
            <path d="M12 14 L13.5 17 L16.5 17 L14 19 L15 22 L12 20 L9 22 L10 19 L7.5 17 L10.5 17 Z" fill="#F472B6" opacity="0.35" />
            <path d="M36 14 L37.5 17 L40.5 17 L38 19 L39 22 L36 20 L33 22 L34 19 L31.5 17 L34.5 17 Z" fill="#F472B6" opacity="0.35" />
            <polygon points="24,10 25,12 27,12.5 25,13 24,15 23,13 21,12.5 23,12" fill="#F59E0B" opacity="0.7" />

            {/* Lush Pink Flamingo Feather Plume Arching Behind Shades */}
            <path d="M18 4 C15 9 15 15 21 19 C25 14 24 8 18 4 Z" fill="#FB7185" />
            <path d="M18 4 C20 8 20 14 24 17 C27 13 25 7 18 4 Z" fill="#F43F5E" opacity="0.7" />
            <line x1="18.5" y1="4" x2="22" y2="18" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />

            {/* Iconic Hampden Retro Cat-Eye Sunglasses */}
            {/* Left Cat-Eye Wing Frame */}
            <path
              d="M7 21 C8 13 20 14 22 22 C22 28 14 30 9 26 C7 24 6 23 7 21 Z"
              fill="url(#sub7-frame)"
              stroke="#881337"
              strokeWidth="0.9"
            />
            {/* Left Polarized Mirrored Lens */}
            <path d="M9 21 C10 16 19 16 20 22 C20 26 15 28 11 25 Z" fill="url(#sub7-lens)" />
            <line x1="12" y1="18" x2="16" y2="25" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
            <line x1="14.5" y1="18" x2="17.5" y2="23" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />

            {/* Right Cat-Eye Wing Frame */}
            <path
              d="M41 21 C40 13 28 14 26 22 C26 28 34 30 39 26 C41 24 42 23 41 21 Z"
              fill="url(#sub7-frame)"
              stroke="#881337"
              strokeWidth="0.9"
            />
            {/* Right Polarized Mirrored Lens */}
            <path d="M39 21 C38 16 29 16 28 22 C28 26 33 28 37 25 Z" fill="url(#sub7-lens)" />
            <line x1="32" y1="18" x2="36" y2="25" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
            <line x1="33.5" y1="18" x2="30.5" y2="23" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />

            {/* Polished Gold Center Bridge */}
            <path d="M22 21 Q24 18.5 26 21" stroke="url(#sub7-gold)" strokeWidth="2.4" fill="none" strokeLinecap="round" />

            {/* Sparkling Crystal Rhinestone Studs at Brow Wingtips */}
            <circle cx="8" cy="17" r="1.8" fill="#FFFFFF" stroke="url(#sub7-gold)" strokeWidth="0.6" />
            <circle cx="40" cy="17" r="1.8" fill="#FFFFFF" stroke="url(#sub7-gold)" strokeWidth="0.6" />
            <circle cx="10.5" cy="19.5" r="1.1" fill="#FEF08A" stroke="#B45309" strokeWidth="0.4" />
            <circle cx="37.5" cy="19.5" r="1.1" fill="#FEF08A" stroke="#B45309" strokeWidth="0.4" />

            {/* Lower Gold Heart / "HON" Script Plaque */}
            <g transform="translate(0, 1)">
              <path
                d="M24 38 C21 34 18 36 18 38 C18 41 24 44 24 44 C24 44 30 41 30 38 C30 36 27 34 24 38 Z"
                fill="url(#sub7-gold)"
                stroke="#831843"
                strokeWidth="0.6"
              />
              <text fontSize="2.7" fontWeight="900" fill="#881337" fontFamily="cursive, sans-serif" letterSpacing="0.4">
                <textPath href="#sub7-heart-path" startOffset="50%" textAnchor="middle">
                  HON
                </textPath>
              </text>
            </g>
          </g>
        </svg>
      );
    }

    // Level 8: Inner Harbor Helmsman (Admiralty Heavy Naval Anchor Plaque)
    if (key.includes('subrank-8') || key.includes('harbor') || key.includes('helmsman') || key.includes('harbor-anchor') || key.includes('anchor')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub8-brass-frame" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="25%" stopColor="#FEF08A" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <radialGradient id="sub8-deep-sea" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#0369A1" />
              <stop offset="85%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#001845" />
            </radialGradient>
            <linearGradient id="sub8-rope" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <clipPath id="sub8-anchor-clip">
              <path d="M20 3 C20 1.5 28 1.5 28 3 L28 6 C31 6.5 35 8.5 35 11 L43 11 C45 11 45 15 43 15 L35 15 C34 19 31 23 28 25 L28 35 C33 35 38 31 40 26 L45 28 C42 37 34 43 27 44.5 L27 46.5 C27 47.5 21 47.5 21 46.5 L21 44.5 C14 43 6 37 3 28 L8 26 C10 31 15 35 20 35 L20 25 C17 23 14 19 13 15 L5 15 C3 15 3 11 5 11 L13 11 C13 8.5 17 6.5 20 6 Z" />
            </clipPath>
          </defs>

          {/* Heavy Admiralty Anchor Plaque Silhouette */}
          <path
            d="M20 3 C20 1.5 28 1.5 28 3 L28 6 C31 6.5 35 8.5 35 11 L43 11 C45 11 45 15 43 15 L35 15 C34 19 31 23 28 25 L28 35 C33 35 38 31 40 26 L45 28 C42 37 34 43 27 44.5 L27 46.5 C27 47.5 21 47.5 21 46.5 L21 44.5 C14 43 6 37 3 28 L8 26 C10 31 15 35 20 35 L20 25 C17 23 14 19 13 15 L5 15 C3 15 3 11 5 11 L13 11 C13 8.5 17 6.5 20 6 Z"
            fill="url(#sub8-brass-frame)"
            stroke="#451A03"
            strokeWidth="1.2"
          />

          {/* Clipped Deep Sea Field */}
          <g clipPath="url(#sub8-anchor-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub8-deep-sea)" />

            {/* Inner Harbor Helmsman Ships Wheel Centered Behind Anchor */}
            <g transform="translate(0, 4)">
              {/* Spoke Handles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={i}
                  x1={24 + 5 * Math.cos((i * 60 * Math.PI) / 180)}
                  y1={22 + 5 * Math.sin((i * 60 * Math.PI) / 180)}
                  x2={24 + 14 * Math.cos((i * 60 * Math.PI) / 180)}
                  y2={22 + 14 * Math.sin((i * 60 * Math.PI) / 180)}
                  stroke="#D97706"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="24" cy="22" r="10" stroke="url(#sub8-brass-frame)" strokeWidth="1.5" fill="none" opacity="0.8" />
              <circle cx="24" cy="22" r="3.2" fill="url(#sub8-brass-frame)" stroke="#451A03" strokeWidth="0.8" />
            </g>

            {/* Patapsco Harbor Rippling Waves in Lower Flukes */}
            <path d="M5 40 Q14 36 24 39 Q34 42 43 38 L43 46 L5 46 Z" fill="#0284C7" opacity="0.4" />
            <path d="M7 42 Q15 39 24 41 Q33 43 41 40 L41 46 L7 46 Z" fill="#38BDF8" opacity="0.3" />

            {/* Anchor Internal Raised Brass Spine & Stock Accent */}
            <rect x="22.5" y="10" width="3" height="26" rx="1.5" fill="url(#sub8-brass-frame)" stroke="#78350F" strokeWidth="0.6" />
            <rect x="8" y="12" width="32" height="2.2" rx="1" fill="url(#sub8-brass-frame)" stroke="#78350F" strokeWidth="0.5" />

            {/* Shackle Ring Inner Center Hole */}
            <circle cx="24" cy="4.2" r="1.8" fill="#001845" stroke="#78350F" strokeWidth="0.6" />

            {/* Helical Wrapped Manila Hemp Cord with Shackle Loop */}
            <path
              d="M21 5 Q27 8 24 12 Q19 16 26 20 Q20 24 25 28 Q21 32 26 36 Q32 38 38 31"
              stroke="url(#sub8-rope)"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M21 5 Q27 8 24 12 Q19 16 26 20 Q20 24 25 28 Q21 32 26 36 Q32 38 38 31"
              stroke="#B45309"
              strokeWidth="2"
              strokeDasharray="2 1.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* North Navigational Star atop Shackle */}
            <polygon points="24,1 24.8,2.8 26.5,3 25,4.2 25.5,6 24,5 22.5,6 23,4.2 21.5,3 23.2,2.8" fill="#FFFBEB" />
          </g>
        </svg>
      );
    }

    // Level 9: Fells Point Pathologist (Clipper Prow / Triangular Nautical Shield)
    if (key.includes('subrank-9') || key.includes('fells') || key.includes('fells-sailboat') || key.includes('pathologist')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub9-prow-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="80%" stopColor="#4338CA" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>
            <linearGradient id="sub9-twilight" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="30%" stopColor="#1E1B4B" />
              <stop offset="65%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="sub9-hull" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="60%" stopColor="#451A03" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="sub9-sail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <clipPath id="sub9-clipper-clip">
              <path d="M5 6 C12 5 36 5 43 6 L43 25 C43 35 34 43 24 46 C14 43 5 35 5 25 Z" />
            </clipPath>
          </defs>

          {/* Nautical Clipper Prow Escutcheon Outer Silhouette */}
          <path
            d="M5 6 C12 5 36 5 43 6 L43 25 C43 35 34 43 24 46 C14 43 5 35 5 25 Z"
            fill="url(#sub9-prow-rim)"
            stroke="#1E1B4B"
            strokeWidth="1.4"
          />

          {/* Clipped Maritime Field */}
          <g clipPath="url(#sub9-clipper-clip)">
            <rect x="0" y="0" width="48" height="48" fill="url(#sub9-twilight)" />

            {/* Radiant Polaris Star in Twilight Sky */}
            <polygon points="12,11 13,13.5 15.5,14 13,14.5 12,17 11,14.5 8.5,14 11,13.5" fill="#FEF08A" />
            <circle cx="12" cy="14" r="0.8" fill="#FFFFFF" />

            {/* Foaming Chesapeake Ocean Waves */}
            <path d="M4 35 Q13 32 22 35 Q31 38 44 34 L44 48 L4 48 Z" fill="#0284C7" />
            <path d="M4 38 Q13 35 23 38 Q33 41 44 37 L44 48 L4 48 Z" fill="#002D72" />
            {/* Whitecap Foam Specks */}
            <path d="M6 35 Q11 33 16 35" stroke="#E0F2FE" strokeWidth="0.8" strokeLinecap="round" fill="none" />
            <path d="M26 38 Q32 36 38 38" stroke="#E0F2FE" strokeWidth="0.8" strokeLinecap="round" fill="none" />

            {/* Fells Point Quayside Granite Cobblestones (Bottom Keel Area) */}
            <g opacity="0.75">
              <ellipse cx="20" cy="44" rx="2.5" ry="1.2" fill="#475569" stroke="#334155" strokeWidth="0.4" />
              <ellipse cx="25" cy="45" rx="2.8" ry="1.3" fill="#64748B" stroke="#334155" strokeWidth="0.4" />
              <ellipse cx="28" cy="43.5" rx="2.4" ry="1.1" fill="#475569" stroke="#334155" strokeWidth="0.4" />
              <ellipse cx="16" cy="45" rx="2.2" ry="1" fill="#334155" stroke="#1E293B" strokeWidth="0.4" />
            </g>

            {/* Historic Baltimore Clipper Schooner */}
            {/* Bowsprit Spar Jutting Forward */}
            <line x1="12" y1="31" x2="6" y2="28" stroke="#451A03" strokeWidth="1.4" strokeLinecap="round" />

            {/* Walnut & Mahogany Hull */}
            <path d="M9 32 L13 35 L35 35 L40 29 L11 29 Z" fill="url(#sub9-hull)" stroke="#1E293B" strokeWidth="1" />
            {/* Gilded Sheerline Stripe */}
            <path d="M11 30 L39 30" stroke="#F59E0B" strokeWidth="0.8" />

            {/* Main Mast & Fore Mast */}
            <line x1="21" y1="8" x2="21" y2="30" stroke="#451A03" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="32" y1="12" x2="32" y2="30" stroke="#451A03" strokeWidth="1.8" strokeLinecap="round" />

            {/* Standing & Running Rigging Shrouds */}
            <line x1="21" y1="10" x2="9" y2="29" stroke="#CBD5E1" strokeWidth="0.6" opacity="0.8" />
            <line x1="21" y1="10" x2="32" y2="12" stroke="#CBD5E1" strokeWidth="0.6" opacity="0.8" />
            <line x1="32" y1="14" x2="39" y2="29" stroke="#CBD5E1" strokeWidth="0.6" opacity="0.8" />
            <line x1="21" y1="14" x2="6" y2="28" stroke="#CBD5E1" strokeWidth="0.6" opacity="0.8" />

            {/* Billowing Main Canvas Sail */}
            <path d="M20 9 L9 26 L20 26 Z" fill="url(#sub9-sail)" stroke="#94A3B8" strokeWidth="0.8" />
            <line x1="14" y1="18" x2="20" y2="26" stroke="#94A3B8" strokeWidth="0.5" opacity="0.6" />

            {/* Billowing Fore Canvas Sail */}
            <path d="M22 11 L31 27 L22 27 Z" fill="url(#sub9-sail)" stroke="#94A3B8" strokeWidth="0.8" />

            {/* Jib Sail Forward */}
            <path d="M19 16 L8 28 L19 28 Z" fill="url(#sub9-sail)" opacity="0.85" stroke="#94A3B8" strokeWidth="0.6" />

            {/* Snapping Crimson Maritime Pennant */}
            <polygon points="21,8 15,6.5 21,5" fill="#DC2626" />
          </g>
        </svg>
      );
    }

    // Level 10: Old Bay Connoisseur (Iconic Yellow/Blue Old Bay Spice Canister & Seasoning Shower)
    if (key.includes('subrank-10') || key.includes('old bay') || key.includes('connoisseur') || key.includes('old-bay-crab')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub10-tin-metal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CA8A04" />
              <stop offset="15%" stopColor="#FACC15" />
              <stop offset="60%" stopColor="#FEF08A" />
              <stop offset="85%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>
            <linearGradient id="sub10-red-lid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="sub10-blue-band" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="40%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#001438" />
            </linearGradient>
            <linearGradient id="sub10-spoon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <radialGradient id="sub10-flavor-glow" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
            </radialGradient>
            {/* Curved Tin & Ribbon Text Baseline Paths */}
            <path id="sub10-tin-path" d="M 14,27.0 Q 24,25.8 34,27.0" />
            <path id="sub10-ribbon-path" d="M 9,42.8 Q 24,40.6 39,42.8" />
          </defs>

          {/* Ambient Flavor Glow */}
          <circle cx="24" cy="24" r="22" fill="url(#sub10-flavor-glow)" />

          {/* Crossed Gourmet Seasoning Spoons in Saltire Behind the Canister */}
          {/* Spoon 1: Top-Left to Bottom-Right */}
          <g>
            <line x1="6" y1="6" x2="42" y2="42" stroke="url(#sub10-spoon)" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="7" cy="7" rx="3.5" ry="4.5" transform="rotate(-45 7 7)" fill="url(#sub10-spoon)" stroke="#64748B" strokeWidth="0.6" />
            <ellipse cx="7" cy="7" rx="2" ry="2.8" transform="rotate(-45 7 7)" fill="#DC2626" />
            <circle cx="6.5" cy="6.5" r="0.8" fill="#FACC15" />
          </g>

          {/* Spoon 2: Top-Right to Bottom-Left */}
          <g>
            <line x1="42" y1="6" x2="6" y2="42" stroke="url(#sub10-spoon)" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="41" cy="7" rx="3.5" ry="4.5" transform="rotate(45 41 7)" fill="url(#sub10-spoon)" stroke="#64748B" strokeWidth="0.6" />
            <ellipse cx="41" cy="7" rx="2" ry="2.8" transform="rotate(45 41 7)" fill="#DC2626" />
            <circle cx="41.5" cy="6.5" r="0.8" fill="#FACC15" />
          </g>

          {/* The Iconic Rectangular Old Bay Spice Tin Container */}
          <rect x="12" y="8" width="24" height="31" rx="3.5" fill="url(#sub10-tin-metal)" stroke="#451A03" strokeWidth="1.2" />

          {/* Tin Header: Iconic Red Snap-Cap Shaker Lid */}
          <rect x="13.5" y="7" width="21" height="5" rx="2" fill="url(#sub10-red-lid)" stroke="#450A0A" strokeWidth="0.8" />
          {/* Perforated Spice Shaker Dispenser Holes */}
          <circle cx="17" cy="9.5" r="0.7" fill="#450A0A" />
          <circle cx="20.5" cy="9.5" r="0.7" fill="#450A0A" />
          <circle cx="24" cy="9.5" r="0.7" fill="#450A0A" />
          <circle cx="27.5" cy="9.5" r="0.7" fill="#450A0A" />
          <circle cx="31" cy="9.5" r="0.7" fill="#450A0A" />

          {/* Drifting Golden & Paprika Spice Flakes Falling in Flavor Shower */}
          <circle cx="16" cy="4" r="0.9" fill="#DC2626" />
          <circle cx="21" cy="3" r="0.7" fill="#F59E0B" />
          <circle cx="27" cy="4" r="0.8" fill="#DC2626" />
          <circle cx="32" cy="2.5" r="0.9" fill="#FBBF24" />
          <circle cx="9" cy="15" r="0.7" fill="#DC2626" />
          <circle cx="39" cy="15" r="0.8" fill="#F59E0B" />
          <circle cx="8" cy="23" r="0.8" fill="#DC2626" />
          <circle cx="40" cy="24" r="0.7" fill="#FBBF24" />

          {/* Can Face Label Art: Clean Iconic Tricolor Old Bay Branding */}
          <rect x="13" y="12" width="22" height="6.5" fill="#FACC15" />
          <line x1="16" y1="15.2" x2="32" y2="15.2" stroke="#002D72" strokeWidth="0.8" />
          <circle cx="24" cy="15.2" r="1.1" fill="#DC2626" />

          {/* Center Signature Navy Blue Diagonal Banner */}
          <polygon points="13,18.5 35,18.5 35,31 13,31" fill="url(#sub10-blue-band)" />
          <line x1="13" y1="18.5" x2="35" y2="18.5" stroke="#FACC15" strokeWidth="0.6" />
          <line x1="13" y1="31" x2="35" y2="31" stroke="#FACC15" strokeWidth="0.6" />

          {/* Bold Signature OLD BAY Brand Typography (Conforming to Cylindrical Tin) */}
          <text fontSize="4.2" fontWeight="900" fill="#FEF08A" fontFamily="sans-serif" letterSpacing="0.5">
            <textPath href="#sub10-tin-path" startOffset="50%" textAnchor="middle">
              OLD BAY
            </textPath>
          </text>

          {/* Bottom Crimson Red Field */}
          <rect x="13" y="31" width="22" height="6.5" fill="#DC2626" />
          <line x1="16" y1="34.2" x2="32" y2="34.2" stroke="#FEF08A" strokeWidth="0.8" />
          <circle cx="24" cy="34.2" r="1.1" fill="#FEF08A" />

          {/* Tin Metal Corner Rivets */}
          <circle cx="14.5" cy="14" r="0.6" fill="#A16207" />
          <circle cx="33.5" cy="14" r="0.6" fill="#A16207" />
          <circle cx="14.5" cy="36" r="0.6" fill="#A16207" />
          <circle cx="33.5" cy="36" r="0.6" fill="#A16207" />

          {/* Lower 3D Connoisseur Ribbon Banner */}
          <g>
            <path
              d="M7 39 L24 36.5 L41 39 L39 44.5 L24 42.5 L9 44.5 Z"
              fill="url(#sub10-tin-metal)"
              stroke="#451A03"
              strokeWidth="0.9"
            />
            <text
              fontSize="2.9"
              fontWeight="900"
              fill="#451A03"
              fontFamily="sans-serif"
              letterSpacing="0.3"
            >
              <textPath href="#sub10-ribbon-path" startOffset="50%" textAnchor="middle">
                CONNOISSEUR
              </textPath>
            </text>
          </g>
        </svg>
      );
    }

    // Level 11: Fort McHenry Defender (Authentic 1814 Star Fort Bastion, Bronze Siege Cannon & Star-Spangled Banner)
    if (key.includes('subrank-11') || key.includes('mchenry') || key.includes('fort') || key.includes('defender') || key.includes('fort-mchenry')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <linearGradient id="sub11-bastion-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="30%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <radialGradient id="sub11-dawn-sky" cx="50%" cy="25%" r="70%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="30%" stopColor="#FED7AA" />
              <stop offset="65%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#1E293B" />
            </radialGradient>
            <linearGradient id="sub11-brickwork" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="40%" stopColor="#991B1B" />
              <stop offset="85%" stopColor="#7F1D1D" />
              <stop offset="100%" stopColor="#450A0A" />
            </linearGradient>
            <linearGradient id="sub11-cannon-bronze" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
            <clipPath id="sub11-bastion-clip">
              <polygon points="24,2 31,14.5 45.5,14.5 34,24 38.5,38.5 24,30.5 9.5,38.5 14,24 2.5,14.5 17,14.5" />
            </clipPath>
            {/* Curved Fort McHenry Ribbon Baseline Path */}
            <path id="sub11-ribbon-path" d="M 11,41.0 Q 24,38.8 37,41.0" />
          </defs>

          {/* Authentic 5-Pointed Star Fort Bastion Outer Heavy Masonry Rim */}
          <polygon
            points="24,2 31,14.5 45.5,14.5 34,24 38.5,38.5 24,30.5 9.5,38.5 14,24 2.5,14.5 17,14.5"
            fill="url(#sub11-bastion-gold)"
            stroke="#451A03"
            strokeWidth="1.5"
          />

          {/* 5 Bastion Apex Heavy Brass Studs */}
          {[
            [24, 4], [43.5, 15.2], [37, 36.8], [11, 36.8], [4.5, 15.2]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.1" fill="#FEF08A" stroke="#78350F" strokeWidth="0.4" />
          ))}

          {/* Clipped Fortress & Sky Interior */}
          <g clipPath="url(#sub11-bastion-clip)">
            {/* "Dawn's Early Light" Sky over Patapsco River */}
            <rect x="0" y="0" width="48" height="48" fill="url(#sub11-dawn-sky)" />

            {/* Dawn Sunburst Light Beams */}
            {[-40, -20, 0, 20, 40].map((deg, i) => (
              <line
                key={i}
                x1="24"
                y1="12"
                x2={24 + 22 * Math.sin((deg * Math.PI) / 180)}
                y2={12 - 22 * Math.cos((deg * Math.PI) / 180)}
                stroke="#FEF08A"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.8"
              />
            ))}

            {/* "Rockets' Red Glare" & Bombs Bursting in Air */}
            <circle cx="12" cy="11" r="2" fill="#EF4444" opacity="0.8" />
            <polygon points="12,7 13.5,10 16,11 13.5,12 12,15 10.5,12 8,11 10.5,10" fill="#FEF08A" />
            <path d="M12 11 Q15 14 18 19" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="1.5 1.5" fill="none" opacity="0.8" />

            {/* Patapsco River Deep Harbor Water Basin */}
            <path d="M0 32 Q24 29 48 32 L48 48 L0 48 Z" fill="#0F172A" />
            <path d="M0 33 Q24 30 48 33" stroke="#38BDF8" strokeWidth="0.6" fill="none" opacity="0.4" />

            {/* The Earthen Grass Berms & Ramparts of Fort McHenry */}
            <path d="M6 35 L12 25 L36 25 L42 35 Z" fill="#14532D" stroke="#052E16" strokeWidth="0.8" />
            {/* Georgian Red Brick Battery Wall Embrasures */}
            <path
              d="M10 36 L14 26 L17 26 L17 29.5 L20 29.5 L20 26 L28 26 L28 29.5 L31 29.5 L31 26 L34 26 L38 36 Z"
              fill="url(#sub11-brickwork)"
              stroke="#450A0A"
              strokeWidth="0.8"
            />
            {/* Mortar Lines */}
            <line x1="14" y1="31" x2="34" y2="31" stroke="#FEF3C7" strokeWidth="0.6" strokeDasharray="3 1.5" opacity="0.5" />
            <line x1="12" y1="34" x2="36" y2="34" stroke="#FEF3C7" strokeWidth="0.6" strokeDasharray="3 1.5" opacity="0.5" />

            {/* Heavy Cast Bronze Naval Siege Cannon aiming out to sea */}
            <g transform="translate(14, 20)">
              <path d="M2 7 L12 4 L12 1 L2 3 Z" fill="url(#sub11-cannon-bronze)" stroke="#1E293B" strokeWidth="0.6" />
              <circle cx="6" cy="5" r="1.2" fill="#F59E0B" stroke="#78350F" strokeWidth="0.3" />
              <rect x="4" y="5" width="6" height="4" rx="1" fill="#78350F" stroke="#451A03" strokeWidth="0.5" />
              <circle cx="8" cy="8" r="2.8" fill="#334155" stroke="#0F172A" strokeWidth="0.6" />
              <circle cx="8" cy="8" r="1" fill="#94A3B8" />
              {/* Gunpowder Muzzle Smoke Billow */}
              <circle cx="1" cy="5" r="2.5" fill="#F8FAFC" opacity="0.75" />
              <circle cx="-1" cy="4" r="1.8" fill="#CBD5E1" opacity="0.6" />
              <polygon points="1,4.5 3,5 1,5.5" fill="#F59E0B" />
            </g>

            {/* The Great 1814 Star-Spangled Banner Flag atop Ramparts */}
            <line x1="26" y1="4" x2="26" y2="24" stroke="#78350F" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="26" cy="4" r="1" fill="#FEF08A" stroke="#78350F" strokeWidth="0.4" />
            <g>
              <rect x="26" y="5.5" width="14" height="8.5" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.4" />
              <line x1="26" y1="7.2" x2="40" y2="7.2" stroke="#FFFFFF" strokeWidth="1.1" />
              <line x1="26" y1="9.8" x2="40" y2="9.8" stroke="#FFFFFF" strokeWidth="1.1" />
              <line x1="26" y1="12.4" x2="40" y2="12.4" stroke="#FFFFFF" strokeWidth="1.1" />
              <rect x="26" y="5.5" width="6.5" height="5" fill="#002D72" />
              <circle cx="28" cy="7" r="0.6" fill="#FFFFFF" />
              <circle cx="30" cy="7" r="0.6" fill="#FFFFFF" />
              <circle cx="28" cy="9" r="0.6" fill="#FFFFFF" />
              <circle cx="30" cy="9" r="0.6" fill="#FFFFFF" />
              <circle cx="31.5" cy="8" r="0.6" fill="#FFFFFF" />
            </g>
          </g>

          {/* Lower Patriotic Defender Ribbon Banner: DEFENDER • 1814 */}
          <g>
            <path
              d="M9 37 L24 34.5 L39 37 L37 42.5 L24 40.5 L11 42.5 Z"
              fill="url(#sub11-bastion-gold)"
              stroke="#451A03"
              strokeWidth="0.8"
            />
            <text
              fontSize="3.6"
              fontWeight="900"
              fill="#451A03"
              fontFamily="sans-serif"
              letterSpacing="1.0"
            >
              <textPath href="#sub11-ribbon-path" startOffset="50%" textAnchor="middle">
                1814
              </textPath>
            </text>
          </g>
        </svg>
      );
    }

    // Level 12: Crab Feast Champion (Round Bushel Barrel Lid, Crossed Wooden Mallets & Steamed Jumbo Blue Crab)
    if (key.includes('subrank-12') || key.includes('feast') || key.includes('mallet') || key.includes('champion') || key.includes('crab-mallet')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub12-barrel-wood" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="35%" stopColor="#FDE68A" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </radialGradient>
            <linearGradient id="sub12-iron-hoop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="sub12-mallet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="sub12-steamed-shell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F87171" />
              <stop offset="40%" stopColor="#EF4444" />
              <stop offset="75%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="sub12-blue-claw" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <clipPath id="sub12-lid-clip">
              <circle cx="24" cy="24" r="21" />
            </clipPath>
            {/* Curved Crab Feast Ribbon Baseline Path */}
            <path id="sub12-ribbon-path" d="M 9,42.0 Q 24,39.7 39,42.0" />
          </defs>

          {/* Crossed Wooden Mallets Protruding Diagonally in Saltire */}
          {/* Mallet 1: Top-Left to Bottom-Right */}
          <g transform="rotate(-38 24 24)">
            <rect x="22" y="2" width="4" height="44" rx="2" fill="url(#sub12-mallet)" stroke="#451A03" strokeWidth="0.8" />
            <rect x="13.5" y="3" width="21" height="9.5" rx="2.5" fill="url(#sub12-mallet)" stroke="#451A03" strokeWidth="1" />
            <line x1="16" y1="7.8" x2="32" y2="7.8" stroke="#78350F" strokeWidth="0.8" />
          </g>

          {/* Mallet 2: Top-Right to Bottom-Left */}
          <g transform="rotate(38 24 24)">
            <rect x="22" y="2" width="4" height="44" rx="2" fill="url(#sub12-mallet)" stroke="#451A03" strokeWidth="0.8" />
            <rect x="13.5" y="3" width="21" height="9.5" rx="2.5" fill="url(#sub12-mallet)" stroke="#451A03" strokeWidth="1" />
            <line x1="16" y1="7.8" x2="32" y2="7.8" stroke="#78350F" strokeWidth="0.8" />
          </g>

          {/* Round Wooden Bushel Basket Barrel Lid Outer Plaque */}
          <circle cx="24" cy="24" r="21.5" fill="url(#sub12-iron-hoop)" stroke="#0F172A" strokeWidth="1.2" />
          <circle cx="24" cy="24" r="20" fill="url(#sub12-barrel-wood)" stroke="#78350F" strokeWidth="0.8" />

          {/* 8 Outer Iron Strap Rivets */}
          {Array.from({ length: 8 }).map((_, i) => {
            const rad = (i * 45 * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={24 + 20.8 * Math.cos(rad)}
                cy={24 + 20.8 * Math.sin(rad)}
                r="0.8"
                fill="#CBD5E1"
                stroke="#0F172A"
                strokeWidth="0.3"
              />
            );
          })}

          {/* Clipped Bushel Lid Planks */}
          <g clipPath="url(#sub12-lid-clip)">
            {/* Wood Plank Grooves */}
            <line x1="14" y1="4" x2="14" y2="44" stroke="#78350F" strokeWidth="0.8" opacity="0.4" />
            <line x1="24" y1="3" x2="24" y2="45" stroke="#78350F" strokeWidth="0.8" opacity="0.4" />
            <line x1="34" y1="4" x2="34" y2="44" stroke="#78350F" strokeWidth="0.8" opacity="0.4" />

            {/* Steamed Jumbo Blue Crab (Cooked Fiery Coral-Red with Blue Claw Stems) */}
            <ellipse cx="12" cy="31" rx="3" ry="1.6" transform="rotate(-35 12 31)" fill="url(#sub12-blue-claw)" stroke="#0284C7" strokeWidth="0.4" />
            <ellipse cx="36" cy="31" rx="3" ry="1.6" transform="rotate(35 36 31)" fill="url(#sub12-blue-claw)" stroke="#0284C7" strokeWidth="0.4" />

            {/* Walking Legs on Sides */}
            <path d="M14 23 L7 24 M15 26 L9 29 M16 29 L12 33" stroke="url(#sub12-steamed-shell)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M34 23 L41 24 M33 26 L39 29 M32 29 L36 33" stroke="url(#sub12-steamed-shell)" strokeWidth="1.8" strokeLinecap="round" />

            {/* Broad Cooked Carapace Shell */}
            <ellipse cx="24" cy="25" rx="11" ry="7.5" fill="url(#sub12-steamed-shell)" stroke="#7F1D1D" strokeWidth="0.9" />
            {/* Pointed Lateral Spines */}
            <polygon points="13,25 7,24 14,23" fill="#DC2626" />
            <polygon points="35,25 41,24 34,23" fill="#DC2626" />

            {/* Crab Front Pincer Arms */}
            <path d="M18 22 Q12 18 10 13" stroke="url(#sub12-steamed-shell)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M30 22 Q36 18 38 13" stroke="url(#sub12-steamed-shell)" strokeWidth="2.8" strokeLinecap="round" fill="none" />

            {/* Brilliant Blue & Scarlet Pincer Claws */}
            <path d="M10 13 C7 10 8 7 11 8 C13 10 12 12 10 13 Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.4" />
            <path d="M10 13 C7 15 8 18 11 17 C12 15 11 13 10 13 Z" fill="url(#sub12-blue-claw)" />
            <path d="M38 13 C41 10 40 7 37 8 C35 10 36 12 38 13 Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.4" />
            <path d="M38 13 C41 15 40 18 37 17 C36 15 37 13 38 13 Z" fill="url(#sub12-blue-claw)" />

            {/* Steamed Crab Eyes */}
            <circle cx="21.5" cy="18.5" r="1.3" fill="#0F172A" />
            <circle cx="21.3" cy="18.2" r="0.4" fill="#FFFFFF" />
            <circle cx="26.5" cy="18.5" r="1.3" fill="#0F172A" />
            <circle cx="26.3" cy="18.2" r="0.4" fill="#FFFFFF" />

            {/* Fresh Cut Lemon Wedge on Side */}
            <path d="M31 16 C35 18 37 22 35 25 L29 22 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="0.5" />
            <path d="M31 17 C34 19 35.5 22 34 24 L30 22 Z" fill="#FEF08A" />

            {/* Coarse Sea Salt & Cracked Seasoning Specks */}
            <circle cx="20" cy="23" r="0.7" fill="#FFFFFF" />
            <circle cx="28" cy="24" r="0.7" fill="#FFFFFF" />
            <circle cx="24" cy="27" r="0.8" fill="#FEF08A" />
            <circle cx="17" cy="26" r="0.6" fill="#F59E0B" />
            <circle cx="31" cy="27" r="0.6" fill="#F59E0B" />
          </g>

          {/* Lower Champion Ribbon Scroll: CRAB FEAST • CHAMPION */}
          <g>
            <path
              d="M7 38 L24 35.5 L41 38 L39 43.5 L24 41.5 L9 43.5 Z"
              fill="url(#sub12-mallet)"
              stroke="#451A03"
              strokeWidth="0.9"
            />
            <text
              fontSize="3.1"
              fontWeight="900"
              fill="#451A03"
              fontFamily="sans-serif"
              letterSpacing="0.6"
            >
              <textPath href="#sub12-ribbon-path" startOffset="50%" textAnchor="middle">
                CHAMPION
              </textPath>
            </text>
          </g>
        </svg>
      );
    }

    // Level 13: Poe's Raven Disciple (Pointed Gothic Cathedral Arch, Full Moon Halo & Spread-Wing Raven on Marble Pallas Bust)
    if (key.includes('subrank-13') || key.includes('poe') || key.includes('raven') || key.includes('disciple') || key.includes('poe-raven')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            {/* Gothic Night Sky Gradient */}
            <linearGradient id="sub13-gothic-sky" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#090514" />
              <stop offset="40%" stopColor="#120D24" />
              <stop offset="80%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            {/* Full Moon Glow */}
            <radialGradient id="sub13-moon-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#EDE9FE" />
              <stop offset="80%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
            </radialGradient>
            {/* Carved Gothic Stone Rim */}
            <linearGradient id="sub13-stone-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="30%" stopColor="#475569" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            {/* Iridescent Obsidian Raven Feathers */}
            <linearGradient id="sub13-raven-plumage" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312E81" />
              <stop offset="35%" stopColor="#1E1B4B" />
              <stop offset="70%" stopColor="#0B0F19" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            {/* Carved Marble Bust */}
            <linearGradient id="sub13-marble" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            {/* Aged Parchment Scroll */}
            <linearGradient id="sub13-parchment" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="50%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
            {/* Golden Beak / Claw */}
            <linearGradient id="sub13-gold-acc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            {/* Gothic Arch Clip Path */}
            <clipPath id="sub13-arch-clip">
              <path d="M8 44 L8 19 C8 10 16 3 24 3 C32 3 40 10 40 19 L40 44 Z" />
            </clipPath>
            {/* Curved Parchment Scroll Baseline Path */}
            <path id="sub13-scroll-path" d="M 10,42.6 Q 24,40.8 38,42.6" />
          </defs>

          {/* Gothic Cathedral Mausoleum Stele / Pointed Arch Outer Frame */}
          {/* Shadow / Base */}
          <path
            d="M6 45 L6 19 C6 8 15 1 24 1 C33 1 42 8 42 19 L42 45 Z"
            fill="#0F172A"
          />
          {/* Stone Bevel Outer Border */}
          <path
            d="M7 44.5 L7 19 C7 9 15.5 2 24 2 C32.5 2 41 9 41 19 L41 44.5 Z"
            fill="url(#sub13-stone-border)"
            stroke="#1E293B"
            strokeWidth="0.8"
          />
          {/* Inner Inset Arch Border */}
          <path
            d="M8.5 43.5 L8.5 19 C8.5 10.5 16 3.5 24 3.5 C32 3.5 39.5 10.5 39.5 19 L39.5 43.5 Z"
            fill="#000000"
          />

          {/* Clipped Gothic Interior Window */}
          <g clipPath="url(#sub13-arch-clip)">
            {/* Midnight Sky */}
            <rect x="6" y="1" width="36" height="44" fill="url(#sub13-gothic-sky)" />

            {/* Gothic Pointed Trefoil Tracery at Apex */}
            <path
              d="M14 18 C14 12 18 8 24 8 C30 8 34 12 34 18"
              stroke="#475569"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <circle cx="24" cy="7.5" r="2.2" stroke="#64748B" strokeWidth="0.7" fill="none" opacity="0.6" />
            <circle cx="19" cy="11.5" r="1.4" stroke="#64748B" strokeWidth="0.6" fill="none" opacity="0.5" />
            <circle cx="29" cy="11.5" r="1.4" stroke="#64748B" strokeWidth="0.6" fill="none" opacity="0.5" />

            {/* Radiant Full Moon Halo */}
            <circle cx="24" cy="17" r="13" fill="url(#sub13-moon-glow)" opacity="0.4" />
            <circle cx="24" cy="17" r="9" fill="#FFFFFF" opacity="0.9" />
            {/* Moon craters / textures */}
            <ellipse cx="22" cy="14" rx="2.5" ry="1.8" fill="#E2E8F0" opacity="0.7" />
            <circle cx="27" cy="18" r="1.5" fill="#E2E8F0" opacity="0.6" />
            <circle cx="21" cy="20" r="1.2" fill="#E2E8F0" opacity="0.6" />

            {/* Night Fog / Mist Streaks Across Moon */}
            <path d="M12 15 Q20 13 28 16 Q36 19 40 17" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
            <path d="M8 21 Q18 19 28 22 Q38 25 42 22" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

            {/* Classical Carved Marble Bust of Pallas Athena Pedestal */}
            {/* Pedestal Base */}
            <rect x="15" y="34" width="18" height="4" rx="1" fill="url(#sub13-marble)" stroke="#334155" strokeWidth="0.6" />
            <line x1="16" y1="36" x2="32" y2="36" stroke="#94A3B8" strokeWidth="0.5" />
            {/* Bust Shoulders & Robe */}
            <path d="M16 34 C16 30 20 28 24 28 C28 28 32 30 32 34 Z" fill="url(#sub13-marble)" stroke="#475569" strokeWidth="0.6" />
            {/* Draped folds */}
            <path d="M21 29 Q24 33 27 29" stroke="#94A3B8" strokeWidth="0.7" fill="none" />
            <path d="M19 32 Q24 36 29 32" stroke="#94A3B8" strokeWidth="0.7" fill="none" />

            {/* The Imposing Spread-Winged Obsidian Raven Perched atop Pallas */}
            {/* Raven Perched Talons */}
            <ellipse cx="21.5" cy="28.5" rx="1.5" ry="1" fill="url(#sub13-gold-acc)" />
            <ellipse cx="26.5" cy="28.5" rx="1.5" ry="1" fill="url(#sub13-gold-acc)" />

            {/* Left Outstretched Wing with Layered Feather Tufts */}
            <path
              d="M20 24 C14 20 10 14 9 10 C9 12 11 16 13 20 C10 17 9 21 12 24 C10 23 11 26 14 27 C16 28 19 27 20 25 Z"
              fill="url(#sub13-raven-plumage)"
              stroke="#020617"
              strokeWidth="0.7"
            />
            {/* Left Wing Primary Feather Highlights */}
            <path d="M11 14 C12 17 14 21 18 24" stroke="#6366F1" strokeWidth="0.6" fill="none" opacity="0.7" />
            <path d="M13 18 C14 21 16 23 19 25" stroke="#818CF8" strokeWidth="0.5" fill="none" opacity="0.6" />

            {/* Right Outstretched Wing with Layered Feather Tufts */}
            <path
              d="M28 24 C34 20 38 14 39 10 C39 12 37 16 35 20 C38 17 39 21 36 24 C38 23 37 26 34 27 C32 28 29 27 28 25 Z"
              fill="url(#sub13-raven-plumage)"
              stroke="#020617"
              strokeWidth="0.7"
            />
            {/* Right Wing Primary Feather Highlights */}
            <path d="M37 14 C36 17 34 21 30 24" stroke="#6366F1" strokeWidth="0.6" fill="none" opacity="0.7" />
            <path d="M35 18 C34 21 32 23 29 25" stroke="#818CF8" strokeWidth="0.5" fill="none" opacity="0.6" />

            {/* Raven Torso and Throat Hackles */}
            <ellipse cx="24" cy="23" rx="5" ry="6.5" fill="url(#sub13-raven-plumage)" />
            {/* Layered Ruffled Neck Feathers */}
            <path d="M22 18 L23 22 L24 18 L25 22 L26 18" stroke="#4338CA" strokeWidth="0.6" fill="none" />

            {/* Raven Head with Raised Crown Hackles */}
            <circle cx="24" cy="16.5" r="4.5" fill="url(#sub13-raven-plumage)" />
            <path d="M22 13 Q24 10.5 25 12 Q24 14 23 15 Z" fill="#312E81" />

            {/* Wicked Sharp Beak */}
            <polygon points="25.5,15 32,16.5 25.5,18.5" fill="url(#sub13-gold-acc)" stroke="#B45309" strokeWidth="0.5" />
            <line x1="25.5" y1="16.5" x2="31" y2="16.5" stroke="#78350F" strokeWidth="0.5" />

            {/* Piercing Amber Eye with Glint */}
            <circle cx="23.5" cy="15.8" r="1.5" fill="#F59E0B" />
            <circle cx="23.5" cy="15.8" r="0.8" fill="#020617" />
            <circle cx="23.1" cy="15.4" r="0.35" fill="#FFFFFF" />

            {/* Antique Feather Quill Writing Pen Crossing Foreground */}
            <g transform="rotate(-30 18 36)">
              {/* Purple/Violet Raven Feather Vane */}
              <path d="M12 28 C15 22 20 18 24 15 C21 21 18 26 15 31 Z" fill="#8B5CF6" stroke="#581C87" strokeWidth="0.5" />
              <path d="M15 31 C18 26 21 21 24 15 C22 22 20 27 17 33 Z" fill="#6D28D9" />
              {/* Quill Shaft / Shaft Spine */}
              <line x1="12" y1="36" x2="25" y2="14" stroke="#EDE9FE" strokeWidth="0.7" />
              {/* Brass Nib */}
              <polygon points="12,36 10.5,39 13,38" fill="url(#sub13-gold-acc)" stroke="#78350F" strokeWidth="0.4" />
              {/* Crimson Ink Droplet */}
              <circle cx="10" cy="40.5" r="0.9" fill="#DC2626" />
              <path d="M10 39.5 L10.5 40.5 L9.5 40.5 Z" fill="#DC2626" />
            </g>
          </g>

          {/* Aged Gothic "NEVERMORE" Banner draped across base */}
          <g>
            {/* Banner Fold Drop Shadows */}
            <polygon points="10,38 12,41 10,43" fill="#78350F" />
            <polygon points="38,38 36,41 38,43" fill="#78350F" />
            {/* Main Center Parchment Banner */}
            <path
              d="M9 39 L24 37 L39 39 L37 44 L24 42.5 L11 44 Z"
              fill="url(#sub13-parchment)"
              stroke="#B45309"
              strokeWidth="0.8"
            />
            {/* Banner Gold Piping */}
            <path d="M11 40 L24 38.5 L37 40" stroke="#F59E0B" strokeWidth="0.5" fill="none" />
            {/* "NEVERMORE" Typography (Conforming to Curved Parchment Scroll) */}
            <text
              fontSize="3.0"
              fontWeight="900"
              fill="#451A03"
              fontFamily="serif"
              letterSpacing="0.4"
            >
              <textPath href="#sub13-scroll-path" startOffset="50%" textAnchor="middle">
                NEVERMORE
              </textPath>
            </text>
          </g>

          {/* Gothic Wrought-Iron Arch Corner Rosettes */}
          <circle cx="8" cy="44" r="1.5" fill="#475569" stroke="#1E293B" strokeWidth="0.5" />
          <circle cx="40" cy="44" r="1.5" fill="#475569" stroke="#1E293B" strokeWidth="0.5" />
          <circle cx="24" cy="2.5" r="1.5" fill="url(#sub13-gold-acc)" stroke="#78350F" strokeWidth="0.5" />
        </svg>
      );
    }

    // Level 14: Charm City Legend (Baroque Shield Cartouche, Crossed Golden Keys to the City & Imperial Sovereign Crown)
    if (key.includes('subrank-14') || key.includes('legend') || key.includes('crown') || key.includes('charm-crown')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            {/* 24K Royal Gold Gradient */}
            <linearGradient id="sub14-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="25%" stopColor="#FEF08A" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            {/* Brilliant Gold Highlight */}
            <linearGradient id="sub14-gold-bright" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            {/* Imperial Crimson Velvet Damask */}
            <radialGradient id="sub14-velvet-damask" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="45%" stopColor="#B91C1C" />
              <stop offset="80%" stopColor="#7F1D1D" />
              <stop offset="100%" stopColor="#450A0A" />
            </radialGradient>
            {/* Hopkins Sapphire Jewel */}
            <radialGradient id="sub14-sapphire" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="35%" stopColor="#2563EB" />
              <stop offset="80%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#002D72" />
            </radialGradient>
            {/* Maryland Ruby Jewel */}
            <radialGradient id="sub14-ruby" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FCA5A5" />
              <stop offset="40%" stopColor="#EF4444" />
              <stop offset="85%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#500724" />
            </radialGradient>
            {/* Cartouche Shield Clip Path */}
            <clipPath id="sub14-cartouche-clip">
              <path d="M24 3 C36 3 43 8 43 21 C43 33 34 41 24 45.5 C14 41 5 33 5 21 C5 8 12 3 24 3 Z" />
            </clipPath>
            {/* Curved Baroque Cartouche Ribbon Baseline Path */}
            <path id="sub14-ribbon-path" d="M 9,42.0 Q 24,39.8 39,42.0" />
          </defs>

          {/* Baroque Cartouche Shield Outer Frame */}
          {/* Drop Shadow Base */}
          <path
            d="M24 2 C38 2 46 7.5 46 21 C46 34.5 36 43 24 47.5 C12 43 2 34.5 2 21 C2 7.5 10 2 24 2 Z"
            fill="#450A0A"
          />
          {/* Heavy 24K Sculpted Gold Cartouche Rim with Acanthus Flanges */}
          <path
            d="M24 2 C37.5 2 45 7.5 45 21 C45 34 35 42 24 46.5 C13 42 3 34 3 21 C3 7.5 10.5 2 24 2 Z"
            fill="url(#sub14-gold)"
            stroke="#78350F"
            strokeWidth="1.2"
          />
          {/* Rococo Acanthus Side Scallops & Scrollwork */}
          <path d="M4 14 C1 18 1 24 4 28 C6 25 6 17 4 14 Z" fill="url(#sub14-gold-bright)" stroke="#78350F" strokeWidth="0.6" />
          <path d="M44 14 C47 18 47 24 44 28 C42 25 42 17 44 14 Z" fill="url(#sub14-gold-bright)" stroke="#78350F" strokeWidth="0.6" />

          {/* Inner Inset Rim */}
          <path
            d="M24 4 C35 4 42 9 42 21 C42 32 33 40 24 44.5 C15 40 6 32 6 21 C6 9 13 4 24 4 Z"
            fill="#78350F"
          />

          {/* Clipped Velvet Field */}
          <g clipPath="url(#sub14-cartouche-clip)">
            {/* Deep Royal Crimson Velvet Ground */}
            <rect x="2" y="2" width="44" height="46" fill="url(#sub14-velvet-damask)" />

            {/* Subtle Damask Diamond Quilting Lines */}
            <path
              d="M12 12 L24 24 L36 12 M12 24 L24 36 L36 24 M24 12 L36 24 M12 24 L24 12"
              stroke="#FEF2F2"
              strokeWidth="0.6"
              strokeDasharray="1.5 2"
              opacity="0.15"
            />

            {/* Radiant Golden Sunburst Beams Emanating Behind Crown */}
            {[-45, -30, -15, 0, 15, 30, 45].map((deg, i) => (
              <line
                key={i}
                x1="24"
                y1="16"
                x2={24 + 20 * Math.sin((deg * Math.PI) / 180)}
                y2={16 - 20 * Math.cos((deg * Math.PI) / 180)}
                stroke="#FEF08A"
                strokeWidth="0.8"
                opacity="0.35"
              />
            ))}

            {/* Crossed 24K Golden Keys to the City of Baltimore in Saltire */}
            {/* Key 1: Top-Left to Bottom-Right */}
            <g>
              <line x1="12" y1="12" x2="36" y2="36" stroke="url(#sub14-gold)" strokeWidth="1.8" strokeLinecap="round" />
              {/* Ornate Trefoil Openwork Bow */}
              <circle cx="12" cy="12" r="3.2" fill="none" stroke="url(#sub14-gold)" strokeWidth="1.2" />
              <circle cx="12" cy="12" r="1.3" fill="none" stroke="url(#sub14-gold)" strokeWidth="0.6" />
              {/* Notched Bit/Ward */}
              <path d="M34 34 L38 38 L37 39 L35 37 L34 38 L33 37" stroke="url(#sub14-gold)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </g>

            {/* Key 2: Top-Right to Bottom-Left */}
            <g>
              <line x1="36" y1="12" x2="12" y2="36" stroke="url(#sub14-gold)" strokeWidth="1.8" strokeLinecap="round" />
              {/* Ornate Trefoil Openwork Bow */}
              <circle cx="36" cy="12" r="3.2" fill="none" stroke="url(#sub14-gold)" strokeWidth="1.2" />
              <circle cx="36" cy="12" r="1.3" fill="none" stroke="url(#sub14-gold)" strokeWidth="0.6" />
              {/* Notched Bit/Ward */}
              <path d="M14 34 L10 38 L11 39 L13 37 L14 38 L15 37" stroke="url(#sub14-gold)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </g>

            {/* Flanking Golden Victory Laurel Boughs Framing Crown */}
            <path d="M12 18 C11 25 15 31 20 34" stroke="#D97706" strokeWidth="1" fill="none" />
            <ellipse cx="12" cy="20" rx="1.5" ry="2.6" transform="rotate(-35 12 20)" fill="url(#sub14-gold)" />
            <ellipse cx="12.5" cy="25" rx="1.5" ry="2.6" transform="rotate(-15 12.5 25)" fill="url(#sub14-gold)" />
            <ellipse cx="15" cy="30" rx="1.5" ry="2.6" transform="rotate(20 15 30)" fill="url(#sub14-gold)" />
            <circle cx="14" cy="23" r="0.9" fill="#DC2626" />
            <circle cx="16" cy="28" r="0.9" fill="#DC2626" />

            <path d="M36 18 C37 25 33 31 28 34" stroke="#D97706" strokeWidth="1" fill="none" />
            <ellipse cx="36" cy="20" rx="1.5" ry="2.6" transform="rotate(35 36 20)" fill="url(#sub14-gold)" />
            <ellipse cx="35.5" cy="25" rx="1.5" ry="2.6" transform="rotate(15 35.5 25)" fill="url(#sub14-gold)" />
            <ellipse cx="33" cy="30" rx="1.5" ry="2.6" transform="rotate(-20 33 30)" fill="url(#sub14-gold)" />
            <circle cx="34" cy="23" r="0.9" fill="#DC2626" />
            <circle cx="32" cy="28" r="0.9" fill="#DC2626" />

            {/* The Grand 3D Imperial Sovereign Crown */}
            <g>
              {/* Inner Crimson Velvet Cap rising in the crown interior */}
              <path
                d="M14 26 C14 16 34 16 34 26 Z"
                fill="url(#sub14-velvet-damask)"
                stroke="#78350F"
                strokeWidth="0.6"
              />
              {/* Crown Cap Velvet Highlight */}
              <ellipse cx="24" cy="20" rx="6" ry="4" fill="#EF4444" opacity="0.3" />

              {/* Imperial Globus Cruciger (Orb and Cross) Atop Crown */}
              <circle cx="24" cy="11.5" r="1.6" fill="url(#sub14-gold)" stroke="#78350F" strokeWidth="0.5" />
              <line x1="24" y1="8.5" x2="24" y2="11" stroke="url(#sub14-gold)" strokeWidth="1" strokeLinecap="round" />
              <line x1="22.5" y1="9.5" x2="25.5" y2="9.5" stroke="url(#sub14-gold)" strokeWidth="1" strokeLinecap="round" />

              {/* Chiseled 24K Gold 5-Peak Imperial Crown Framework */}
              <path
                d="M12 26 L11 18 L16 23 L18 14 L21 21 L24 13 L27 21 L30 14 L32 23 L37 18 L36 26 Z"
                fill="url(#sub14-gold)"
                stroke="#78350F"
                strokeWidth="0.9"
              />

              {/* Crown Jewels on 5 Peaks */}
              {/* Center Cross Pattée Jewel */}
              <circle cx="24" cy="13" r="2.2" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="23.3" cy="12.3" r="0.6" fill="#FFFFFF" />

              {/* Mid Peaks: Fleur-de-lis Sapphires */}
              <circle cx="18" cy="14.5" r="1.8" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="17.5" cy="14" r="0.5" fill="#FFFFFF" />
              <circle cx="30" cy="14.5" r="1.8" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="29.5" cy="14" r="0.5" fill="#FFFFFF" />

              {/* Outer Finial Pearls */}
              <circle cx="11" cy="18" r="1.5" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />
              <circle cx="37" cy="18" r="1.5" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />

              {/* Golden Crown Diadem Base Band */}
              <rect x="11" y="25" width="26" height="5" rx="1.5" fill="url(#sub14-gold)" stroke="#78350F" strokeWidth="0.8" />

              {/* Alternating Oval Sapphires & Rubies on Diadem Band */}
              <ellipse cx="14" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="19" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="24" cy="27.5" rx="1.8" ry="1.4" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="29" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="34" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.4" />

              {/* Ermine Fur Trim Band Beneath Gold Diadem */}
              <rect x="11.5" y="29.8" width="25" height="3" rx="1" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.5" />
              {/* Black Ermine Tufts */}
              <polygon points="14.5,30.5 15.5,30.5 15,32" fill="#002D72" />
              <polygon points="19.5,30.5 20.5,30.5 20,32" fill="#002D72" />
              <polygon points="24,30.5 25,30.5 24.5,32" fill="#002D72" />
              <polygon points="28.5,30.5 29.5,30.5 29,32" fill="#002D72" />
              <polygon points="33.5,30.5 34.5,30.5 34,32" fill="#002D72" />
            </g>
          </g>

          {/* Lower 3D Folded Ribbon Banner: CHARM CITY • LEGEND */}
          <g>
            {/* Swallowtail Ribbon Ends */}
            <path d="M7 40 L4 37 L7 34 L10 38 Z" fill="#78350F" stroke="url(#sub14-gold)" strokeWidth="0.6" />
            <path d="M41 40 L44 37 L41 34 L38 38 Z" fill="#78350F" stroke="url(#sub14-gold)" strokeWidth="0.6" />
            {/* Ribbon Underside Folds */}
            <polygon points="9,38 12,38 10,41" fill="#451A03" />
            <polygon points="39,38 36,38 38,41" fill="#451A03" />

            {/* Main Center Banner Front */}
            <path
              d="M8 38 L24 35.5 L40 38 L38 43.5 L24 41.5 L10 43.5 Z"
              fill="url(#sub14-gold)"
              stroke="#78350F"
              strokeWidth="0.9"
            />
            {/* Inner Gold Inset Line */}
            <path d="M10 39 L24 37 L38 39" stroke="#FFFBEB" strokeWidth="0.5" fill="none" />

            {/* Embossed Typography (Conforming to Curved Ribbon) */}
            <text
              fontSize="3.4"
              fontWeight="900"
              fill="#451A03"
              fontFamily="sans-serif"
              letterSpacing="0.8"
            >
              <textPath href="#sub14-ribbon-path" startOffset="50%" textAnchor="middle">
                LEGEND
              </textPath>
            </text>
          </g>

          {/* Faceted Hopkins Sapphire Drop Jewel Pendant at Cartouche Tip */}
          <polygon points="24,44.5 26.5,46.5 24,48 21.5,46.5" fill="url(#sub14-sapphire)" stroke="url(#sub14-gold)" strokeWidth="0.6" />
          <polygon points="24,45 25.5,46.5 24,47.5 22.5,46.5" fill="#93C5FD" opacity="0.6" />
        </svg>
      );
    }

    // Level 15: Grand Blue Jay Laureate (16-Point Maltese Celestial Order Star, Purple Watered-Silk Sash & Soaring Blue Jay with Blazing Veritas Torch)
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <defs>
          {/* Royal Amethyst Watered-Silk Sash Gradient */}
          <linearGradient id="sub15-silk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E22CE" />
            <stop offset="35%" stopColor="#581C87" />
            <stop offset="70%" stopColor="#3B0764" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          {/* 24K Mirror Gold Gradient */}
          <linearGradient id="sub15-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="25%" stopColor="#FEF08A" />
            <stop offset="55%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          {/* Chiseled Facet Light Gold */}
          <linearGradient id="sub15-facet-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          {/* Chiseled Facet Dark Gold */}
          <linearGradient id="sub15-facet-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="60%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          {/* Johns Hopkins Midnight Navy Enamel */}
          <radialGradient id="sub15-navy-enamel" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#003D99" />
            <stop offset="60%" stopColor="#002D72" />
            <stop offset="100%" stopColor="#001438" />
          </radialGradient>
          {/* Blazing Torch Flame */}
          <linearGradient id="sub15-torch-flame" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          {/* Jay Cobalt Body */}
          <linearGradient id="sub15-jay-wing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
          {/* Ribbon Baseline for Curved Typography */}
          <path id="sub15-ribbon-path" d="M 9,43.0 Q 24,40.7 39,43.0" />
        </defs>

        {/* Imperial Purple Watered-Silk Neck Sash Drapery Behind Star */}
        <path d="M15 1 L24 13 L33 1 L39 1 L28 17 L20 17 L9 1 Z" fill="url(#sub15-silk)" stroke="url(#sub15-gold)" strokeWidth="0.7" />
        <line x1="17" y1="1" x2="25" y2="13" stroke="#FDE047" strokeWidth="0.6" opacity="0.8" />
        <line x1="31" y1="1" x2="23" y2="13" stroke="#FDE047" strokeWidth="0.6" opacity="0.8" />

        {/* 16-Point Radiant Maltese Celestial Order Starburst */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const isLong = i % 2 === 0;
          const rOuter = isLong ? 23 : 19;
          const rInner = 14.5;
          const aRad = (angle * Math.PI) / 180;
          const aLeft = ((angle - 11.25) * Math.PI) / 180;
          const aRight = ((angle + 11.25) * Math.PI) / 180;

          const tipX = 24 + rOuter * Math.cos(aRad);
          const tipY = 24 + rOuter * Math.sin(aRad);
          const leftX = 24 + rInner * Math.cos(aLeft);
          const leftY = 24 + rInner * Math.sin(aLeft);
          const rightX = 24 + rInner * Math.cos(aRight);
          const rightY = 24 + rInner * Math.sin(aRight);

          return (
            <g key={i}>
              {/* Left Light Facet */}
              <polygon
                points={`24,24 ${tipX},${tipY} ${leftX},${leftY}`}
                fill="url(#sub15-facet-light)"
                stroke="#78350F"
                strokeWidth="0.3"
              />
              {/* Right Shadow Facet */}
              <polygon
                points={`24,24 ${tipX},${tipY} ${rightX},${rightY}`}
                fill="url(#sub15-facet-dark)"
                stroke="#78350F"
                strokeWidth="0.3"
              />
            </g>
          );
        })}

        {/* Outer Beaded Gemstone Collar (Alternating Diamonds & Sapphires) */}
        <circle cx="24" cy="24" r="14.8" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.8" />
        <circle cx="24" cy="24" r="13.2" fill="#001845" stroke="url(#sub15-gold)" strokeWidth="0.6" />

        {/* 12 Concentric Brilliant Jewels */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const x = 24 + 14 * Math.cos(rad);
          const y = 24 + 14 * Math.sin(rad);
          const isSapphire = i % 2 === 0;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="0.9"
              fill={isSapphire ? '#38BDF8' : '#FFFFFF'}
              stroke="#78350F"
              strokeWidth="0.25"
            />
          );
        })}

        {/* Sculpted Roman Laurel Wreath of Victory */}
        <circle cx="24" cy="24" r="12" fill="url(#sub15-navy-enamel)" stroke="url(#sub15-gold)" strokeWidth="0.9" />
        <path d="M14 24 C14 29.5 18.5 34 24 34 C29.5 34 34 29.5 34 24 C34 18.5 29.5 14 24 14" stroke="url(#sub15-gold)" strokeWidth="0.8" fill="none" opacity="0.6" />

        {/* Golden Laurel Leaves */}
        {[-50, -25, 0, 25, 50].map((deg, i) => (
          <g key={i} transform={`rotate(${deg} 24 24)`}>
            <ellipse cx="13.5" cy="24" rx="1.1" ry="2.2" transform="rotate(-30 13.5 24)" fill="url(#sub15-facet-light)" stroke="#78350F" strokeWidth="0.3" />
            <ellipse cx="34.5" cy="24" rx="1.1" ry="2.2" transform="rotate(30 34.5 24)" fill="url(#sub15-facet-light)" stroke="#78350F" strokeWidth="0.3" />
            <circle cx="14" cy="24" r="0.6" fill="#DC2626" />
            <circle cx="34" cy="24" r="0.6" fill="#DC2626" />
          </g>
        ))}

        {/* Central Masterpiece: Soaring Blue Jay in Full Flight clutching the Veritas Torch */}
        <g>
          {/* Radiating Veritas Light Core */}
          <circle cx="24" cy="22" r="7.5" fill="#002D72" opacity="0.7" />
          <circle cx="24" cy="22" r="5" fill="#0284C7" opacity="0.35" />

          {/* Broad Outstretched Wings */}
          {/* Left Wing Layered Feathers */}
          <path
            d="M23 21 C18 17 14 16 13 18 C14 20 17 21 20 22 C16 22 15 24 18 24.5 C20 25 22 24 23 23 Z"
            fill="url(#sub15-jay-wing)"
            stroke="#001438"
            strokeWidth="0.5"
          />
          <path d="M14 18 C16 19 19 20 22 21" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />

          {/* Right Wing Layered Feathers (Holding High) */}
          <path
            d="M25 21 C30 17 34 16 35 18 C34 20 31 21 28 22 C32 22 33 24 30 24.5 C28 25 26 24 25 23 Z"
            fill="url(#sub15-jay-wing)"
            stroke="#001438"
            strokeWidth="0.5"
          />
          <path d="M34 18 C32 19 29 20 26 21" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />

          {/* Blue Jay Body in Soaring Posture */}
          <ellipse cx="24" cy="22.5" rx="3" ry="4" fill="url(#sub15-jay-wing)" stroke="#001438" strokeWidth="0.4" />
          {/* White Chest Feathers */}
          <ellipse cx="24" cy="23" rx="1.8" ry="2.2" fill="#FFFFFF" />

          {/* Blue Jay Head with Crest */}
          <circle cx="24" cy="18.5" r="2.4" fill="url(#sub15-jay-wing)" />
          {/* Regal Crest Spike */}
          <path d="M23 17 Q24 14 25 15.5 Q24.5 17 24 18 Z" fill="#38BDF8" />
          {/* White Face Mark */}
          <path d="M22.5 18.5 Q24 20 25.5 18.5 Q24 17.5 22.5 18.5 Z" fill="#FFFFFF" />
          {/* Golden Beak */}
          <polygon points="23.5,18.5 24.5,18.5 24,20" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.3" />
          <circle cx="24" cy="18" r="0.5" fill="#001438" />

          {/* Fan Tail Feathers with Navy & White Barring */}
          <path d="M22.5 25.5 L21 29.5 L24 28 L27 29.5 L25.5 25.5 Z" fill="url(#sub15-jay-wing)" stroke="#001438" strokeWidth="0.4" />
          <line x1="22" y1="28" x2="26" y2="28" stroke="#FFFFFF" strokeWidth="0.6" />

          {/* Golden Talons clutching the Blazing Veritas Torch */}
          <ellipse cx="23.2" cy="24.8" rx="0.8" ry="0.6" fill="url(#sub15-gold)" />
          <ellipse cx="24.8" cy="24.8" rx="0.8" ry="0.6" fill="url(#sub15-gold)" />

          {/* The Blazing Veritas Golden Torch */}
          {/* Burnished Brass Torch Handle & Fluted Cup */}
          <path d="M23 25 L25 25 L24.5 29 L23.5 29 Z" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.4" />
          <path d="M22 25 Q24 26 26 25 L25.5 24 L22.5 24 Z" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.4" />
          {/* Multi-layered Luminous Blazing Flame */}
          <path
            d="M24 17 C22 20 22 23 24 24 C26 23 26 20 24 17 Z"
            fill="url(#sub15-torch-flame)"
          />
          <path
            d="M24 19 C23 21 23 23 24 23.5 C25 23 25 21 24 19 Z"
            fill="#FEF08A"
          />
          <circle cx="24" cy="22" r="0.9" fill="#FFFFFF" />
        </g>

        {/* Lower Imperial Golden Banner: SUPREME LAUREATE • XV */}
        <g>
          {/* Ribbon Tail Drop Shadow Behind */}
          <path d="M7 41 L4 38 L7 35 L10 39 Z" fill="#3B0764" stroke="url(#sub15-gold)" strokeWidth="0.5" />
          <path d="M41 41 L44 38 L41 35 L38 39 Z" fill="#3B0764" stroke="url(#sub15-gold)" strokeWidth="0.5" />
          {/* Underfolds */}
          <polygon points="9,39 12,39 10,42" fill="#1E1B4B" />
          <polygon points="39,39 36,39 38,42" fill="#1E1B4B" />

          {/* Curved Heraldic Front Banner */}
          <path
            d="M8 39 L24 36.5 L40 39 L38 44.5 L24 42.5 L10 44.5 Z"
            fill="url(#sub15-gold)"
            stroke="#78350F"
            strokeWidth="0.8"
          />
          <path d="M10 40 L24 38 L38 40" stroke="#FFFDF0" strokeWidth="0.5" fill="none" />

          {/* Embossed Typography */}
          <text
            fontSize="3.2"
            fontWeight="900"
            fill="#451A03"
            fontFamily="sans-serif"
            letterSpacing="0.7"
          >
            <textPath href="#sub15-ribbon-path" startOffset="50%" textAnchor="middle">
              LAUREATE
            </textPath>
          </text>
        </g>

        {/* Faceted Ruby Jewel Drop at Lowest Apex */}
        <polygon points="24,44.5 25.8,46.5 24,48 22.2,46.5" fill="#DC2626" stroke="url(#sub15-gold)" strokeWidth="0.5" />
        <circle cx="24" cy="46.3" r="0.5" fill="#FEF2F2" />
      </svg>
    );
  };

  return <span className="inline-flex items-center justify-center flex-shrink-0">{renderSvg()}</span>;
};

export { RankBadgeArt } from './RankBadgeArt';

// ==========================================
// 3. ACHIEVEMENT BADGES (9 BADGES)
// ==========================================

export const BadgeIconArt: React.FC<{
  badgeId: string;
  isUnlocked?: boolean;
  size?: number;
  className?: string;
}> = ({ badgeId, isUnlocked = true, size = 36, className = '' }) => {
  const grayscaleClass = !isUnlocked ? 'filter grayscale opacity-60' : '';

  const renderContent = () => {
    switch (badgeId) {
      case 'first-step':
        // First Flight: Hatching Jay with Flight Wings
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
            <ellipse cx="24" cy="26" rx="9" ry="8" fill="#002D72" />
            <circle cx="24" cy="20" r="7" fill="#4A90E2" />
            <polygon points="22,22 26,22 24,26" fill="#F59E0B" />
            <circle cx="21" cy="18" r="1.2" fill="#FFFFFF" />
            <circle cx="27" cy="18" r="1.2" fill="#FFFFFF" />
            {/* Flapping Wings */}
            <path d="M16 22 C10 20 10 14 14 16 C16 18 17 21 16 22 Z" fill="#68ACE5" />
            <path d="M32 22 C38 20 38 14 34 16 C32 18 31 21 32 22 Z" fill="#68ACE5" />
          </svg>
        );

      case 'dorm-escapee':
        // Dorm Escapee: Running Explorer Sneaker with Broken Bricks
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
            <rect x="8" y="32" width="10" height="6" rx="1" fill="#B45309" />
            <rect x="20" y="32" width="10" height="6" rx="1" fill="#B45309" />
            {/* Flying Running Shoe */}
            <path d="M14 26 C18 26 22 28 28 28 C34 28 38 26 40 25 C41 24 39 22 37 22 L18 22 C15 22 13 24 14 26 Z" fill="#F8FAFC" stroke="#002D72" strokeWidth="1.5" />
            <path d="M18 22 L22 14 C24 11 28 11 30 14 L34 18 L37 22 Z" fill="#002D72" />
            <path d="M20 12 C24 7 30 8 34 6 C31 10 29 13 26 14 Z" fill="#F59E0B" />
          </svg>
        );

      case 'shuttle-navigator':
        // Shuttle Pro: Blue & Gold Coach Transit
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
            <rect x="8" y="14" width="32" height="20" rx="4" fill="#002D72" />
            <path d="M8 26 C16 26 24 28 40 27 L40 30 C24 31 16 29 8 29 Z" fill="#F59E0B" />
            <rect x="11" y="17" width="10" height="7" rx="1.5" fill="#BAE6FD" />
            <rect x="23" y="17" width="6" height="7" rx="1" fill="#BAE6FD" />
            <rect x="31" y="17" width="6" height="7" rx="1" fill="#BAE6FD" />
            <circle cx="15" cy="34" r="4" fill="#1E293B" />
            <circle cx="33" cy="34" r="4" fill="#1E293B" />
          </svg>
        );

      case 'thrifty-scholar':
        // Thrifty Blue Jay: Zero-Cost Gold Ribbon Medal
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#ECFDF5" />
            <circle cx="24" cy="22" r="14" fill="#10B981" stroke="#047857" strokeWidth="2" />
            <circle cx="24" cy="22" r="11" fill="#34D399" />
            {/* Clean Dollar / Free Tag */}
            <text x="24" y="26.5" textAnchor="middle" fontSize="12.5" fontWeight="900" fill="#064E3B" fontFamily="sans-serif">$0</text>
            {/* Hanging Ribbon Tails */}
            <path d="M18 34 L15 44 L21 41 L23 44 L23 34 Z" fill="#047857" />
            <path d="M30 34 L33 44 L27 41 L25 44 L25 34 Z" fill="#047857" />
          </svg>
        );

      case 'museum-connoisseur':
        // Museum Connoisseur: Classical Greek Pediment Temple
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#EEF2FF" />
            {/* Roof Triangular Pediment */}
            <polygon points="24,10 38,18 10,18" fill="#4338CA" />
            <polygon points="24,13 34,18 14,18" fill="#6366F1" />
            {/* 4 Classical Columns */}
            <rect x="13" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            <rect x="20" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            <rect x="25" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            <rect x="32" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            {/* Foundation Steps */}
            <rect x="9" y="35" width="30" height="3" fill="#3730A3" rx="1" />
            <rect x="7" y="38" width="34" height="3" fill="#1E1B4B" rx="1" />
          </svg>
        );

      case 'old-bay-crustacean':
        // Old Bay Aficionado: Red & Yellow Seasoned Crab
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEE2E2" />
            <ellipse cx="24" cy="26" rx="12" ry="8" fill="#DC2626" />
            <polygon points="24,23 26,26 24,29 22,26" fill="#FBBF24" />
            <path d="M12 21 C8 15 11 9 15 11 C16 13 14 18 12 21 Z" fill="#EF4444" />
            <path d="M36 21 C40 15 37 9 33 11 C32 13 34 18 36 21 Z" fill="#EF4444" />
            <circle cx="21" cy="19" r="1.8" fill="#FFFFFF" />
            <circle cx="27" cy="19" r="1.8" fill="#FFFFFF" />
            <circle cx="21" cy="19" r="0.9" fill="#000000" />
            <circle cx="27" cy="19" r="0.9" fill="#000000" />
          </svg>
        );

      case 'point-club-500':
        // 500-Point High Flyer: Golden Star Medallion
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
            <polygon points="24,6 29,17 41,18 32,27 35,39 24,33 13,39 16,27 7,18 19,17" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <polygon points="24,10 28,19 37,20 30,27 32,36 24,31 16,36 18,27 11,20 20,19" fill="#FDE047" />
            <circle cx="24" cy="24" r="6" fill="#002D72" />
            <text x="24" y="26.0" textAnchor="middle" fontSize="4.8" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif" letterSpacing="0.3">500</text>
          </svg>
        );

      case 'quest-champion':
        // Quest Master: Golden Expedition Trophy Cup
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF9C3" />
            {/* Trophy Cup */}
            <path d="M16 12 L32 12 L30 24 C28 29 20 29 18 24 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <rect x="18" y="14" width="12" height="8" rx="1" fill="#FDE047" />
            {/* Handles */}
            <path d="M16 14 C11 14 11 22 17 22" stroke="#B45309" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M32 14 C37 14 37 22 31 22" stroke="#B45309" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Stem & Pedestal */}
            <rect x="22" y="27" width="4" height="6" fill="#B45309" />
            <rect x="15" y="33" width="18" height="6" rx="2" fill="#78350F" />
            <circle cx="24" cy="18" r="2" fill="#002D72" />
          </svg>
        );

      case 'baltimore-baron':
      default:
        // True Baltimorean: Grand Golden Coronet & Maryland Ribbon
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
            <path d="M10 32 L38 32 L35 18 L29 25 L24 14 L19 25 L13 18 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <rect x="12" y="32" width="24" height="4" rx="1" fill="#78350F" />
            <circle cx="10" cy="17" r="2.5" fill="#3B82F6" />
            <circle cx="24" cy="13" r="3" fill="#DC2626" />
            <circle cx="38" cy="17" r="2.5" fill="#3B82F6" />
          </svg>
        );
    }
  };

  return <span className="inline-flex items-center justify-center flex-shrink-0">{renderContent()}</span>;
};

// ==========================================
// 4. QUEST ICON ART (6 EXPEDITIONS)
// ==========================================

export const QuestIconArt: React.FC<{
  questId?: string;
  icon?: string;
  size?: number;
  className?: string;
}> = ({ questId = '', icon = '', size = 36, className = '' }) => {
  const key = (questId + ' ' + icon).toLowerCase();

  if (key.includes('bubble')) {
    // Bubble-Burster: Iridescent Soap Bubble popping over campus spire
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
        <circle cx="23" cy="25" r="14" fill="url(#bubble-grad)" stroke="#38BDF8" strokeWidth="2" opacity="0.9" />
        <path d="M16 18 C17 15 21 14 24 15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="15" cy="22" r="1.5" fill="#FFFFFF" />
        {/* Tiny pop bubbles */}
        <circle cx="34" cy="14" r="3.5" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1" />
        <circle cx="38" cy="26" r="2" fill="#BAE6FD" />
        <defs>
          <radialGradient id="bubble-grad" cx="0.3" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    );
  }

  if (key.includes('peabody') || key.includes('culture')) {
    // Peabody Tour: Grand Column & Golden Lyre
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
        {/* Bookshelf Tiers */}
        <rect x="10" y="12" width="28" height="4" fill="#002D72" rx="1" />
        <rect x="10" y="20" width="28" height="4" fill="#B45309" rx="1" />
        <rect x="10" y="28" width="28" height="4" fill="#007788" rx="1" />
        {/* Ornate Gold Lyre / Harp */}
        <path d="M20 16 C18 24 18 32 24 35 C30 32 30 24 28 16 Z" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />
        <line x1="22" y1="18" x2="22" y2="33" stroke="#B45309" strokeWidth="1" />
        <line x1="24" y1="17" x2="24" y2="34" stroke="#B45309" strokeWidth="1" />
        <line x1="26" y1="18" x2="26" y2="33" stroke="#B45309" strokeWidth="1" />
      </svg>
    );
  }

  if (key.includes('triangle') || key.includes('shuttle')) {
    // Shuttle Triangle: Hopkins 3-Campus Connecting Delta
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
        {/* Triangular Route Loop */}
        <polygon points="24,10 38,34 10,34" stroke="#002D72" strokeWidth="3" strokeLinejoin="round" fill="none" strokeDasharray="4 2" />
        {/* Node 1: Homewood */}
        <circle cx="24" cy="10" r="5" fill="#002D72" stroke="#FFFFFF" strokeWidth="2" />
        {/* Node 2: Peabody */}
        <circle cx="38" cy="34" r="5" fill="#C8102E" stroke="#FFFFFF" strokeWidth="2" />
        {/* Node 3: Med */}
        <circle cx="10" cy="34" r="5" fill="#007788" stroke="#FFFFFF" strokeWidth="2" />
        {/* Mini Shuttle in Center */}
        <rect x="18" y="21" width="12" height="7" rx="1.5" fill="#F59E0B" />
      </svg>
    );
  }

  if (key.includes('fells') || key.includes('flavor')) {
    // Fells Point: Maritime Sailboat on Cobblestones
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#EEF2FF" />
        <path d="M12 33 L16 35 L32 35 L36 31 L14 31 Z" fill="#78350F" />
        <line x1="22" y1="12" x2="22" y2="32" stroke="#451A03" strokeWidth="2" />
        <path d="M21 14 L12 28 L21 28 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
        <path d="M23 16 L31 29 L23 29 Z" fill="#68ACE5" stroke="#002D72" strokeWidth="0.8" />
      </svg>
    );
  }

  if (key.includes('star-spangled') || key.includes('star')) {
    // Star-Spangled: 15-Star Fort McHenry Shield
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#FEE2E2" />
        <path d="M12 12 L36 12 L36 24 C36 34 24 40 24 40 C24 40 12 34 12 24 Z" fill="#FFFFFF" stroke="#002D72" strokeWidth="2" />
        <path d="M12 12 L36 12 L36 20 L12 20 Z" fill="#002D72" />
        <rect x="12" y="24" width="24" height="4" fill="#C8102E" />
        <rect x="12" y="32" width="24" height="4" fill="#C8102E" />
        <polygon points="24,14 25.5,18 29.5,18 26.5,20.5 28,24.5 24,22 20,24.5 21.5,20.5 18.5,18 22.5,18" fill="#FBBF24" />
      </svg>
    );
  }

  // Visionary Rebel / Arts Circuit: Spray Can & Color Burst
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="22" fill="#F5F3FF" />
      {/* Aerosol Spray Can */}
      <rect x="18" y="18" width="12" height="18" rx="2" fill="#7C3AED" />
      <rect x="21" y="14" width="6" height="4" rx="1" fill="#94A3B8" />
      <circle cx="24" cy="12" r="1.5" fill="#EF4444" />
      {/* Graffiti Paint Swirls */}
      <path d="M26 12 Q34 8 38 14 Q32 18 36 24" stroke="#EC4899" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="18" r="2" fill="#F59E0B" />
      <circle cx="34" cy="10" r="1.5" fill="#3B82F6" />
    </svg>
  );
};

// ==========================================
// 5. STUDENT AVATAR VECTOR ART (8 OPTIONS)
// ==========================================

export const AVATAR_OPTIONS: { id: string; label: string }[] = [
  { id: 'baby-jay', label: 'Baby Jay Explorer' },
  { id: 'scholar-jay', label: 'Scholar Jay' },
  { id: 'maryland-crab', label: 'Baltimore Blue Crab' },
  { id: 'peabody-violin', label: 'Peabody Virtuoso' },
  { id: 'med-microscope', label: 'East Baltimore Med' },
  { id: 'lacrosse-jay', label: 'JHU Lacrosse Athlete' },
  { id: 'astronomy-star', label: 'Hopkins Astrophysicist' },
  { id: 'vintage-camera', label: 'Charm City Chronicler' },
];

export const AvatarVectorArt: React.FC<{
  avatarId?: string;
  size?: number;
  className?: string;
}> = ({ avatarId = 'baby-jay', size = 48, className = '' }) => {
  // Normalize legacy emojis or string ids
  let id = avatarId.toLowerCase();
  if (id.includes('blue-jay') || id.includes('baby-jay')) id = 'baby-jay';
  if (id.includes('scholar')) id = 'scholar-jay';
  if (id.includes('crab')) id = 'maryland-crab';
  if (id.includes('violin') || id.includes('peabody')) id = 'peabody-violin';
  if (id.includes('microscope') || id.includes('med')) id = 'med-microscope';
  if (id.includes('lacrosse') || id.includes('owl')) id = 'lacrosse-jay';
  if (id.includes('star') || id.includes('astronomy') || id.includes('rocket')) id = 'astronomy-star';
  if (id.includes('camera') || id.includes('vintage') || id.includes('art')) id = 'vintage-camera';

  switch (id) {
    case 'scholar-jay':
      // Hoppy Mascot with Scholar styling
      return (
        <div
          className={`relative rounded-full overflow-hidden bg-sky-100 flex items-center justify-center border-2 border-sky-400 ${className}`}
          style={{ width: size, height: size }}
        >
          <img
            src="/blue-jay-mascot.png"
            alt="Hoppy Mascot"
            className="w-[85%] h-[85%] object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/blue-jay.svg';
            }}
          />
        </div>
      );

    case 'maryland-crab':
      // Cartoon Baltimore Blue Crab with Waving Claws
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#FEE2E2" />
          {/* Walking Legs */}
          <path d="M16 34 L10 38 M18 40 L12 45 M22 46 L18 52" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 34 L54 38 M46 40 L52 45 M42 46 L46 52" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          {/* Shell */}
          <ellipse cx="32" cy="38" rx="16" ry="11" fill="#DC2626" />
          <ellipse cx="32" cy="38" rx="10" ry="7" fill="#B91C1C" />
          {/* Pincer Arms */}
          <path d="M22 34 C16 26 14 20 18 16 C22 12 24 16 20 22 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
          <path d="M42 34 C48 26 50 20 46 16 C42 12 40 16 44 22 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
          {/* Eyestalks */}
          <circle cx="28" cy="26" r="3" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1" />
          <circle cx="36" cy="26" r="3" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1" />
          <circle cx="28" cy="26" r="1.5" fill="#0F172A" />
          <circle cx="36" cy="26" r="1.5" fill="#0F172A" />
        </svg>
      );

    case 'peabody-violin':
      // Peabody Conservatory Violin & Golden Clef
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#FEF3C7" />
          <g transform="rotate(30 32 32)">
            <ellipse cx="32" cy="38" rx="11" ry="14" fill="#B45309" />
            <ellipse cx="32" cy="24" rx="8" ry="10" fill="#92400E" />
            <rect x="29" y="8" width="6" height="16" fill="#1E293B" rx="1" />
            <circle cx="32" cy="7" r="3.5" fill="#78350F" />
            <circle cx="22" cy="31" r="4" fill="#FEF3C7" />
            <circle cx="42" cy="31" r="4" fill="#FEF3C7" />
            <line x1="32" y1="10" x2="32" y2="46" stroke="#FDE68A" strokeWidth="1.5" />
          </g>
          <circle cx="48" cy="18" r="3" fill="#D97706" />
          <path d="M51 18 L51 10 L56 12" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'med-microscope':
      // East Baltimore Medical Research Microscope
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
          {/* Eyepiece / Barrel */}
          <g transform="rotate(-20 32 32)">
            <rect x="28" y="14" width="8" height="18" rx="2" fill="#047857" />
            <rect x="26" y="10" width="12" height="5" rx="1" fill="#065F46" />
            <polygon points="30,32 34,32 33,36 31,36" fill="#A7F3D0" />
          </g>
          {/* Curved Arm */}
          <path d="M38 24 C44 28 44 42 36 46" stroke="#065F46" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Specimen Stage */}
          <rect x="22" y="38" width="18" height="3" fill="#1E293B" rx="1" />
          {/* Heavy Base */}
          <rect x="18" y="48" width="28" height="5" rx="2" fill="#065F46" />
        </svg>
      );

    case 'lacrosse-jay':
      // Hopkins Lacrosse Crossed Sticks & Blue Jay Crest
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
          {/* Crossed Lacrosse Stick Handles */}
          <line x1="14" y1="50" x2="48" y2="16" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="16" y2="16" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          {/* Net Head */}
          <path d="M44 14 C48 10 54 16 50 20 Z" fill="#002D72" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M20 14 C16 10 10 16 14 20 Z" fill="#002D72" stroke="#FFFFFF" strokeWidth="1" />
          {/* Hopkins JHU Lacrosse Ball */}
          <circle cx="32" cy="32" r="8" fill="#F59E0B" stroke="#002D72" strokeWidth="2" />
          <text x="32" y="34.2" textAnchor="middle" fontSize="6.0" fontWeight="900" fill="#002D72" fontFamily="sans-serif" letterSpacing="0.4">JHU</text>
        </svg>
      );

    case 'astronomy-star':
      // Space Telescope & Ringed Celestial Planet
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#0F172A" />
          {/* Ringed Planet */}
          <ellipse cx="32" cy="32" rx="14" ry="14" fill="#6366F1" />
          <ellipse cx="32" cy="32" rx="24" ry="6" stroke="#F59E0B" strokeWidth="3" fill="none" transform="rotate(-25 32 32)" />
          {/* Star Sparkles */}
          <polygon points="18,14 19.5,17 22.5,18 19.5,19 18,22 16.5,19 13.5,18 16.5,17" fill="#FDE047" />
          <polygon points="46,44 47,46 49,47 47,48 46,50 45,48 43,47 45,46" fill="#FDE047" />
        </svg>
      );

    case 'vintage-camera':
      // Vintage Leather Traveler Camera
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#FEF3C7" />
          {/* Camera Body */}
          <rect x="14" y="24" width="36" height="24" rx="4" fill="#78350F" />
          <rect x="14" y="24" width="36" height="7" fill="#1E293B" rx="1" />
          {/* Shutter Button & Flash */}
          <rect x="18" y="20" width="6" height="4" rx="1" fill="#94A3B8" />
          <circle cx="42" cy="28" r="2.5" fill="#EF4444" />
          {/* Brass Optical Lens */}
          <circle cx="32" cy="36" r="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="32" cy="36" r="4.5" fill="#38BDF8" />
          <circle cx="30" cy="34" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'baby-jay':
    default:
      // Hoppy Mascot Avatar
      return (
        <div
          className={`relative rounded-full overflow-hidden bg-sky-100 flex items-center justify-center border-2 border-sky-400 ${className}`}
          style={{ width: size, height: size }}
        >
          <img
            src="/blue-jay-mascot.png"
            alt="Hoppy Mascot"
            className="w-[85%] h-[85%] object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/blue-jay.svg';
            }}
          />
        </div>
      );
  }
};
