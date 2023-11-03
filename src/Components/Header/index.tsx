import Link from 'next/link';
import { SiBigbasket } from 'react-icons/si'

const Header = () => {
  return (
    <header className="bg-slate-500 w-full p-3">
          <Link href='/'>
            <SiBigbasket fontSize='42px' />
          </Link>
    </header>
  );
};

export default Header
