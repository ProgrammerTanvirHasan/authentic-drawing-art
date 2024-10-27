const UpComing = () => {
  return (
    <div className="card shadow px-2">
      <div className="text-center">
        <h2 className="text-orange-300">What's Going On</h2>
        <p className="text-5xl text-white">Upcoming Exhibitions</p>
      </div>

      <div className="lg:grid grid-cols-4 gap-4 mt-4">
        <div>
          <img
            className="h-96 ml-8"
            src="https://i.ibb.co/HB7FzdG/digital-art-style-boxing-day-celebration-23-2151040866.jpg"
            alt=""
          />
          <div></div>
        </div>

        <div>
          <img
            className="h-96"
            src="https://i.ibb.co/QcrkPX4/drawings-about-legal-profession-23-2151190717.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-96"
            src="https://i.ibb.co/9GBdxq9/jesus-crist-cross-masterpiece-generative-ai-70251-20450.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-96"
            src="https://i.ibb.co/hZBHYvS/artistic-illustration-tennis-player-action-1110958-42258.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="lg:flex justify-between mt-4">
        <div className="text-white lg:mr-8">
          <p>
            We are thrilled to announce our upcoming exhibition at Pixart
            Exhibits, where cutting-edge art meets innovation. This event
            promises to be a captivating blend of digital artistry, interactive
            installations, and immersive VR experiences. Featuring renowned
            artists and emerging talents, the exhibition will explore themes of
            technology, human interaction, and the future of creativity.
          </p>
        </div>
        <div>
          <button className="bg-orange-300   text-xl p-2 rounded-2xl text-black">
            ViewAll
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
