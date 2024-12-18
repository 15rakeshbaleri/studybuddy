import React, { useState, useEffect } from "react";
import Style from "./User_Profile.module.css";

function User_Profile() {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Simulate a backend API call
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auth/profile");
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-5">
        <p>Error loading user profile.</p>
      </div>
    );
  }

  return (
    <div className={`container mt-5 ${Style.userProfile}`}>
      <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
        <div className="card-body">
          <h5 className="card-title text-center">User Profile</h5>
          <hr />
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Account Created:</strong>{" "}
            {new Date(user.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default User_Profile;
