import React, { useState } from "react";

const ProfileEditor = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Simple Profile Editor</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Current Profile</h3>
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
      </div>
    </div>
  );
};

export default ProfileEditor;
