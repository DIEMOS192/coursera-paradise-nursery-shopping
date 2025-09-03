import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <main style={{padding:24,display:'grid',placeItems:'center',minHeight:'60vh'}}>
      <div style={{maxWidth:900,textAlign:'center'}}>
        <h1 style={{fontSize:48,margin:8}}>Paradise Nursery</h1>
        <p style={{fontSize:18,opacity:0.9}}>We grow and ship healthy houseplants ready to brighten your home.</p>
        <p style={{marginTop:24}}>
          <Link to="/products">
            <button>Get Started</button>
          </Link>
        </p>
      </div>
    </main>
  )
}
