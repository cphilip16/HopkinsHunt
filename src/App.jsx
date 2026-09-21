import { useState } from 'react'
import './App.css'

const places = [
  // 1. Being On Campus
  {
    id: 'brody',
    name: 'Brody Learning Commons',
    formalName: 'Brody Learning Commons',
    address: '3400 N Charles St, Baltimore, MD 21218',
    area: 'Homewood Campus',
    type: 'On campus',
    points: 25,
    icon: '📚',
    color: 'blue',
    description: 'The 24/7 glass-walled hub for marathon study sessions, whiteboard brainstorming, and group grind before midterms.',
    image: '/places/brody-learning-commons.jpg',
    x: 42,
    y: 28,
  },
  {
    id: 'gilman',
    name: 'Gilman Hall Reading Room',
    formalName: 'Gilman Memorial Reading Room (Hutzler Reading Room)',
    address: '3400 N Charles St (Gilman Hall Rm 110), Baltimore, MD 21218',
    area: 'Homewood Campus',
    type: 'On campus',
    points: 30,
    icon: '🏛️',
    color: 'gold',
    description: 'Bask in scholarly splendor beneath soaring stained-glass memorial windows. Whispering only, majestic desks, and pure academic motivation.',
    image: '/places/gilman-reading-room.jpg',
    x: 48,
    y: 22,
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg Student Center',
    formalName: 'Bloomberg Center & Hopkins Student Hub',
    address: '3400 N Charles St, Baltimore, MD 21218',
    area: 'Homewood Campus',
    type: 'On campus',
    points: 20,
    icon: '☕',
    color: 'coral',
    description: 'The social heartbeat of student life! Grab a quick caffeine recharge, meet up with your project team, or relax between classes.',
    image: '/places/bloomberg-student-center.webp',
    x: 38,
    y: 34,
  },
  {
    id: 'sherwood',
    name: 'Sherwood Gardens',
    formalName: 'Sherwood Gardens',
    address: '4310 Underwood Rd, Baltimore, MD 21218',
    area: 'Guilford / North Campus',
    type: 'On campus',
    points: 35,
    icon: '🌷',
    color: 'green',
    description: 'A magical neighborhood floral sanctuary famous for 80,000 blooming spring tulips. The sweetest picnic escape right beside campus.',
    image: '/places/sherwood-gardens.webp',
    x: 52,
    y: 15,
  },
  {
    id: 'beach',
    name: 'The Beach',
    formalName: 'The Johns Hopkins Beach (Homewood)',
    address: '3300 N Charles St, Baltimore, MD 21218',
    area: 'Homewood Campus',
    type: 'On campus',
    points: 20,
    icon: '☀️',
    color: 'blue',
    description: 'Zero waves, 100% good vibes! The sun-drenched grassy knoll on North Charles where Hopkins students lounge, play spikeball, and tan all spring.',
    image: '/places/the-beach.webp',
    x: 46,
    y: 30,
  },

  // 2. Being Near Campus
  {
    id: 'peabody',
    name: 'Peabody Library',
    formalName: 'George Peabody Library',
    address: '17 E Mount Vernon Pl, Baltimore, MD 21202',
    area: 'Mount Vernon',
    type: 'Near campus',
    points: 60,
    icon: '📖',
    color: 'gold',
    description: 'A jaw-dropping, six-tier "cathedral of books" rising 61 feet in historic Mount Vernon. An easy hop on the free JHMI shuttle!',
    image: '/places/peabody-library.webp',
    x: 32,
    y: 48,
  },
  {
    id: 'bma',
    name: 'Baltimore Museum of Art',
    formalName: 'The Baltimore Museum of Art (BMA)',
    address: '10 Art Museum Dr, Baltimore, MD 21218',
    area: 'Charles Village',
    type: 'Near campus',
    points: 45,
    icon: '🎨',
    color: 'purple',
    description: 'Right on the doorstep of Homewood with totally free admission! Marvel at world-famous Matisse masterpieces and a peaceful outdoor sculpture garden.',
    image: '/places/baltimore-museum-of-art.webp',
    x: 58,
    y: 35,
  },
  {
    id: 'farmers-market',
    name: "Farmer's Market",
    formalName: '32nd Street Farmers Market',
    address: '400 E 32nd St, Baltimore, MD 21218',
    area: 'Waverly / 32nd St',
    type: 'Near campus',
    points: 40,
    icon: '🍎',
    color: 'coral',
    description: 'The beloved Saturday morning tradition on 32nd Street! Warm apple cider donuts, farm-fresh eggs, artisanal cheeses, and lively neighborhood chatter.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=85',
    x: 65,
    y: 28,
  },
  {
    id: 'charmery',
    name: 'The Charmery',
    formalName: 'The Charmery (Hampden)',
    address: '801 W 36th St, Baltimore, MD 21211',
    area: 'Hampden',
    type: 'Near campus',
    points: 35,
    icon: '🍦',
    color: 'coral',
    description: 'Legendary quirky ice cream parlor on The Avenue in Hampden. Taste wild Baltimore flavors like Old Bay Caramel, Maryland Mud, and Salty Caramel.',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=85',
    x: 26,
    y: 24,
  },
  {
    id: 'wyman-park',
    name: 'Wyman Park',
    formalName: 'Wyman Park Dell',
    address: '2929 N Charles St, Baltimore, MD 21218',
    area: 'Charles Village',
    type: 'Near campus',
    points: 30,
    icon: '🌳',
    color: 'green',
    description: 'A wooded natural dell tucked right below campus. Ideal for dog-spotting, hammock hangs, trail runs, and decompressing after exams.',
    image: '/places/wyman-park.webp',
    x: 50,
    y: 42,
  },

  // 3. Far From Campus
  {
    id: 'kong',
    name: 'Kong Restaurant',
    formalName: 'Kong Pocha Restaurant',
    address: '12 W 20th St, Baltimore, MD 21218',
    area: 'Station North',
    type: 'Off campus',
    points: 70,
    icon: '🍗',
    color: 'coral',
    description: 'Late-night Korean pocha staple for crispy double-fried chicken, bubbling spicy stews, and celebratory post-exam dinners with friends.',
    image: '/places/kong-pocha.jpg',
    x: 40,
    y: 56,
  },
  {
    id: 'harbor-tandoor',
    name: 'Harbor Tandoor',
    formalName: 'Harbor Tandoor Indian Restaurant',
    address: '803 E Fort Ave, Baltimore, MD 21230',
    area: 'Inner Harbor',
    type: 'Off campus',
    points: 75,
    icon: '🍛',
    color: 'gold',
    description: 'Fragrant butter chicken, sizzling tandoori skewers, and warm pillowy garlic naan served right by the sparkling harbor promenade.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85',
    x: 74,
    y: 69,
  },
  {
    id: 'inner-harbor',
    name: 'Inner Harbor',
    formalName: 'Baltimore Inner Harbor Promenade',
    address: '201 E Pratt St, Baltimore, MD 21202',
    area: 'Downtown Baltimore',
    type: 'Off campus',
    points: 80,
    icon: '⛵',
    color: 'blue',
    description: 'The historic centerpiece of Charm City! Stroll the scenic waterfront promenade, watch the dragon paddle boats, and feel the sea breeze.',
    image: '/places/inner-harbor.jpg',
    x: 68,
    y: 75,
  },
  {
    id: 'aquarium',
    name: 'Baltimore Aquarium',
    formalName: 'National Aquarium',
    address: '501 E Pratt St, Pier 3, Baltimore, MD 21202',
    area: 'Inner Harbor / Pier 3',
    type: 'Off campus',
    points: 90,
    icon: '🐬',
    color: 'navy',
    description: 'An aquatic wonderland! Wander through the spiral coral reef, immerse yourself in the rooftop rainforest, and say hello to puffins and sharks.',
    image: '/places/baltimore-aquarium.jpg',
    x: 78,
    y: 73,
  },
  {
    id: 'hard-rock',
    name: 'Hard Rock Cafe',
    formalName: 'Hard Rock Cafe Baltimore',
    address: '601 E Pratt St, Pier 4 Power Plant, Baltimore, MD 21202',
    area: 'Inner Harbor / Pier 4',
    type: 'Off campus',
    points: 65,
    icon: '🎸',
    color: 'purple',
    description: 'Rock memorabilia, juicy burgers, and harbor breezes inside an old power plant building right on Pier 4 under the giant glowing guitar.',
    image: '/places/hard-rock-cafe.jpg',
    x: 82,
    y: 78,
  },
]

