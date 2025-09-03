import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function Header() {
  const items = useSelector((s: RootState) => s.cart.items)
  const totalCount = Object.values(items).reduce((sum, it) => sum + it.qty, 0)

  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:16}}>
      <div>
        <Link to="/" style={{textDecoration:'none',fontWeight:700,fontSize:18}}>Paradise Nursery</Link>
      </div>
      <nav style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <div aria-label="cart" style={{display:'flex',alignItems:'center',gap:8}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 6h15l-1.5 9h-13z"></path><circle cx="9" cy="20" r="1"></circle><circle cx="19" cy="20" r="1"></circle></svg>
          <span>{totalCount}</span>
        </div>
      </nav>
    </header>
  )
}
