import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CraftItem = ({ card }) => {
  const {
    _id,
    item,
    Subcategory,
    customization,
    image,
    Time,
    Price,
    rating,
    stock,
  } = card;
  return (
    <div>
      <div>
        <div className="card border-x-4  bg-blue-100 w-96  h-[500px] mx-auto">
          <figure>
            <img src={image} />
          </figure>

          <div className="flex ">
            <p className="text-orange-400 text-xl">{item}</p>
            <h2 className="card-title ml-8 mr-4 text-orange-400">
              Rating:{rating}
            </h2>
          </div>
          <div>
            <p className="font-bold text-2xl">{Subcategory}</p>
          </div>

          <div className="flex justify-between mr-4 ">
            <p>
              {" "}
              <span className="font-bold "></span>Stock:{" "}
              <span className="text-sky-600">{stock}</span>
            </p>
          </div>

          <p>
            {" "}
            <span className="font-bold"></span>Customization:{" "}
            <span className="text-sky-600">{customization}</span>{" "}
          </p>

          <div className="flex justify-evenly">
            <h2 className="card-title text-2xl ml-2">
              {" "}
              <IoMdTime></IoMdTime> {Time} Min
            </h2>
            <h2 className="card-title text-4xl ml-2 font-bold text-amber-600">
              {Price}
              <FaDollarSign className="text-5xl text-black"></FaDollarSign>{" "}
            </h2>
          </div>

          <div className="flex justify-end gap-4 mt-2">
            <Link to={`/details/${_id}`}>
              <button className="glass bg-black px-2 rounded-xl text-green-600 text-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
// CraftItem.propTypes = {
//   card: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     item: PropTypes.string.isRequired,
//     Subcategory: PropTypes.string.isRequired,
//     customization: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     Time: PropTypes.number.isRequired,
//     Price: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//     stock: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default CraftItem;
