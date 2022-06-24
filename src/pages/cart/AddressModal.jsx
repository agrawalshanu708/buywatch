import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import "./AddressModal.css";
const AddressModal = ({ setUserAddress }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAdd, setUserAdd] = useState({
    userFirstName: "shanu",
    userLastName: "agrawal",
    userAddress: "old post office road",
    userCity: "guna",
    userState: "madhya pradesh",
    userContactNumber: 9424431504,
  });

  const saveAddressHnadler = () => {
    setUserAddress((prev) => ({
      ...prev,
      firstName: userAdd.userFirstName,
      lastName: userAdd.userLastName,
      address: userAdd.userAddress,
      city: userAdd.userCity,
      state: userAdd.userState,
      contactNumber: userAdd.userContactNumber,
    }));
    setIsModalOpen(false);
  };
  return (
    <>
      <FiEdit2
        fontSize="1.5rem"
        className="cursor"
        onClick={() => setIsModalOpen(!isModalOpen)}
      />
      { isModalOpen && <div className="layer">
      {isModalOpen && (
        <div className="modal flex-col flex-center">
          <h3>Enter Your Delivery Address.</h3>
          <input
            className="add_input"
            placeholder="Enter your First Name"
            value={userAdd.userFirstName}
            onChange={(e) =>
              setUserAdd((prev) => ({ ...prev, userFirstName: e.target.value }))
            }
          />
          <input
            className="add_input"
            placeholder="Enter your Last Name"
            value={userAdd.userLastName}
            onChange={(e) =>
              setUserAdd((prev) => ({ ...prev, userLastName: e.target.value }))
            }
          />
          <input
            className="add_input"
            placeholder="Enter Address"
            value={userAdd.userAddress}
            onChange={(e) =>
              setUserAdd((prev) => ({ ...prev, userAddress: e.target.value }))
            }
          />
          <input
            className="add_input"
            placeholder="Enter City"
            value={userAdd.userCity}
            onChange={(e) =>
              setUserAdd((prev) => ({ ...prev, userCity: e.target.value }))
            }
          />
          <input
            className="add_input"
            placeholder="Enter state"
            value={userAdd.userState}
            onChange={(e) =>
              setUserAdd((prev) => ({ ...prev, userState: e.target.value }))
            }
          />
          <input
            className="add_input"
            placeholder="Enter contact Number"
            type="number"
            value={userAdd.userContactNumber}
            onChange={(e) =>
              setUserAdd((prev) => ({
                ...prev,
                userContactNumber: e.target.value,
              }))
            }
          />
          <button
            className="btn btn-primary cursor"
            onClick={saveAddressHnadler}
          >
            Save
          </button>
        </div>
      )}
      </div>}
    </>
  );
};

export { AddressModal };
