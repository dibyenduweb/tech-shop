
import { useLoaderData } from "react-router-dom";
import Footer from "../Section/Footer";
import Header from "./Header";
import Brands from "../Section/Brands";
import OurBrands from "../Section/OurBrands";
import Subscribe from "../Section/Subscribe";
import Container from "../Container/Container";



const Home = () => {
    const brandData = useLoaderData();
    console.log(brandData);
    return (
        <>
        <Container>
        <Header/>
        <div className="lg:h-[500px] relative text-white lg:bg-cover text-center py-44" style={{backgroundImage: 'url(https://i.ibb.co/yYbhvRL/Blue-Teal-Geometric-Technology-Linkdln-Banner.png)'}}>
              <h2 className="lg:text-6xl font-bold">Big fastival Offers</h2>
              <p className="text-xl">Buy your favorite Gadgets</p>
              <button className="btn btn-group">Buy Now</button>
           
        </div>
        <h1 className='bg-blue-300 w-80 m-auto rounded-lg py-2 my-2 text-4xl font-bold text-center'>Our Best <span className='text-red-700'> Brands</span></h1>
        <div className="lg:grid lg:grid-cols-3 gap-6 px-36">
            
        {
            brandData.map(brand => <Brands key={brand.id} brand={brand}></Brands>)
        }
        </div>
       
        {/* <h1 className="text-4xl font-bold text-center mt-4">Service</h1> */}
      <div className="lg:grid lg:grid-cols-3 gap-4">
      </div>
      <OurBrands/>
      <Subscribe/>
      <Footer/>
     
      </Container>
            </>
       
    );
};

export default Home;