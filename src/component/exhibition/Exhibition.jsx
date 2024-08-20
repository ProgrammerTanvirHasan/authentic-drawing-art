

const Exhibition = () => {
    return (
       

    <div className="lg:grid grid-cols-2 lg:py-24 px-4 text-white card bg-stone-900 shadow gap-8">
        <div className="grid-cols-1  ">
              <h2 className="text-2xl text-orange-200">Explore Art</h2>
              <h2 className="text-6xl">On View At</h2>
              <h2 className="text-6xl text-orange-300">Pixart Exhibits</h2>
              <button className="border 2px solid white p-2 mt-2">View All</button>
        </div>

        <div className="grid-cols-1 pr-8 ">
        <p className="text-white ">Pixart Exhibits is a contemporary exhibition space where art and technology converge to showcase extraordinary artworks. Here, you can experience a variety of innovative art forms, including digital art, interactive installations, and VR experiences. Pixart Exhibits serves as a fantastic destination for art enthusiasts to discover new facets of creativity.</p>
        <div className=" lg:flex justify-around mt-4 gap-8">
        <div>
        <h2 className="text-orange-300 text-6xl">79+</h2>
        <p className="text-2xl font-bold">Exhibitions</p>
        </div>
        <div>
        <h2 className="text-orange-300 text-6xl">993+</h2>
        <p className="text-2xl font-bold">Visitors</p>
        </div>
        <div>
         <h2 className="text-orange-300 text-6xl">19+</h2>
        <p className="text-2xl font-bold">Awards</p>
        </div>
        <div>
         <h2 className="text-orange-300 text-6xl">790+</h2>
        <p className="text-2xl font-bold">Collection</p>
        </div>

        </div>
        </div>
    </div>


    );
};

export default Exhibition;




