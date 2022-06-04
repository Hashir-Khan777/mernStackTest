import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components";
import { productsAction } from "../../store/actions";
import "./css/index.css";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector((state) => state.products);

  console.log(loading, products, error);

  useEffect(() => {
    dispatch(productsAction.getAllProducts());
  }, [dispatch]);

  return (
    <div className="main">
      {loading ? (
        <div>Loading...</div>
      ) : products.length > 0 ? (
        <div className="cards">
          {products?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default Home;
