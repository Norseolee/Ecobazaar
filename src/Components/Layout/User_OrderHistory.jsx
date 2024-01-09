import "../CSS/User/User_OrderHistory.css";

const User_OrderHistory = () => {
  return (
    <div style={{ flex: 1 }}>
      <div className="OrderHistory_Base">
        <div className="OrderHistory_Title">
          <h3>Order History</h3>
        </div>
        <div className="Table">
          <div className="Table_Title">
            <p>ORDER ID</p>
            <p>DATE</p>
            <p>TOTAL</p>
            <p>STATUS</p>
            <p> </p>
          </div>
          <div className="Table_Items">
            <p>#3933</p>
            <p>4 April, 2021</p>
            <p>$135.00 (5 Products)</p>
            <p>Processing</p>
            <p className="Btn">View Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_OrderHistory;
