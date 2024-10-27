import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Info = ({ info, index }) => {
  const { _id, item, rating, Price, email } = info;
  return (
    <div>
      {
        <div className="grid grid-cols-6 lg:gap-4 text-white mb-4">
          <td className="text-center">{index + 1}</td>
          <td className="mb-4 ">{item}</td>
          <td>{email}</td>
          <td className=" text-center">{rating}</td>
          <td className="card-title  lg:ml-16 mb-10 ">
            {Price}
            <FaDollarSign></FaDollarSign>{" "}
          </td>

          <Link to={`/details/${_id}`}>
            <button className="bg-green-800 text-white lg:font-bold  rounded-xl lg:p-2">
              ViewDetails
            </button>
          </Link>
        </div>
      }
    </div>
  );
};

export default Info;
