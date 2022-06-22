import React, { useState } from "react";
import { AddressModal } from "../../pages/cart/AddressModal";

const Address = () => {
    const [userAddress, setUserAddress] = useState({
        firstName: "shanu",
        lastName: "agrawal",
        address: "old post office road",
        city: "guna",
        state: "madhya pradesh",
        contactNumber: 9424431504,
      });
  return (
    <div className="delivery-box flex-row">
      <div>
        <p className="medium-text bold">{`${userAddress.firstName} ${userAddress.lastName}`}</p>
        <p className="small-text">{userAddress.address}</p>
        <p className="small-text">{`${userAddress.city}, ${userAddress.state}`}</p>
        <p className="small-text">{userAddress.contactNumber}</p>
      </div>
      <AddressModal setUserAddress={setUserAddress} />
    </div>
  );
};

export { Address };
