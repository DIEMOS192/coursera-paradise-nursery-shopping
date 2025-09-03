import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { increaseQty, decreaseQty, removeItem } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const items = useSelector((s: RootState) => s.cart.items)
  const dispatch = useDispatch()
  const list = Object.values(items)
  const totalItems = list.reduce((sum, it) => sum + it.qty, 0)
  const totalCost = list.reduce((sum, it) => sum + it.qty * it.price, 0)

  return (
    <main style={{padding:24}}>
      <h2>Shopping Cart</h2>
      <div>Total items: {totalItems}</div>
      <div>Total cost: ${totalCost.toFixed(2)}</div>

      <div style={{marginTop:16}}>
        {list.length === 0 && <p>Your cart is empty.</p>}
        {list.map((it) => (
          <div key={it.id} style={{display:'flex',gap:12,alignItems:'center',borderBottom:'1px solid #eee',padding:'8px 0'}}>
            <div style={{width:80,height:60,background:'#f4f4f4'}} />
            <div style={{flex:1}}>
              <div style={{fontWeight:600}}>{it.name}</div>
              <div>${it.price.toFixed(2)} each</div>
            </div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button onClick={() => dispatch(decreaseQty(it.id))}>-</button>
              <div>{it.qty}</div>
              <button onClick={() => dispatch(increaseQty(it.id))}>+</button>
            </div>
            <div>
              <button onClick={() => dispatch(removeItem(it.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:20,display:'flex',gap:12}}>
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
        <Link to="/products"><button>Continue Shopping</button></Link>
      </div>
    </main>
  )
}
