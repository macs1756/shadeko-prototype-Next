import Link from 'next/link';
import { SiBigbasket } from 'react-icons/si'
import { MdAccountCircle, MdFavorite } from 'react-icons/md'
import { RiShoppingBasketFill } from 'react-icons/ri'

const Header = () => {
  return (
    <header className="bg-slate-500 w-full p-3 flex items-center justify-between">
          <Link href='/'>
            <SiBigbasket fontSize='42px' color='#fff' />
          </Link>
          <ul>
            <li>test</li>
          </ul>

          <div className='text-[27px] text-[#fff] flex gap-3'>

          <Link href='/login'>
            <MdAccountCircle />
          </Link>

          <Link href='/favorite'>
            <MdFavorite />
          </Link>

          <RiShoppingBasketFill className='cursor-pointer' />
        

          </div>
    </header>
  );
};

export default Header
