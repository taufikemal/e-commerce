import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
	{ id:1, name:'Shoes', description:'Running Shoes', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dl2krirthxihbhgtkdv5/air-max-270-shoe-2V5C4p.png'},
	{ id:2, name:'Macbook', description:'Apple Macbook', price: '$10', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-2910872/apple_apple-macbook-pro-with-touch-bar-mr942---mr972-notebook----intel-core-i7-16gb-ram-512gb-ssd-radeon-pro-560x-4gb-5-inch-mac-os-_full10.jpg'}
];

const Products = () => {
	return (
		<main>
			<Grid container justify="center" spacing={4}>
				{products.map(product =>(
					<Grid item key={product.id} xd={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
}

export default Products;