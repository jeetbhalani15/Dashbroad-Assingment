import React from "react";
import Overview from "../Dashboard/overView";
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <>
      <div class="flex flex-col gap-6">
        <div>
          <Overview />
        </div>
        <div>
          <OrderTable />
        </div>
      </div>
    </>
  );
};

export default Orders;
