import Link from "next/link"
import { SiBigbasket } from "react-icons/si"

export const Footer = () : JSX.Element => {

  const styleListElement: string = "text-[#fff] hover:text-[#c5c5c5] transition pb-2"

  return (
    <footer className="bg-slate-500 w-full p-3 flex items-center justify-between">
          <Link href='/'>
            <SiBigbasket fontSize='42px' color='#fff' />
          </Link>
          <ul>
            <li>text</li>
          </ul>
          <ul>
            <li><a className={styleListElement} href="#">Lviv ul Zelena 33</a></li>
            <li><a className={styleListElement} href="tel: +380957954233">+380957954233</a></li>
          </ul>
    </footer>
  )
}