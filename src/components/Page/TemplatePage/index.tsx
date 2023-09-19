import React from 'react';

function Page({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-col justify-center sm:items-center ml-2 sm:ml-0 relative sm:mt-4">
			{children}
		</section>
	);
}

export { Page };
