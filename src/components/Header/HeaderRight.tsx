'use client';

import { searchBarOpenState, shoppingCartOpenState } from '@/recoil/atoms';
import { useSetRecoilState } from 'recoil';

export default function HeaderRight() {
	const SearchBarOpen = useSetRecoilState(searchBarOpenState);
	const openShoppingCart = () => setShoppingCartOpen(true);
	const setShoppingCartOpen = useSetRecoilState(shoppingCartOpenState);

	return (
		<ul className='flex w-16 items-center justify-end gap-4 text-xl'>
			<li className='cursor-pointer hover:opacity-50'>
				<i className='ri-search-line' onClick={() => SearchBarOpen(true)} />
			</li>
			<li className='relative cursor-pointer hover:opacity-50' onClick={openShoppingCart}>
				<span className='absolute left-3 bottom-4 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
					3
				</span>
				<i className='ri-shopping-bag-line' />
			</li>
		</ul>
	);
}
