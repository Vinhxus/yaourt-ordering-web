import { useState } from 'react'
import './index.css'
import {NavBar} from './components/navBar'
import { Header } from './components/Header'
import {BestSellerGrid, ProductGrid, type Product} from './ProductGrid'
import Yaourt from './Yaourt'
import Pict from './Pict'
import tr from './assets/tr.png'
import Special from './Special'

function App() {
  const [selected, setSelected] = useState<Product | null>(null);
  
  return (
    <>
      <NavBar/>
      <Header/>
      <Yaourt/>
      <div className="flex flex-1 best-seller px-10 pt-3 pb-5">
          <div className="card-1 flex w-full gap-3 pr-5">
              <div className="flex flex-col">
                  <span className="text-center text-amber-500 font-bold text-lg"> Best seller </span>
                  <BestSellerGrid select={selected} onSelect = {setSelected}/> 
              </div>
              <Pict pic={tr} selectedProduct={selected}/>
          </div>
      </div>
      <ProductGrid select={selected} onSelect = {setSelected}/>
      <Special/>
    </>
  )
}

export default App


