import Container from "../Container/Container";

const Banner = () => {
    return (

        <Container>
            <div className="text-center mt-24">
              <h2 className="lg:text-5xl font-semibold">The music fastival</h2>
              <p className="text-xl">Happy or sad everyone loves music</p>
              <button className="btn btn-group mb-4">Book Now</button>
            </div>
     </Container>
    );
};

export default Banner;