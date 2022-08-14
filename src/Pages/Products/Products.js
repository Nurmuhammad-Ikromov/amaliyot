import axios from 'axios';
import { useEffect, useState } from 'react';

export const Products = () => {
	const [products, setProducts] = useState([]);
	const [value, setValue] = useState("All");
	const [selectedOption, setSelectedoption] = useState([]);

	useEffect(() => {
		if (value === 'All')
			axios
				.get(`https://fakestoreapi.com/products`)
				.then(function (response) {
					setProducts(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		else 
			axios
				.get(`https://fakestoreapi.com/products/category/${value}`)
				.then(function (response) {
					setSelectedoption(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
	}, [value]);

	const cat = [];
	const categ = [];

	products.map((e) => cat.push(e.category));
	const mySet = new Set(cat);
	for (const iterator of mySet) {
		categ.push(iterator);
	}

	const handleChange = (evt) => {
		setValue(evt.target.value);
	};

	return (
		<>
			<h1>Products</h1>

			<select onChange={handleChange}>
				<option>All</option>
				{categ.map((el) => (
					<option value={el}> {el}</option>
				))}
			</select>

			<ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-between', listStyle: "none" }}>
				{selectedOption.length
					? selectedOption.map((e) => (
							<li
								style={{
									width: '270px',
									backgroundColor: '#444',
									margin: '40px',
                                    color: "#fff"
								}}>
								{' '}
								<img width={270} src={e.image} />
								<h2>{e.title}</h2>
								<p>{e.price}</p>
								<p>{e.category}</p>
							</li>
					  ))
					: products.map((e) => (
							<li
								style={{
									width: '270px',
									backgroundColor: '#444',
									margin: '40px', 
                                    color: "#fff"
								}}>
								{' '}
								<img width={270} height={300} src={e.image} />
								<h3>{e.title}</h3>
								<p>{e.price}</p>
								<p>{e.category}</p>
							</li>
					  ))}
			</ul>
		</>
	);
};
