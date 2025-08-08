import useProduct from '../../hooks/useProduct.js';
import Loading from '../Loading/Loading';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const { product, loading } = useProduct(productId);

  return (
    <div className='item-detail-container'>
      {
        loading ? (
          <Loading />
        ) : product ? (
          <ItemDetail product={product} />
        ) : (
           <div className="product-not-found">
                    <h2>❌ Producto no encontrado</h2>
                    <p>El producto que buscas no existe o fue retirado.</p>
          </div>
        )
      }
    </div>
  )
}

export default ItemDetailContainer