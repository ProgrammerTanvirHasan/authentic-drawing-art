import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ data, myCard, setMyCard }) => {
  const {
    _id,
    item,
    customization,
    Subcategory,
    image,
    Price,
    Time,
    rating,
    stock,
  } = data;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/items/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = myCard.filter((card) => card._id !== _id);
              setMyCard(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="card border-x-4 bg-blue-100 w-96 h-[500px] mx-auto">
          <figure>
            <img src={image} alt={item} />
          </figure>

          <div className="flex ">
            <p className="text-orange-400 text-xl">{item}</p>
            <h2 className="card-title ml-8 mr-4 text-orange-400">
              Rating: {rating}
            </h2>
          </div>
          <div>
            <p className="font-bold text-2xl">{Subcategory}</p>
          </div>

          <div className="flex justify-between mr-4 ">
            <p>
              Stock: <span className="text-sky-600">{stock}</span>
            </p>
          </div>

          <p>
            Customization: <span className="text-sky-600">{customization}</span>
          </p>

          <div className="flex justify-evenly">
            <h2 className="card-title text-2xl ml-2">
              <IoMdTime /> {Time} Min
            </h2>
            <h2 className="card-title text-6xl ml-2 font-bold text-amber-600">
              {Price}
              <FaDollarSign />
            </h2>
          </div>

          <div className="flex justify-end gap-4">
            <Link to={`/update/${_id}`}>
              <button className="btn text-green-600 bg-slate-950 text-lg">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-red-600 bg-slate-950 text-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    customization: PropTypes.string,
    Subcategory: PropTypes.string,
    image: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Time: PropTypes.number.isRequired,
    rating: PropTypes.number,
    stock: PropTypes.number,
  }).isRequired,

  myCard: PropTypes.arrayOf().isRequired,

  setMyCard: PropTypes.func.isRequired,
};

export default Card;
