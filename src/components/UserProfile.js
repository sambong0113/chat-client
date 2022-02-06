import React from 'react';
import '../stylesheets/UserProfile.css';

const UserProfile = () => {
  return (
    <div id="profileMain">
      <div id="imagePane">
        <div id="profileImage" />
      </div>
      <div id="detailPane">
        <div id="username">username</div>
        <div id="profileText">profileText</div>
      </div>
    </div>
  );
};

export default UserProfile;
