import locationIcon from '../assets/location.svg'
import arrowLeft from '../assets/left-arrow.svg'
import arrowRight from '../assets/right-arrow.svg'
import horizontalDashes from '../assets/horixontal-dashes.svg'

const Events = () => {
  return (
    <div className='md:px-10 px-5'>
        <div>
            <h1 className='font-bold text-4xl py-8'>Our upcoming event highlights</h1>
        
            <div className='flex gap-5'>
                <div className='sm:w-84 bg-gray-100'>
                    <div className='py-3 bg-yellow-500 font-bold flex flex-col justify-center items-center h-56 '>
                            <h1 className="text-4xl py-4">4/12</h1>
                            <p className="text-2xl px-4">Family Cafe for student</p>
                            <p className="text-2xl">parents</p>
                    </div>
                    <div className='p-5 font-sm'>
                                <div>
                                    <h4 className='font-medium'>Mon 4/22/2024</h4>
                                    <div className='flex font-medium'>
                                        <img src={locationIcon} alt="location" />
                                        <p>Campus Weihenstephan</p>
                                    </div>
                                    <p>An invitation fro (future) student parents to meet in a relaxed atmosphere. Register Now!</p>
                                </div>
                                <div className='pt-10'>
                                    <button className='text-secondary font-medium text-sm border border-primary h-12 w-32 hover:bg-sky-700'>To the event</button>
                                </div>
                    </div>
                </div>

                <div className='w-84 bg-gray-100 sm:block hidden'>
                    <div className='py-3 bg-yellow-500 font-bold flex flex-col justify-center items-center h-56 '>
                            <h1 className="text-4xl py-4">4/12</h1>
                            <p className="text-2xl px-4">Family Cafe for student</p>
                            <p className="text-2xl">parents</p>
                    </div>
                    <div className='p-5 font-sm'>
                                <div>
                                    <h4 className='font-medium'>Mon 4/22/2024</h4>
                                    <div className='flex font-medium'>
                                        <img src={locationIcon} alt="location" />
                                        <p>Campus Weihenstephan</p>
                                    </div>
                                    <p>An invitation fro (future) student parents to meet in a relaxed atmosphere. Register Now!</p>
                                </div>
                                <div className='pt-10'>
                                    <button className='text-secondary font-medium text-sm border border-primary h-14 w-32 hover:bg-sky-700'>To the event</button>
                                </div>
                    </div>
                </div>

                <div className='w-84 bg-gray-100 sm:block hidden'>
                    <div className='py-3 bg-yellow-500 font-bold flex flex-col justify-center items-center h-56 '>
                            <h1 className="text-4xl py-4">4/12</h1>
                            <p className="text-2xl px-4">Family Cafe for student</p>
                            <p className="text-2xl">parents</p>
                    </div>
                    <div className='p-5 font-sm'>
                                <div>
                                    <h4 className='font-medium'>Mon 4/22/2024</h4>
                                    <div className='flex font-medium'>
                                        <img src={locationIcon} alt="location" />
                                        <p>Campus Weihenstephan</p>
                                    </div>
                                    <p>An invitation fro (future) student parents to meet in a relaxed atmosphere. Register Now!</p>
                                </div>
                                <div className='pt-10'>
                                    <button className='text-secondary font-medium text-sm border border-primary h-14 w-32 hover:bg-sky-700'>To the event</button>
                                </div>
                    </div>
                </div>

                <div className='w-84 bg-gray-100 sm:block hidden'>
                    <div className='py-3 bg-yellow-500 font-bold flex flex-col justify-center items-center h-56 '>
                            <h1 className="text-4xl py-4">4/12</h1>
                            <p className="text-2xl px-4">Family Cafe for student</p>
                            <p className="text-2xl">parents</p>
                    </div>
                    <div className='p-5 font-sm'>
                                <div>
                                    <h4 className='font-medium'>Mon 4/22/2024</h4>
                                    <div className='flex font-medium'>
                                        <img src={locationIcon} alt="location" />
                                        <p>Campus Weihenstephan</p>
                                    </div>
                                    <p>An invitation fro (future) student parents to meet in a relaxed atmosphere. Register Now!</p>
                                </div>
                                <div className='pt-10'>
                                    <button className='text-secondary font-medium text-sm border border-primary h-12 w-32 hover:bg-sky-700'>To the event</button>
                                </div>
                    </div>
                </div>

            </div>
            
              <div className='sm:hidden justify-end pt-10 flex gap-2'>
                <img src={horizontalDashes} alt="horizontal dashes" />
                <div className='border border-secondary h-12 w-12 flex justify-center'>
                    <img src={arrowLeft} alt="arrow left" />
                </div>
                <div className='border border-secondary h-12 w-12 flex justify-center'>
                    <img src={arrowRight} alt="arrow left" />
                </div>
              </div>
                   
            <div className='py-7'>
                <button className='text-white font-bold text-lg bg-secondary h-16 w-44 hover:bg-sky-700'>EVENT OVERVIEW</button>
            </div>
        </div>

    </div>
  )
}

export default Events