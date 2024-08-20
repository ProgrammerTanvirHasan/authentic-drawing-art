




const AddCraft = () => {
   
const handleAddCraft=(e)=>{
    
  e.preventDefault()
  const form=e.target;
  const item=form.items.value;
  const Subcategory=form.subcategory.value;
  const Description=form.shortDescription.value;
  const image=form.image.value;
  const Time=form.time.value;
  const Price=form.price.value;
  const rating=form.rating.value;
  const customization=form.customization.value;
  const stock=form.stock.value;
   const items={item,Subcategory,Description,image,Time,Price,rating,customization,stock}
console.log(items,'hd');

  fetch('http://localhost:4000/items', {
    method:"POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items)
  }

  )
  .then(res=>res.json())
  .then(data=> {
    if(data.insertedId){
        alert('added successfully')
       
    }
   console.log(data);
   form.reset();
  })
   

  
}

    return (
        <div>
            <div className="bg-slate-300">
                <p className="text-3xl text-center">Add Your Craft Items</p>
            </div>
            <div className="hero bg-slate-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-violet-400 w-full shadow-2xl">
                        <form onSubmit={handleAddCraft} className="card-body">
                            <div className="form-control">
                         





                                <div className="lg:flex gap-4">
                                      <div>
                                        <label className="label">
                                            <span className="label-text">Item Name</span>
                                        </label>
                                        <input type="text" name="items" placeholder="Item Name" className="input input-bordered" />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Subcategory Name</span>
                                        </label>
                                        <input type="text" name="subcategory" placeholder="Subcategory" className="input input-bordered" />
                                    </div>
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <textarea name="shortDescription" placeholder="Description" className="textarea textarea-bordered"></textarea>
                                </div>
                               


                           
                        <div className="lg:flex gap-4 mt-4">

                              <div>
                                  <label className="label">
                                       <span className="label-text">Customization</span>
                                 </label>
                            <select name="customization" className="select select-bordered">
                                   <option value="yes">Yes</option>
                                   <option value="no">No</option>
                         </select>
                              </div>


                             <div>
                         <label className="label">
                               <span className="label-text">Stock</span>
                         </label>
                          <select name="stock" className="select select-bordered">
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
                                        <input type="url" name="image" placeholder="Photo URL" className="input input-bordered" />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Processing Time</span>
                                        </label>
                                        <input type="text" name="time" placeholder="Processing Time" className="input input-bordered" />
                                    </div>
                                </div>
                                <br />
                                <div className="lg:flex gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="number" step="0.1" name="rating" placeholder="Rating" className="input input-bordered" />
                                    </div>
                                </div>
                                <br />
                                <div className="form-control">
                                    <button className="btn btn-primary">AddCraft items</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCraft;









