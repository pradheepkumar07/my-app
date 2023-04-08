import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState} from "react";
import apiCall from "../services/apiCall";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { totalItems, data } = useSelector(storeObj => {
    return {
      totalItems: storeObj.cart?.length,
      data: storeObj.cart
    }
  })
  useEffect(() => {
    apiCall.get('/wishList',data)
  }, [])

  return (
    <div>
      <h1>Wish List</h1>
      <h2>Total Items: {totalItems}</h2>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
          <span>#</span>
          <span>Image</span>
          <span>Title</span>
          <span>Description</span>
          <span>Price</span>
        </div>
        {
          data?.map((item, index) => {
            return (
              <div key={`item-${index}-${item.id}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
                <span>{index+1}</span>
                <img src={item.image} alt={item.title} height={40} width='auto' />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>₹ {item.price}</p>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Wishlist;