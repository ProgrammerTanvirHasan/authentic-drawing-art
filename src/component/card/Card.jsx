

import { FaDollarSign } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Card = ({ data,myCard,setMyCard }) => {
    const { _id, item, customization,Subcategory, image, Price,Time, rating, stock } = data;

   
    const handleDelete=(_id)=>{
       console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

             fetch(`http://localhost:4000/items/${_id}`,{
                method:"DELETE"
             })
             .then(res=>res.json()) 
             .then(data=>{
                console.log(data);
            if(data.deletedCount> 0){
                    Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
              });
              const remaining=myCard.filter(card=> card._id !== _id);
              setMyCard(remaining);

            }
             }) 
          
            }
          });









    }




      




    return (
        <div>
            <div>
                <div className="card bg-slate-100 w-96 shadow-xl h-96 mx-auto">
                    <figure>
                        <img src={image} alt={item} />
                    </figure>
                    <div className="flex justify-end">
                        <p className="text-sky-600">{item}</p>
                        <h2 className="card-title ml-8 mr-4 text-amber-600">Rating: {rating}</h2>
                    </div>

                    <div className="ml-2">
   
            <p className="font-bold text-2xl">{Subcategory}</p>
                   </div>

                   <div className="flex justify-between pr-4 pl-2">
                        <p>Stock: <span className="text-sky-600">{stock}</span></p>
                        <p>Customization: <span className="text-sky-600">{customization}</span></p>
                    </div>
 
                   <div className="flex gap-8 ">
   
                 <h2 className="card-title text-2xl ml-2"> <IoMdTime></IoMdTime> {Time} Min</h2>
                        </div>
                    <div>
                        <h2 className="card-title text-2xl ml-2 font-bold text-amber-600">
                            Price: {Price} <FaDollarSign />
                        </h2>
                    </div>
                    

                    <div className="flex justify-end gap-4">
                        <Link to={`/update/${_id}`}>
                        <button  className="btn text-green-600 text-lg">Update</button>
                        
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn text-red-600 text-lg">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