const mapPlaces = places
const filterTabs = ['All spots', 'On campus', 'Near campus', 'Off campus']

const gpsMapBounds = {
  north: 39.35,
  south: 39.25,
  west: -76.65,
  east: -76.58,
}

const questDefinitions = [
  {
    id: 'thinker-pose',
    title: 'Thinker’s Pose',
    detail: 'Take a “thinking” photo beside Auguste Rodin’s The Thinker at the BMA.',
    points: 75,
    icon: '🤔',
    placeId: 'bma',
  },
  {
    id: 'brody-brain-boost',
    title: 'Brody Brain Boost',
    detail: 'Find Brody’s bright blue study pod and snap your most focused study selfie.',
    points: 60,
    icon: '📚',
    placeId: 'brody',
  },
  {
    id: 'harbor-captain',
    title: 'Harbor Captain',
    detail: 'Find the USS Constellation at the Inner Harbor and strike your best captain pose.',
    points: 90,
    icon: '⚓',
    placeId: 'inner-harbor',
  },
]

const ranks = [
  'Newbie',
  'First Flight',
  'Blue Jay',
  'Campus Scout',
  'Homewood Guide',
  'Neighborhood Pro',
  'Charm City Wanderer',
  'Weekend Warrior',
  'Baltimore Insider',
  'Hunt Captain',
  'Urban Explorer',
  'Trailblazer',
  'JHU Legend',
  'City Connector',
  'Local Legend',
]

// Interactive Blue Jay Cartoon Component with Click-to-Emote
function InteractiveBlueJay({ posClass }) {
  const [emote, setEmote] = useState('idle')
  const [quote, setQuote] = useState('')

  const emotes = [
    {
      type: 'flap',
      quote: '🪽 Flapping my wings! Go Blue Jays! 💙',
    },
    {
      type: 'dance',
      quote: '🎵 Blue Jay dance party! Wiggle wiggle! 🎶',
    },
    {
      type: 'spin',
      quote: '🌟 360 Victory Flip! You can beat your friends! 🚀',
    },
    {
      type: 'dance',
      quote: '✨ Chirp chirp! Level up time! 🏆',
    },
  ]

  function triggerEmote() {
    const next = emotes[Math.floor(Math.random() * emotes.length)]
    setEmote(next.type)
    setQuote(next.quote)
    setTimeout(() => {
      setEmote('idle')
      setQuote('')
    }, 2400)
  }

  return (
    <div
      className={`blue-jay-interactive-container ${posClass}`}
      onClick={triggerEmote}
      title="Meet Hoppy the Blue Jay — click to flap wings or dance!"
    >
      {quote && <div className="jay-speech-bubble">{quote}</div>}
      <img
        className={`blue-jay-img emote-${emote}`}
        src="/blue-jay-mascot.png"
        alt="Hoppy the Blue Jay mascot - Click to emote"
      />
      <span className="jay-click-hint">Meet Hoppy! 🐦</span>
    </div>
  )
}

function App() {
  const [visited, setVisited] = useState([])
  const [filter, setFilter] = useState('All spots')
  const [search, setSearch] = useState('')
  const [selectedPlace, setSelectedPlace] = useState(places[4]) // The Beach
  const [userLocation, setUserLocation] = useState(null)
  const [locationStatus, setLocationStatus] = useState('')
  const [authOpen, setAuthOpen] = useState(false)
  const [authStep, setAuthStep] = useState('credentials')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [authError, setAuthError] = useState('')

  // Friends & Leaderboard State
  const [friends, setFriends] = useState([
    {
      id: 'sofia-r',
      name: 'Sofia Rodriguez',
      email: 'sofia.r@jh.edu',
      rank: 'Local Legend',
      points: 620,
      visitedCount: 13,
      cheers: 8,
    },
    {
      id: 'jordan-p',
      name: 'Jordan Patel',
      email: 'jordan.p@jh.edu',
      rank: 'Weekend Warrior',
      points: 380,
      visitedCount: 8,
      cheers: 5,
    },
    {
      id: 'maya-l',
      name: 'Maya Lin',
      email: 'maya.l@jh.edu',
      rank: 'Blue Jay',
      points: 140,
      visitedCount: 3,
      cheers: 3,
    },
    {
      id: 'alex-c',
      name: 'Alex Chen',
      email: 'alex.c@jh.edu',
      rank: 'First Flight',
      points: 65,
      visitedCount: 2,
      cheers: 2,
    },
  ])
  const [newFriendName, setNewFriendName] = useState('')
  const [newFriendEmail, setNewFriendEmail] = useState('')
  const [friendToast, setFriendToast] = useState('')
  const [spotName, setSpotName] = useState('')
  const [spotReason, setSpotReason] = useState('')
  const [spotSubmissions, setSpotSubmissions] = useState([])

  const isCreator = loggedIn && email.trim().toLowerCase() === 'creator@jh.edu'

  const quests = questDefinitions.map((quest) => ({
    ...quest,
    progress: visited.includes(quest.placeId) ? 1 : 0,
    total: 1,
  }))

  const gpsMarkerStyle = userLocation
    ? {
        left: `${Math.min(95, Math.max(5, ((userLocation.longitude - gpsMapBounds.west) / (gpsMapBounds.east - gpsMapBounds.west)) * 100))}%`,
        top: `${Math.min(95, Math.max(5, ((gpsMapBounds.north - userLocation.latitude) / (gpsMapBounds.north - gpsMapBounds.south)) * 100))}%`,
      }
    : null

  const totalPoints = visited.reduce((sum, id) => {
    const item = places.find((place) => place.id === id)
    return sum + (item ? item.points : 0)
  }, 0) + quests.reduce((sum, quest) => sum + (quest.progress === quest.total ? quest.points : 0), 0) +
    spotSubmissions.filter((submission) => submission.status === 'approved').length * 300

  const rankIndex = Math.min(ranks.length - 1, Math.floor(totalPoints / 50))
  const currentRank = ranks[rankIndex]
  const nextRank = ranks[rankIndex + 1]
  const progress = nextRank ? ((totalPoints % 50) / 50) * 100 : 100

  // Combine user with friends and sort by points descending
  const currentUserEntry = {
    id: 'current-user',
    name: loggedIn ? (email ? email.split('@')[0] : 'You (Sofia)') : 'You (Student Explorer)',
    email: loggedIn ? email || 'you@jh.edu' : 'you@jh.edu (Unverified)',
    rank: currentRank,
    points: totalPoints,
    visitedCount: visited.length,
    isUser: true,
    cheers: 12,
  }

  const allParticipants = [...friends, currentUserEntry].sort((a, b) => b.points - a.points)
  const userStanding = allParticipants.findIndex((p) => p.id === 'current-user') + 1

  function handleAddFriend(e) {
    e.preventDefault()
    if (!newFriendName.trim() || !newFriendEmail.trim()) return

    const starterPoints = Math.floor(Math.random() * 200) + 40
    const starterRankIndex = Math.min(ranks.length - 1, Math.floor(starterPoints / 50))

    const newFriend = {
      id: `friend-${Date.now()}`,
      name: newFriendName.trim(),
      email: newFriendEmail.trim().toLowerCase().includes('@jh.edu')
        ? newFriendEmail.trim().toLowerCase()
        : `${newFriendEmail.trim().toLowerCase()}@jh.edu`,
      rank: ranks[starterRankIndex],
      points: starterPoints,
      visitedCount: Math.floor(starterPoints / 30),
      cheers: 1,
    }

    setFriends((prev) => [...prev, newFriend])
    setFriendToast(`Added ${newFriend.name} to your friends leaderboard! 🎉`)
    setNewFriendName('')
    setNewFriendEmail('')
    setTimeout(() => setFriendToast(''), 4000)
  }

  function cheerFriend(id) {
    setFriends((prev) =>
      prev.map((f) => (f.id === id ? { ...f, cheers: f.cheers + 1 } : f)),
    )
  }

  function submitSpot(event) {
    event.preventDefault()
    if (!spotName.trim() || !spotReason.trim()) return

    setSpotSubmissions((current) => [
      ...current,
      {
        id: `spot-${Date.now()}`,
        name: spotName.trim(),
        reason: spotReason.trim(),
        status: 'pending',
      },
    ])
    setSpotName('')
    setSpotReason('')
  }

  function approveSpot(id) {
    setSpotSubmissions((current) =>
      current.map((submission) =>
        submission.id === id ? { ...submission, status: 'approved' } : submission,
      ),
    )
  }

  function requestLocation() {
    if (!navigator.geolocation) {
      setLocationStatus('GPS is not available in this browser.')
      return
    }

    setLocationStatus('Finding your location…')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation({ latitude: coords.latitude, longitude: coords.longitude })
        setLocationStatus('You are on the map!')
      },
      () => setLocationStatus('Location was unavailable. You can still explore every pin.'),
      { enableHighAccuracy: true, timeout: 10000 },
    )
  }

  const visiblePlaces = places.filter(
    (place) =>
      (filter === 'All spots' || place.type === filter) &&
      `${place.name} ${place.formalName} ${place.area} ${place.address} ${place.description}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  )

  function toggleVisited(id) {
    setVisited((current) =>
      current.includes(id) ? current.filter((placeId) => placeId !== id) : [...current, id],
    )
  }

  function beginLogin(event) {
    event.preventDefault()
    setAuthError('')
    setAuthStep('verify')
  }

  function verifyCode(event) {
    event.preventDefault()
    if (code === '123456') {
      setLoggedIn(true)
      setAuthOpen(false)
      setAuthStep('credentials')
      setCode('')
    } else {
      setAuthError('Use the demo verification code 123456.')
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Hopkins Hunt home">
          <span className="brand-mark">HH</span>
          <span>Hopkins Hunt</span>
        </a>
        <nav>
          <a className="active" href="#recommendations">Explore</a>
          <a href="#map">Map</a>
          <a href="#quests">Quests</a>
          <a href="#friends">Friends</a>
          <a href="#passport">Passport</a>
        </nav>
        <button className="profile-button" type="button" onClick={() => setAuthOpen(true)}>
          <span className="profile-avatar">{loggedIn ? '✓' : '?'}</span>
          {loggedIn ? 'Verified JHU student' : 'Student login'}
        </button>
      </header>

      <main id="top">
        {/* Dashboard Hero */}
        <section className="dashboard-hero">
          <div>
            <p className="eyebrow">JHU STUDENT ADVENTURE LOG</p>
            <h1>Make the city<br /><em>your campus.</em></h1>

            {/* Core App Goal Banner */}
            <div className="goal-banner">
              <span className="goal-banner-icon">🎯</span>
              <div className="goal-banner-body">
                <strong>THE HUNT GOAL: LEVEL UP & COMPETE WITH FRIENDS</strong>
                <p>
                  Explore Baltimore favorites, stamp your passport, earn points, and race your friends up the leaderboard!
                </p>
              </div>
            </div>

            {/* 3-Step Game Loop Pills */}
            <div className="game-loop-strip">
              <span className="game-loop-pill">📍 1. Stamp Spots</span>
              <span className="game-loop-pill">⚡ 2. Level Up (15 Ranks)</span>
              <span className="game-loop-pill">👥 3. Beat Your Friends</span>
            </div>

            <div className="hero-actions">
              <a className="primary-button" href="#recommendations">
                Explore spots <span>↓</span>
              </a>
              <a className="text-button" href="#friends">
                View Friends Leaderboard <span>→</span>
              </a>
            </div>
          </div>

          {/* Interactive Bubbly Hero Score Orb */}
          <div className="hero-score">
            <InteractiveBlueJay posClass="hero-jay-pos" />
            <div className="score-orbit">
              <span className="orbit-dot"></span>
              <strong>{totalPoints}</strong>
              <small>POINTS</small>
            </div>
            <span className="score-rank">RANK {String(rankIndex + 1).padStart(2, '0')} / 15</span>
            <b>{currentRank}</b>
            <div className="score-progress">
              <span style={{ width: `${progress}%` }}></span>
            </div>
            <small>
              {nextRank ? `${50 - (totalPoints % 50)} pts to ${nextRank}` : 'Top rank unlocked! 🏆'}
            </small>
          </div>
        </section>

        {/* Stat Strip */}
        <section className="stat-strip">
          <div>
            <span className="stat-label">EXPLORED</span>
            <strong>{visited.length}<small> / {places.length}</small></strong>
            <span>spots stamped</span>
          </div>
          <div>
            <span className="stat-label">CURRENT RANK</span>
            <strong>{currentRank}</strong>
            <span>level {rankIndex + 1} of 15</span>
          </div>
          <div>
            <span className="stat-label">LEADERBOARD STANDING</span>
            <strong className="status-on">#{userStanding} of {allParticipants.length}</strong>
            <span>among your friends</span>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="recommendations-section" id="recommendations">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / RECOMMENDATIONS</p>
              <h2>Worth the walk.<br /><em>Worth the points.</em></h2>
            </div>
            <p className="section-note">
              Organized by distance: On campus, Near campus, and Off campus.<br />
              Check in at spots to rise on the leaderboard!
            </p>
          </div>

          <div className="controls">
            <div className="filter-tabs">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={filter === tab ? 'selected' : ''}
                  onClick={() => setFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <label className="search">
              <span>⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, address, or area"
              />
            </label>
          </div>

          <div className="place-grid">
            {visiblePlaces.map((place) => {
              const isVisited = visited.includes(place.id)
              return (
                <article className={`place-card ${isVisited ? 'visited' : ''}`} key={place.id}>
                  <div className="place-image" style={{ backgroundImage: `url(${place.image})` }}>
                    <span className={`place-icon ${place.color}`}>{place.icon}</span>
                    <span className="points">+{place.points} pts</span>
                    {isVisited && <span className="visited-stamp">Visited ✓</span>}
                  </div>
                  <div className="place-content">
                    <div>
                      <div className="place-meta">
                        <span>{place.type}</span>
                        <span>{place.area}</span>
                      </div>
                      <h3>{place.name}</h3>
                      <span className="place-formal-name">🏛️ {place.formalName}</span>
                      <div className="place-address" title="Full Street Address">
                        <span>📍</span> {place.address}
                      </div>
                      <p>{place.description}</p>
                    </div>
                    <button
                      className={`visit-button ${isVisited ? 'done' : ''}`}
                      type="button"
                      onClick={() => toggleVisited(place.id)}
                    >
                      <span>{isVisited ? 'Added to passport' : 'Mark as visited'}</span>
                      <span>{isVisited ? '✓' : '+'}</span>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* Field Map Section */}
        <section className="map-section" id="map">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / FIELD MAP</p>
              <h2>One campus.<br /><em>Many directions.</em></h2>
            </div>
            <p className="section-note">
              Click any bubbly pin to preview formal names & street addresses.<br />
              Spans Homewood, neighborhood gems, and the harbor.
            </p>
          </div>

          <div className="map-layout">
            <div className="campus-map">
              <div className="map-water"></div>
              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>
              <div className="map-road road-four"></div>
              <span className="street-label charles">N CHARLES ST</span>
              <span className="street-label 33rd">W 33RD ST</span>
              <span className="street-label pratt">E PRATT ST</span>
              <span className="map-label homewood">HOMEWOOD CAMPUS</span>
              <span className="map-label baltimore">INNER HARBOR</span>
              <div className="map-compass" aria-label="Map orientation"><b>N</b><span>⌁</span></div>
              <div className="map-scale"><span></span>1 mi</div>
              <button className="map-locate" type="button" onClick={requestLocation}>
                <span>◎</span> Use my location
              </button>
              {gpsMarkerStyle && <span className="gps-user-marker" style={gpsMarkerStyle} title="Your GPS location">●</span>}
              {mapPlaces.map((place) => (
                <button
                  className={`map-pin ${selectedPlace.id === place.id ? 'selected' : ''}`}
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  key={place.id}
                  onClick={() => setSelectedPlace(place)}
                  aria-label={`Show ${place.name}`}
                  title={`${place.name} (+${place.points} pts)`}
                >
                  {place.icon}
                </button>
              ))}
            </div>

            <aside className="map-detail">
              <div>
                <span className="detail-kicker">SELECTED DESTINATION</span>
                <div className={`detail-icon ${selectedPlace.color}`}>{selectedPlace.icon}</div>
                <h3>{selectedPlace.name}</h3>
                <div className="map-detail-formal">🏛️ {selectedPlace.formalName}</div>
                <div className="map-detail-address">📍 {selectedPlace.address}</div>
                <p>{selectedPlace.description}</p>
                <div className="detail-row">
                  <span>{selectedPlace.type} • {selectedPlace.area}</span>
                  <strong>+{selectedPlace.points} pts</strong>
                </div>
              </div>
              <button
                className="map-action"
                type="button"
                onClick={() => toggleVisited(selectedPlace.id)}
              >
                <span>{visited.includes(selectedPlace.id) ? 'Saved to passport ✓' : 'Add destination'}</span>
                <span>→</span>
              </button>
            </aside>
          </div>
          <p className="gps-note">{locationStatus || 'GPS-style map • Tap a pin for destination details'}</p>

          <form className="spot-submission" onSubmit={submitSpot}>
            <div className="spot-submission-copy">
              <span className="submission-kicker">COMMUNITY PICK</span>
              <h3>Know a spot we should hunt next?</h3>
              <p>Suggest a Baltimore favorite for creator review. Approved additions earn you <strong>+300 points</strong>.</p>
            </div>
            <div className="spot-submission-fields">
              <input
                value={spotName}
                onChange={(event) => setSpotName(event.target.value)}
                placeholder="Place name"
                aria-label="Suggested place name"
              />
              <input
                value={spotReason}
                onChange={(event) => setSpotReason(event.target.value)}
                placeholder="Why should students try it?"
                aria-label="Why students should try this place"
              />
              <button type="submit">Submit spot <span>→</span></button>
            </div>
          </form>

          {spotSubmissions.length > 0 && (
            <div className="submission-list" aria-live="polite">
              {spotSubmissions.map((submission) => (
                <article className="submission-item" key={submission.id}>
                  <div>
                    <strong>{submission.name}</strong>
                    <span>{submission.reason}</span>
                  </div>
                  <div className="submission-status">
                    <span className={submission.status}>{submission.status === 'approved' ? 'Approved • +300 pts' : 'Pending creator review'}</span>
                    {isCreator && submission.status === 'pending' && (
                      <button type="button" onClick={() => approveSpot(submission.id)}>Approve +300</button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Quests Section */}
        <section className="quests-section" id="quests">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / STUDENT QUESTS</p>
              <h2>Plans for your<br /><em>next free hour.</em></h2>
              <p className="section-note">Fresh mini-adventures land here every week.</p>
            </div>
            <span className="quest-count">{quests.length} active quests</span>
          </div>

          <div className="quest-grid">
            {quests.map((quest) => (
              <article className="quest-card" key={quest.id}>
                <div className="quest-number">
                  {quest.icon}
                  <span>QUEST</span>
                </div>
                <div className="quest-main">
                  <h3>{quest.title}</h3>
                  <p>{quest.detail}</p>
                  <div className="quest-track">
                    <span style={{ width: `${(quest.progress / quest.total) * 100}%` }}></span>
                  </div>
                  <small>
                    {quest.progress} / {quest.total} complete {quest.progress >= quest.total ? '🎉' : ''}
                  </small>
                </div>
                <div className="quest-points">
                  +{quest.points}
                  <span>PTS</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Friends & Leaderboard Section */}
        <section className="friends-section" id="friends">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / SQUAD & LEADERBOARD</p>
              <h2>Compete with friends.<br /><em>Climb the ranks.</em></h2>
            </div>
            <p className="section-note">
              Add your classmates to compare points and see who holds the highest Blue Jay rank!
            </p>
          </div>

          {/* User Standing Banner */}
          <div className="user-standing-banner">
            <div className="standing-badge">
              <span className="trophy">🏆</span>
              <div className="standing-text">
                <strong>You are currently ranked #{userStanding} of {allParticipants.length} Blue Jays!</strong>
                <span>Level up from {currentRank} to climb higher on your friend circle leaderboard.</span>
              </div>
            </div>
            <a className="primary-button" href="#recommendations">
              Stamp more spots <span>+</span>
            </a>
          </div>

          <div className="friends-layout">
            {/* Live Leaderboard */}
            <div className="leaderboard-card">
              <div className="leaderboard-header">
                <span>RANK & STUDENT</span>
                <span>LEVEL & POINTS</span>
              </div>
              <div className="leaderboard-list">
                {allParticipants.map((person, idx) => {
                  const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`
                  return (
                    <div
                      key={person.id}
                      className={`leaderboard-row ${person.isUser ? 'user-row' : ''}`}
                    >
                      <div className="row-left">
                        <span className="row-rank-num">{medal}</span>
                        <div className={`row-avatar ${person.isUser ? 'avatar-user' : ''}`}>
                          {person.name[0]}
                        </div>
                        <div className="row-info">
                          <strong>
                            {person.name}
                            {person.isUser && <span className="row-badge">YOU</span>}
                          </strong>
                          <span className="row-email">{person.email}</span>
                        </div>
                      </div>

                      <div className="row-right">
                        <div className="row-stats">
                          <strong>{person.points} pts</strong>
                          <small>{person.rank} • {person.visitedCount} spots</small>
                        </div>
                        {!person.isUser && (
                          <button
                            type="button"
                            className="cheer-btn"
                            onClick={() => cheerFriend(person.id)}
                            title="Cheer your friend on!"
                          >
                            👏 {person.cheers}
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Add Friend Card */}
            <div className="add-friend-card">
              <div>
                <h3>Add a Friend</h3>
                <p>
                  Invite your Hopkins study buddy or roommate to see where they rank and challenge them to explore Baltimore!
                </p>
                <form className="add-friend-form" onSubmit={handleAddFriend}>
                  <label>Friend's Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samira Patel"
                    value={newFriendName}
                    onChange={(e) => setNewFriendName(e.target.value)}
                  />

                  <label>Hopkins Email (@jh.edu)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. spatel@jh.edu"
                    value={newFriendEmail}
                    onChange={(e) => setNewFriendEmail(e.target.value)}
                  />

                  <button type="submit" className="add-friend-btn">
                    Add to Leaderboard +
                  </button>
                </form>

                {friendToast && <div className="friend-added-toast">{friendToast}</div>}
              </div>
            </div>
          </div>
        </section>

        {/* Passport Section */}
        <section className="passport-section" id="passport">
          <div className="passport-card">
            <InteractiveBlueJay posClass="passport-jay-pos" />
            <div className="passport-top">
              <span className="passport-kicker">JOHNS HOPKINS UNIVERSITY</span>
              <span className="passport-mark">HH</span>
            </div>
            <div className="passport-middle">
              <div>
                <span className="passport-label">DIGITAL J-CARD PASS</span>
                <h2>{loggedIn ? "Sofia's Hunt Pass" : 'Your Hunt Pass'}</h2>
                <p>{loggedIn ? 'Verified student identity • Active' : 'Log in to claim your verified student identity'}</p>
              </div>
            </div>
            <div className="passport-bottom">
              <span>{loggedIn ? 'VERIFIED JHU STUDENT' : 'AWAITING VERIFICATION'}</span>
              <span>{visited.length} STAMPS / {totalPoints} PTS</span>
            </div>
          </div>

          <div className="passport-copy">
            <p className="eyebrow">05 / TRAVEL PASSPORT</p>
            <h2>Keep your<br /><em>story moving.</em></h2>
            <p>
              Your passport collects every spot you visit across Homewood and Charm City. Log in to make your adventure log portable and unlock your digital J-Card seal!
            </p>
            <button className="primary-button" type="button" onClick={() => setAuthOpen(true)}>
              {loggedIn ? 'View account' : 'Login & verify'} <span>→</span>
            </button>
          </div>
        </section>
      </main>

      <footer>
        <span className="brand-mark">HH</span>
        <span>Made for the curious Blue Jay.</span>
        <span className="footer-right">Hopkins Hunt <i>✦</i></span>
      </footer>

      {authOpen && (
        <div className="modal-backdrop">
          <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
            <button className="modal-close" onClick={() => setAuthOpen(false)} aria-label="Close login">×</button>
            {authStep === 'credentials' ? (
              <form onSubmit={beginLogin}>
                <span className="modal-mark">HH</span>
                <p className="eyebrow">SECURE STUDENT ACCESS</p>
                <h2 id="auth-title">Sign in to<br /><em>your hunt.</em></h2>
                <p className="modal-copy">Use your Hopkins email to save points, unlock your J-Card pass, and keep your passport with you.</p>
                <label>
                  Hopkins email
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@jh.edu"
                  />
                </label>
                <label>
                  Password
                  <input type="password" required minLength="4" placeholder="••••••••" />
                </label>
                <button className="modal-submit" type="submit">
                  Continue to verification <span>→</span>
                </button>
                <small className="demo-note">Demo mode: any Hopkins email works.</small>
              </form>
            ) : (
              <form onSubmit={verifyCode}>
                <span className="modal-mark">02</span>
                <p className="eyebrow">SECOND-FACTOR VERIFICATION</p>
                <h2 id="auth-title">Check your<br /><em>device.</em></h2>
                <p className="modal-copy">Enter the six-digit code sent to your verified Hopkins device. This demo uses a safe local placeholder.</p>
                <label>
                  Verification code
                  <input
                    className="code-input"
                    inputMode="numeric"
                    maxLength="6"
                    required
                    value={code}
                    onChange={(event) => setCode(event.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                  />
                </label>
                {authError && <p className="auth-error">{authError}</p>}
                <button className="modal-submit" type="submit">
                  Verify identity <span>✓</span>
                </button>
                <button className="back-button" type="button" onClick={() => setAuthStep('credentials')}>
                  ← Back to sign in
                </button>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default App
