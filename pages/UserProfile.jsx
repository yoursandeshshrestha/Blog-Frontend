import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import axios from "axios";
import { RiImageEditLine } from "react-icons/ri";

import { UserContext } from "../src/context/userContext";

function UserProfile() {
  const [avatar, setAvatar] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/${currentUser.id}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const { name, email, avatar } = response.data;
        setName(name);
        setEmail(email);
        setAvatar(avatar);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, [currentUser.id, token]);

  const changeAvatarHandler = async () => {
    if (!avatarFile) return;
    setIsAvatarTouched(false);
    try {
      const postData = new FormData();
      postData.append("avatar", avatarFile);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/change-avatar`,
        postData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      setAvatar(response.data.avatar);
      setSuccess("Avatar updated successfully");
    } catch (error) {
      console.error("Error changing avatar:", error);
      setError("Failed to change avatar");
    }
  };

  const updateUserDetails = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name,
        email,
        currentPassword,
        newPassword,
      };

      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/users/edit-user`,
        userData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        setSuccess("Details updated successfully");
        setError("");
      }
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error);
      setError(error.response?.data.message || "An error occurred");
    }
  };

  return (
    <section className="profile">
      <div className="container profile__container">
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img
                src={
                  avatarFile
                    ? URL.createObjectURL(avatarFile)
                    : `${import.meta.env.VITE_ASSETS_URL}/uploads/${avatar}`
                }
                alt="avatar"
              />
            </div>
            <form className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => {
                  setAvatarFile(e.target.files[0]);
                  setIsAvatarTouched(true);
                  setError(false);
                  setSuccess(false);
                }}
              />
              <label htmlFor="avatar">
                <RiImageEditLine />
              </label>
            </form>
            {isAvatarTouched && (
              <button
                className="profile__avatar-btn"
                onClick={changeAvatarHandler}
              >
                <FaCheck />
              </button>
            )}
          </div>
          <h1>{currentUser.email}</h1>

          <form className="form profile__form" onSubmit={updateUserDetails}>
            {error && <p className="form__error-message">{error}</p>}
            {success && <p className="form__success-message">{success}</p>}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit" className="btn primary">
              Update details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
