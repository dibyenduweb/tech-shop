import toast from "react-hot-toast";
import Header from "../components/Home/Header";

const AddProduct = () => {

    const handleAddProduct = (e) =>{
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        //console.log(image, name, brand, type, price, shortDescription, rating );
        const productData={
            image, 
            name, 
            brand, 
            type, 
            price, 
            shortDescription, 
            rating,
        };
        console.log(productData);

    fetch("https://tech-commerce-server-8tvfprqzl-dibyendu-pramaniks-projects.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          toast("Product added successfully")
        }

      
      });
      
    }
    return (
        <>
    <Header/>
        <div className="bg-slate-500 p-10">
            <h1 className='text-4xl text-center font-bold my-'>Add <span className='text-sky-500'>Product</span></h1>
        <form  onSubmit={handleAddProduct} className="max-w-md mx-auto" >
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium    text-red-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium    text-red-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="brand" className="block text-sm font-medium    text-red-700">
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium    text-red-700">
          Type
        </label>
        <select
          id="type"
          name="type"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="computer">Computer</option>
          <option value="homethear">HomeTheater</option>
          <option value="headphone">Headphone</option>
          <option value="watch">Watch</option>
          <option value="television">Television</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium    text-red-700">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="shortDescription" className="block text-sm font-medium    text-red-700">
          Short Description
        </label>
        <textarea
          id="shortDescription"
          name="shortDescription"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block text-sm font-medium    text-red-700">
          Rating
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Product
        </button>
      </div>
    </form>


        </div>
        </>
        
    );
};

export default AddProduct;