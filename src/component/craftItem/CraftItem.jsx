import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import {Link} from 'react-router-dom';
const CraftItem = ({card}) => {
  const {_id,item,Subcategory,customization,image,Time,Price,rating,stock}=card;
  return (
    <div>
      
      <div>
          <div className="card bg-slate-100 w-96 shadow-xl h-96 mx-auto">
  <figure>
    <img
      src={image}
       />
  </figure>
  <div className="flex justify-end">
  <p className="text-sky-600">{item}</p>
    <h2 className="card-title ml-8 mr-4 text-orange-400">Rating:{rating}</h2>
</div>
<div className="ml-2">
   
    <p className="font-bold text-2xl">{Subcategory}</p>
</div>

<div className="flex justify-between mr-4 ml-2">
    <p> <span className="font-bold "></span>Stock:   <span className="text-sky-600">{stock}</span></p>
    <p> <span className="font-bold"></span>Customization: <span className="text-sky-600">{customization}</span> </p>
</div>
 
<div className="flex gap-8 ">
    <h2 className="card-title text-2xl ml-2 font-bold text-amber-600">{Price}<FaDollarSign ></FaDollarSign> </h2>
    <h2 className="card-title text-2xl ml-2"> <IoMdTime></IoMdTime> {Time} Min</h2>
</div>




<div className="flex justify-end gap-4">

<Link to={`/details/${_id}`}>
<button className="btn text-green-600 text-lg">View Details</button>
</Link>
</div>
 
</div>
    </div>
    </div>
  );
};

export default CraftItem;