import Navbar from "./components/Navbar";
import "./styles/App.scss";
import largeImage from "./assets/img/image-product-1.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="product-page-container">
        <div className="section">
          <img src={largeImage} alt="" className="large-image" />
          <div className="thumbnail-container">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="right-section">
          <p>SNEAKER COMPANY</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weateher can offer.
          </p>
          <div className="price-section">
            <p>
              $125.00 <span>50%</span>
            </p>
          </div>
          <p>$250.00</p>
        </div>
      </div>
    </div>
  );
}

export default App;
