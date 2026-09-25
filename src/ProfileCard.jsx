import { useState } from "react";
import avatarImg from "./assets/avatar.jpg";
import "./ProfileCard.css";

export function ProfileCard({
  name = "Mariam Katchkatchashvili",
  handle = "@katcho",
  bio = "Investigative Journalist",
  following = 0,
  followers = 0,
  website = "https://github.com/kachkachashvilimariam-cloud",
  location = "Georgia, Tbilisi",
  avatarUrl = avatarImg,
}) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "card-container dark" : "card-container"}>
      <div className="card-banner">
        <span>Design + Code</span>
      </div>

      <div className="card-body">
        <div className="avatar-wrapper">
          <img src={avatarUrl} alt={name} className="avatar" />
          <button className="btn-follow">Follow</button>
        </div>

        <div className="user-info">
          <h3 className="user-name">{name}</h3>
          <p className="user-handle">{handle}</p>
        </div>

        <p className="user-bio">{bio}</p>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">{following}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{followers}</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>

        <div className="meta-info">
          <div>
            🔗{" "}
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="meta-link"
            >
              {website}
            </a>
          </div>
          <div>📍 {location}</div>
        </div>

        <button className="theme-toggle-btn" onClick={() => setIsDark(!isDark)}>
          Toggle Theme ({isDark ? "Dark" : "Light"})
        </button>
      </div>
    </div>
  );
}
