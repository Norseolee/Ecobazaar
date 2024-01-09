import React from "react";

const User_Settings = () => {
  return (
    <div>
      <div className="Settings_Base">
        <div className="Account_Setting_Base">
          <div className="Account_Title">
            <h3>Account Settings</h3>
          </div>
          <div className="Account_Form_Base">
            <div className="Account_Form">
              <div>
                <label htmlFor="First_Name">First name</label>
                <input
                  type="text"
                  name="First_Name"
                  id="First_Name"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Last_Name">Last name</label>
                <input
                  type="text"
                  name="Last_Name"
                  id="Last_Name"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Phone_Number">Phone Number</label>
                <input type="text" className="Input_Design" />
              </div>
            </div>
            <div className="Picture_Form">
              <img src="" id="Profile_Picture" alt="" />
              <input type="file" name="" id="" hidden />
              <button className="Btn-Design">Choose Image</button>
            </div>
            <button className="Btn-Design">Save Changes</button>
          </div>
        </div>

        <div className="Account_Billing_Base">
          <div className="Billing_Title">
            <h3>Billing Address</h3>
          </div>
          <div className="Billing_Form">
            <div>
              <div>
                <label htmlFor="First_Name_Billing">First name</label>
                <input
                  type="text"
                  name="First_Name_Billing"
                  id="First_Name_Billing"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Last_Name_Billing">Last name</label>
                <input
                  type="text"
                  name="Last_Name_Billing"
                  id="Last_Name_Billing"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Company_Name_Billing">Company Name</label>
                <input
                  type="text"
                  name="Company_Name_Billing"
                  id="Company_Name_Billing"
                  className="Input_Design"
                />
              </div>
            </div>
            <div>
              <label htmlFor="Street_Address_Billing">Street Address</label>
              <input
                type="text"
                name="Street_Address_Billing"
                id="Street_Address_Billing"
                className="Input_Design"
              />
            </div>
            <div>
              <div>
                <label htmlFor="Country_Region">Country/Region</label>
                <input
                  type="text"
                  name="Country_Region"
                  id="Country_Region"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="States">States</label>
                <input
                  type="text"
                  name="States"
                  id="States"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Zip_Code">Zip Code</label>
                <input
                  type="text"
                  name="Zip_Code"
                  id="Zip_Code"
                  className="Input_Design"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="Email_Billing">Email</label>
                <input
                  type="text"
                  name="Email_Billing"
                  id="Email_Billing"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Phone_Billing">Phone</label>
                <input
                  type="text"
                  name="Phone_Billing"
                  id="Phone_Billing"
                  className="Input_Design"
                />
              </div>
            </div>
            <button className="Input-Design">Save Changes</button>
          </div>
        </div>

        <div className="Account_ChangePass_Base">
          <div className="ChangePass_Title">
            <h3>Change Password</h3>
          </div>
          <div className="ChangePass_Form">
            <div>
              <label htmlFor="Current_Password">Password</label>
              <input
                type="text"
                name="Current_Password"
                id="Current_Password"
                className="Input_Design"
              />
            </div>
            <div>
              <div>
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  className="Input_Design"
                />
              </div>
              <div>
                <label htmlFor="Current_Password">Confirm Password</label>
                <input
                  type="password"
                  name="Current_Password"
                  id="Current_Password"
                  className="Input_Design"
                />
              </div>
            </div>
            <button className="Btn-Design">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Settings;
