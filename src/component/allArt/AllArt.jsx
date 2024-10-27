import { useLoaderData } from "react-router-dom";
import Info from "../info/Info";


const AllArt = () => {
    const information=useLoaderData();
    return (
        <div>
            <h2 className="text-3xl text-center text-orange-300 mb-4 mt-4">All art and Craft item here</h2>



            <div className="pr-2">
          
                <div className="grid grid-cols-6 lg:gap-4 text-orange-300 lg:text-2xl mb-2">
                    <th>SL</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Price</th>
                    <th></th>
                </div>
            {
                information.map((info,index)=> <Info key={Info._id} index={index} info={info}></Info>)
              }
            </div>
        </div>
    );
};

export default AllArt;