import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Update = () => {
  const { user } = useContext(AuthContext);
  const UpdateData = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    item,
    Subcategory,
    image,
    customization,
    Time,
    Price,
    rating,
    stock,
    Description,
  } = UpdateData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const item = form.items.value;
    const email = form.email.value;
    const name = form.name.value;
    const Subcategory = form.subcategory.value;
    const Description = form.shortDescription.value;
    const image = form.image.value;
    const Time = form.time.value;
    const Price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stock = form.stock.value;

    const updatedItem = {
      email,
      name,
      item,
      Subcategory,
      Description,
      image,
      Time,
      Price,
      rating,
      customization,
      stock,
    };
    console.log(updatedItem);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/items/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedItem),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Your item has been updated.",
                icon: "success",
              });

              navigate("/myCraft");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className=" bg-slate-300 text-center">
        <p className="text-3xl">Update Your Items</p>
      </div>
      <div className="hero bg-slate-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-violet-400 w-full shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <div className="lg:flex gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">UserName</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user.displayName}
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="lg:flex gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Item Name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={item}
                      name="items"
                      placeholder="Item Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Subcategory Name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={Subcategory}
                      name="subcategory"
                      placeholder="Subcategory"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <textarea
                    name="shortDescription"
                    defaultValue={Description}
                    placeholder="Description"
                    className="textarea textarea-bordered"
                  ></textarea>
                </div>

                <div className="lg:flex gap-4 mt-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Customization</span>
                    </label>
                    <select
                      name="customization"
                      defaultValue={customization}
                      className="select select-bordered"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Stock</span>
                    </label>
                    <select
                      name="stock"
                      defaultValue={stock}
                      className="select select-bordered"
                    >
                      <option value="in_stock">In Stock</option>
                      <option value="made_to_order">Made to Order</option>
                    </select>
                  </div>
                </div>

                <div className="lg:flex gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="url"
                      defaultValue={image}
                      name="image"
                      placeholder="Photo URL"
                      className="input input-bordered"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Processing Time</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={Time}
                      name="time"
                      placeholder="Processing Time"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <br />
                <div className="lg:flex gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      defaultValue={Price}
                      name="price"
                      placeholder="Price"
                      className="input input-bordered"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="number"
                      defaultValue={rating}
                      step="0.1"
                      name="rating"
                      placeholder="Rating"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <br />
                <div className="form-control">
                  <button className="btn btn-primary">Update items</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
