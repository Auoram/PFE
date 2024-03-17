import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <nav className="border-2 border-red-400 flexBetween max-container padding-container relative z-30 py-5" >
        <Link href="/">
            <Image src="/loge-img.png" alt="logo" width={74} height={29} />
        </Link>
    </nav>
  )
}

export default Navbar
