import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [details] = useState({
    name: "Teeraphan Thienpromthong",
    age: 20,
    Nickname: "GENN",
    birthday: "September 7, 2004", 
    location: "Bangkok, Thailand",
    ID: "66075063",
    profession: "Front End Software Development",
    interests: ["Coding", "Music", "Movies", "Games"],
    bio: "I’m someone who loves to dive into different kinds of creative and fun activities.I’m passionate about playing video games, watching movies, listening to music, and exploring the endless possibilities in coding.",
    additionalInfo:
      "Gaming is a big part of my life—whether it's trying out new releases or getting lost in classic titles, I enjoy the thrill and the strategy that gaming brings. Watching movies is another way I love to unwind and get inspired. I’m always up for a great film recommendation, whether it's a popular blockbuster or an underrated indie gem.When I'm not gaming or watching movies, you'll often find me listening to music, discovering new genres, or revisiting favorite playlists. Music is my go-to for creativity and relaxation.",
  });

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-image-details">
          <img
            src="./public/profile.jpg"
            alt="Profile"
            className="intro-image"
          />

          <div className="intro-details">
            <p>
              <strong>Nickname:</strong> {details.Nickname}
            </p>
            <p>
              <strong>Age:</strong> {details.age}
            </p>
            <p>
              <strong>Birthday:</strong> {details.birthday}
            </p>
            <p>
              <strong>Location:</strong> {details.location}
            </p>
            <p>
              <strong>ID:</strong> {details.ID}
            </p>
          </div>
        </div>

        {/* Text content */}
        <div className="intro-text">
          <h1 className="intro-heading">Hello, I'm {details.name}!</h1>
          <h2 className="intro-profession">{details.profession}</h2>
          <p className="intro-bio">{details.bio}</p>

          <h3 className="intro-interests-title">Interests:</h3>
          <ul className="intro-interests-list">
            {details.interests.map((interest, index) => (
              <li key={index} className="intro-interest-item">
                {interest}
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button
              className="intro-button "
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Learn More About Me"}
            </button>

            {showMore && (
              <div className="additional-info">
                <p>{details.additionalInfo}</p>
              </div>
            )}

            <button
              className="intro-button link-button "
              onClick={() =>
                window.open("https://www.instagram.com/ttrpnn_/", "_blank")
              }
            >
              Follow My Social
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
