import tumImage from '../assets/Tum.png'

const Discover = () => {
  return (
    <div className='px-4 sm:px-10'>
        <div className='font-bold py-10'>
            <h3>Customized navigation</h3>
            <h1 className='text-3xl'>Discover what TUM has to offer</h1>
        </div>
        <ul className='grid grid-cols-3 sm:flex gap-4 justify-between'>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Prospective Students</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Students</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Researchers</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Employees</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Alumni</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Executive and professionals</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Founders</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Cooperations</a></li>
            <li className='hover:bg-secondary p-3 bg-gray-300 hover:text-white font-medium'><a href="">Press and media</a></li>
        </ul>
        
        <div className='grid sm:flex justify-between gap-16 md:p-20 py-20'>
            <img src={tumImage} alt="tum" className='sm:w-200 w-full h-full sm:h-96'/>
            <div>
                <h1 className='text-4xl font-bold py-5'>Prospective Students</h1>
                <p>Learn to bring ideas to life, discover new possibilities, work in teams and build networks.</p>
                <div className='pt-10'>
                    <button className='text-secondary font-medium text-sm border border-primary h-14 w-32 hover:bg-sky-700'>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover