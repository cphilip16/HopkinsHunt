import { useState } from 'react'
import './App.css'

const places = [
  { id: 'jhu-library', name: 'George Peabody Library', area: 'Mount Vernon', type: 'Landmark', points: 80, icon: '▦', color: 'gold', description: 'A quiet cathedral of books and one of Baltimore\'s most unforgettable rooms.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85' },
  { id: 'charles-village', name: 'The Black & Missing mural', area: 'Charles Village', type: 'Around campus', points: 40, icon: '✦', color: 'coral', description: 'Find the colorful rowhome blocks and the stories painted across them.', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=85' },
  { id: 'jhu-hopkins', name: 'The Johns Hopkins Beach', area: 'Homewood campus', type: 'On campus', points: 20, icon: '⌁', color: 'blue', description: 'Stretch out on the grass, grab a friend, and take the scenic shortcut through campus.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85' },
  { id: 'wyman-park', name: 'Wyman Park Dell', area: 'Charles Village', type: 'Around campus', points: 30, icon: '⌂', color: 'green', description: 'A leafy pocket for a walk, picnic, or a reset between classes.', image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=900&q=85' },
  { id: 'bma', name: 'Baltimore Museum of Art', area: 'Remington', type: 'Around campus', points: 60, icon: '◈', color: 'purple', description: 'Meet Matisse, stroll the sculpture garden, and make an afternoon of it.', image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=85' },
  { id: 'union-wharf', name: 'Union Wharf', area: 'Fells Point', type: 'Baltimore', points: 100, icon: '≈', color: 'navy', description: 'Follow the water to cobblestones, small plates, and a different side of the city.', image: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?auto=format&fit=crop&w=900&q=85' },
]

const ranks = [
  { name: 'Newbie', min: 0 },
  { name: 'Explorer', min: 100 },
  { name: 'Pro', min: 250 },
  { name: 'Local legend', min: 500 },
]

function App() {
  const [visited, setVisited] = useState([])
  const [filter, setFilter] = useState('All spots')
  const [search, setSearch] = useState('')
  const totalPoints = visited.reduce((sum, id) => sum + places.find((place) => place.id === id).points, 0)
  const currentRank = [...ranks].reverse().find((rank) => totalPoints >= rank.min) || ranks[0]
  const nextRank = ranks[ranks.indexOf(currentRank) + 1]
  const progress = nextRank ? Math.min(100, ((totalPoints - currentRank.min) / (nextRank.min - currentRank.min)) * 100) : 100
  const visiblePlaces = places.filter((place) => (filter === 'All spots' || place.type === filter) && `${place.name} ${place.area}`.toLowerCase().includes(search.toLowerCase()))
  function toggleVisited(id) { setVisited((current) => current.includes(id) ? current.filter((placeId) => placeId !== id) : [...current, id]) }

  return (
    <div className="app-shell">
      <header className="topbar"><a className="brand" href="#top" aria-label="Hopkins Hunt home"><span className="brand-mark">HH</span><span>Hopkins Hunt</span></a><nav><a className="active" href="#hunt">Explore</a><a href="#how-it-works">How it works</a></nav><button className="profile-button" type="button"><span className="profile-avatar">?</span> My profile</button></header>
      <main id="top">
        <section className="hero-section"><div className="hero-copy"><p className="eyebrow">Your campus, unlocked <span>✦</span></p><h1>Go somewhere<br /><em>worth talking about.</em></h1><p className="hero-description">Hopkins Hunt turns your Baltimore to-do list into a game. Visit great places, collect points, and become a local in the making.</p><a className="primary-button" href="#hunt">Start exploring <span>↓</span></a></div><div className="hero-art" aria-label="A view of Johns Hopkins campus"><div className="sun"></div><div className="art-label">JHU / BALTIMORE<br /><strong>EST. 1876</strong></div><div className="art-stamp">✦</div></div></section>
        <section className="progress-section" aria-label="Your progress"><div className="progress-intro"><span className="tiny-label">YOUR HUNT</span><strong>{totalPoints} <small>PTS</small></strong><span className="rank-name">{currentRank.name}</span></div><div className="progress-bar-wrap"><div className="progress-meta"><span>{nextRank ? `${nextRank.min - totalPoints} pts to ${nextRank.name}` : 'Top rank reached'}</span><span>{visited.length} / {places.length} visited</span></div><div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }}></div></div></div><div className="next-rank"><span>Next up</span><strong>{nextRank?.name || 'Local legend'} <i>→</i></strong></div></section>
        <section className="hunt-section" id="hunt"><div className="section-heading"><div><p className="eyebrow">The hunt board</p><h2>Pick a place.<br /><em>Make a memory.</em></h2></div><p className="section-note">Six spots to start. More drops every month.<br />There is a whole city out there.</p></div><div className="controls"><div className="filter-tabs">{['All spots', 'On campus', 'Around campus', 'Baltimore'].map((tab) => <button key={tab} type="button" className={filter === tab ? 'selected' : ''} onClick={() => setFilter(tab)}>{tab}</button>)}</div><label className="search"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search places" /></label></div><div className="place-grid">{visiblePlaces.map((place) => { const isVisited = visited.includes(place.id); return <article className={`place-card ${isVisited ? 'visited' : ''}`} key={place.id}><div className="place-image" style={{ backgroundImage: `url(${place.image})` }}><span className={`place-icon ${place.color}`}>{place.icon}</span><span className="points">+{place.points} pts</span>{isVisited && <span className="visited-stamp">Visited ✓</span>}</div><div className="place-content"><div className="place-meta"><span>{place.type}</span><span>{place.area}</span></div><h3>{place.name}</h3><p>{place.description}</p><button className={`visit-button ${isVisited ? 'done' : ''}`} type="button" onClick={() => toggleVisited(place.id)}>{isVisited ? 'Visited' : 'Mark as visited'} <span>{isVisited ? '✓' : '+'}</span></button></div></article> })}</div>{visiblePlaces.length === 0 && <div className="empty-state">No places match that search yet.</div>}</section>
        <section className="how-section" id="how-it-works"><div><p className="eyebrow">How it works</p><h2>Small adventures.<br /><em>Real momentum.</em></h2></div><div className="how-steps"><div><b>01</b><strong>Choose your next stop</strong><p>Browse by neighborhood, vibe, or how many points you want to chase.</p></div><div><b>02</b><strong>Go out and explore</strong><p>Bring a friend, take a photo, and make the most of your city.</p></div><div><b>03</b><strong>Level up your hunt</strong><p>Keep collecting points until “local legend” feels like a fair title.</p></div></div></section>
      </main>
      <footer><span className="brand-mark">HH</span><span>Made for the curious Blue Jay.</span><span className="footer-right">Hopkins Hunt <i>✦</i></span></footer>
    </div>
  )
}

export default App
