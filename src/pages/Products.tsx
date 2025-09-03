import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

type Plant = { id: string; name: string; price: number; category: string; thumbnail?: string }

const PLANTS: Plant[] = [
  { id: 'p1', name: 'Fiddle Leaf Fig', price: 45, category: 'Large' },
  { id: 'p2', name: 'Snake Plant', price: 30, category: 'Low Light' },
  { id: 'p3', name: 'Monstera', price: 50, category: 'Large' },
  { id: 'p4', name: 'ZZ Plant', price: 28, category: 'Low Light' },
  { id: 'p5', name: 'Pothos', price: 18, category: 'Trailing' },
  { id: 'p6', name: 'String of Hearts', price: 22, category: 'Trailing' },
]

export default function Products() {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState<Record<string, boolean>>({})

  const grouped = PLANTS.reduce<Record<string, Plant[]>>((acc, p) => {
    acc[p.category] = acc[p.category] || []
    acc[p.category].push(p)
    return acc
  }, {})

  function handleAdd(p: Plant) {
    dispatch(addItem({ id: p.id, name: p.name, price: p.price }))
    setDisabled((d) => ({ ...d, [p.id]: true }))
  }

  return (
    <main style={{padding:24}}>
      <h2>Products</h2>
      {Object.entries(grouped).map(([category, plants]) => (
        <section key={category} style={{marginBottom:20}}>
          <h3>{category}</h3>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            {plants.map((p) => (
              <div key={p.id} style={{border:'1px solid #ccc',padding:12,width:180}}>
                <div style={{height:100,background:'#f4f4f4',marginBottom:8}} />
                <div style={{fontWeight:600}}>{p.name}</div>
                <div>${p.price.toFixed(2)}</div>
                <div style={{marginTop:8}}>
                  <button onClick={() => handleAdd(p)} disabled={!!disabled[p.id]}>
                    {disabled[p.id] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
