import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();

    const saveProduct = async(e) => {
        e.preventDefault();
        const product = {title, price};
        await fetch('http://localhost:8080/products', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push("/");
    }

    return (
        <div>
            <form onSubmit={saveProduct}>

                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" value={title} onChange={ (e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" value={price} onChange={ (e) => setTitle(e.target.value)} type="text" placeholder="Price"/>
                    </div>
                </div>

                <div className="field">
                    <label className="control">
                        <button className="button is-primary">Save</button>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default AddProduct