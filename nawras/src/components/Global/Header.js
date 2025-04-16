import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const logo = "/assets/images/nawras-logo.jpg";
    return (
        <header className="bg-[#efe4b5] text-black p-4">
            <nav className="flex justify-between items-center">
                {/* <h1 className="text-xl font-bold">Nawras</h1> */}
                <div className='flex items-center gap-2'>
                    <Link href='/'>
                    <Image src={logo} alt="Nawras" width={50} height={50}/>
                    </Link>
                </div>
                <ul className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}