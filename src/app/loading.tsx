import React from 'react';

export default function Loading() {
	return <p>Loading data from {process.env.NEXT_CURRENT_COIN_API} API!</p>;
}
