import React from 'react';

export default function Loading() {
	return <p>Loading data from {process.env.CURRENT_COIN_API} API!</p>;
}
