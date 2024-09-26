import './App.css';
import {Products} from "./consts";

function Product(obj) {
    return (
        <div className="product-card">
            <img src={obj.image} alt={obj.title} className="product-image"/>
            <div className="product-info">
                <h2 className="product-title">{obj.title}</h2>
                <p className="product-description">{obj.description}</p>
            </div>
            <button>Add to card</button>
        </div>
    )
}


function App() {
    return (
        <>
            <main>
                {Products.map((el) => {
                    return <Product key={el.title} {...el} />;
                })}
            </main>
        </>
    );
}

export default App;
