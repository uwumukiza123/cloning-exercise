import logo from '../assets/university-of-munich-logo.svg'
import gridIcon from '../assets/grid.svg'
import lightModeIcon from '../assets/light-mode.svg'
import searchIcon from '../assets/search.svg'
import hamburgerMenu from '../assets/align-left.svg'

const Navbar = () => {
  return (
    <div className='bg-primary text-white sticky z-10 top-0'>
        <div className='flex p-4 items-center'>
        <div className='flex pr-20 sm:pr-56'>
            <img src={logo} alt="university of munich" />
            <span className='hidden sm:block w-20 text-xs px-2'>Technical University of Munich</span>
        </div>
        <div>
            <ul className='hidden md:flex font-bold gap-6 text-sm'>
                <ul><a href="">NEWS AND EVENTS</a></ul>
                <ul><a href="">STUDIES</a></ul>
                <ul><a href="">LIFELONG LEARNING</a></ul>
                <ul><a href="">RESEARCH</a></ul>
                <ul><a href="">INNOVATION</a></ul>
                <ul><a href="">COMMUNITY</a></ul>
                <ul><a href="">ABOUT TUM</a></ul>
            </ul>
        </div>
        <div className='flex sm:pl-20 pl-10 gap-6 sm:gap-2'>
            <img src={gridIcon} alt="" />
            <div className='flex'>DE <div className='px-2'><div className='h-6 w-[2px] bg-white'></div></div> EN</div>
            <img src={lightModeIcon} alt="light mode" />
            <img src={searchIcon} alt="search" />
            <img src={hamburgerMenu} alt="hamburger menu" className='block sm:hidden'/>
        </div>
        </div>
    </div>
  )
}

export default Navbar