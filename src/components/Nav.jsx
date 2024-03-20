import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/"> 
                <img
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                    className='m-0 w-[129px] h-[29px]'
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                <a href='/' className='hover:text-slate-gray'>Sign In</a>
                <span></span>
                <a href='/' className='hover:text-slate-gray'>Explore Now</a>
            </div>
            <div className='hidden max-lg:block'>
                <img 
                    src={hamburger}
                    alt='Hamburger icon'
                    height={25}
                    width={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav