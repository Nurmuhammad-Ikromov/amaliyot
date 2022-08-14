import { useEffect, useState } from 'react';
import axios from 'axios';
export const Cart = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/carts')
			.then(function (response) {
				setCart(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [setCart]);

	console.log(cart);
	return (
		<>
			<h1>Cart</h1>
            {
                cart.map((e) => (
                    <div>
                        <span>{e.id}</span>
                        <p>{e.date}</p>
                    </div>
                ))
            }
		</>
	);
};
