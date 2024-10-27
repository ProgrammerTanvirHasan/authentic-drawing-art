import { useLoaderData } from "react-router-dom";

const Details = () => {
  const specificData = useLoaderData();

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img src={specificData.image} alt={specificData.Subcategory} />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-44">{specificData.Subcategory}</h2>

          <p>{specificData.Description}</p>

          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
