import {Product} from './components/Product'
import {useProducts} from './hooks/products'
import {Loader} from  './components/loader'
import {Modal} from './components/Modal'
import { ErrorMessage } from './components/ErrorMessage'
import { CreateProduct } from './components/CreateProduct'

function App() {
  const {loading, error, products} = useProducts()

  return (
  <div className="container mx-w-2xl pt-5">
    { loading && <Loader /> }
    { error && <ErrorMessage error ={error}/> }
    { products.map(product => <Product product={product} key={product.id}/>) }
    
      <Modal title="Create new product">
          <CreateProduct />
      </Modal> 
  </div>
  )
}

export default App;





