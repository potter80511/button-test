import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { loadOrders } from 'src/features/orders/actions/ordersAction';

const TestContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  return <div>test</div>
};

export default TestContainer;
