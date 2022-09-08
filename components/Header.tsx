import { SearchIcon, BellIcon } from "@heroicons/react/solid" /* You need to install also @heroicons/react@v1 */
import Link from "next/link"
import { useEffect, useState } from "react" /* Part of Scroll */

function Header() {
    /*  Start - part of Scroll  */
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
              setIsScrolled(true)
            } else {
              setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []) /* runs only on a single because of <---[] */
    /*  End - part of Scroll  */

    /* if fails restore back to <header> */
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img 
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
            <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
            />
        </Link>
      </div>
    </header>
  )
}

export default Header