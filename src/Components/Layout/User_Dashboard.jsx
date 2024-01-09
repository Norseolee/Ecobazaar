import "../CSS/User/User_Dashboard.css";

const User_Dashboard = () => {
  return (
    <div style={{ flex: 1 }}>
      <div className="Dashboard_Base">
        <div className="Dashboard_Profile_Billing">
          <div className="Dashboard_Profile">
            <img src="" alt="" />
            <h3>Name</h3>
            <p className="Btn">Edit Profile</p>
          </div>
          <div className="Dashboard_Billing">
            <p>Billing Address</p>
            <h3>Dainne Russel</h3>
            <p>4104 Parker Rd. Alltentown, New Mexico 31134</p>
            <p>Address</p>
            <p>(671) 555-0110</p>
            <p className="Btn">Edit Address</p>
          </div>
        </div>
        <div className="Dashboard_OrderHistory">
          <div className="DashboardOrderHistory_Base">
            <h3>Recent Order History</h3>
            <p className="Btn">View All</p>
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
              <p>#738</p>
              <p>8 Sep, 2020</p>
              <p>$135.00 (5 products)</p>
              <p>processing</p>
              <p className="Btn">View Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Dashboard;
