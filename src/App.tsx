import { useState } from 'react'
import './index.css'
import {ProductGrid, type Product} from './ProductGrid'
import Yaourt from './Yaourt'
import Pict from './Pict'
import Special from './Special'

function App() {
  const [selected, setSelected] = useState<Product | null>(null);
  
  return (
    <>
      <main className="px-[100px]"> 
        <Yaourt/>
        <div className="flex flex-1 best-seller px-10 pt-3 pb-5">
            <div className="card-1 flex w-full gap-3 px-7 ">
                <Pict selectedProduct={selected} pic=''/>
            </div>
        </div>
        <ProductGrid select={selected} onSelect = {setSelected}/> 
        <Special/>
      </main>
    </>
  )
}

export default App


