import awardWinning from '../assets/award-winning.webp'
import sustainability from '../assets/csm_1650244_6d90536b4b.jpeg'
import campusNews from '../assets/csm_20240412_6G_Kellerer_AH_90b3b41b29.jpeg'
import subjectRankings from '../assets/csm_240410_QS_Subject_Ranking_348f7e47ae.jpeg'

const News = () => {
  return (
    <div className='md:px-10 px-5'>
        <div>
            <h1 className='font-bold text-4xl py-8'>News from TUM</h1>
            <h6 className='text-xl'>News, research results and events: everything that enthuses people at our university.</h6>
            <div className='md:flex grid justify-between'>
                <div className='sm:w-84'>
                    <div className='py-3'>
                        <img src={awardWinning} alt="award winning" className='w-full'/>
                        <div className='bg-gray-300 absolute '>
                            {/* <span className='p-2'>Teaching</span> */}
                        </div>
                    </div>
                    <div className='font-bold'>
                        <h4 className=''>Prizes for Excellence in Teaching</h4>
                        <h2 className=' text-xl'>Award-winning didactics</h2>
                        <p className='font-medium text-sm pt-8'>Eight lecturers at TUM have received special recognition for their courses. The Prize for Excellence in Teaching from the...</p>
                        <div className='flex justify-between py-4 font-medium'>
                            <span>4/15/2024</span>
                            <p>Reading time 1 min.</p>
                        </div>
                    </div>
                </div>

                <div className='sm:w-84'>
                <div className='py-3'>
                    <img src={sustainability} alt="award winning" className='w-full'/>
                    <div className='bg-gray-300 absolute '>
                        {/* <span className='p-2'>Teaching</span> */}
                    </div>
                </div>
                <div className='font-bold'>
                    <h4 className=''>Prizes for Excellence in Teaching</h4>
                    <h2 className=' text-xl'>Award-winning didactics</h2>
                    <p className='font-medium text-sm pt-8'>Eight lecturers at TUM have received special recognition for their courses. The Prize for Excellence in Teaching from the...</p>
                    <div className='flex justify-between py-4 font-medium'>
                        <span>4/15/2024</span>
                        <p>Reading time 1 min.</p>
                    </div>
                </div>
            </div>

            <div className='sm:w-84'>
                <div className='py-3'>
                    <img src={campusNews} alt="award winning" className='w-full'/>
                    <div className='bg-gray-300 absolute '>
                        {/* <span className='p-2'>Teaching</span> */}
                    </div>
                </div>
                <div className='font-bold'>
                    <h4 className=''>Prizes for Excellence in Teaching</h4>
                    <h2 className=' text-xl'>Award-winning didactics</h2>
                    <p className='font-medium text-sm pt-8'>Eight lecturers at TUM have received special recognition for their courses. The Prize for Excellence in Teaching from the...</p>
                    <div className='flex justify-between py-4 font-medium'>
                        <span>4/15/2024</span>
                        <p>Reading time 1 min.</p>
                    </div>
                </div>
            </div>

            <div className='sm:w-84'>
                <div className='py-3'>
                    <img src={subjectRankings} alt="award winning" className='w-full'/>
                    <div className='bg-gray-300 absolute'>
                        {/* <span className='p-2'>Teaching</span> */}
                    </div>
                </div>
                <div className='font-bold'>
                    <h4 className=''>Prizes for Excellence in Teaching</h4>
                    <h2 className=' text-xl'>Award-winning didactics</h2>
                    <p className='font-medium text-sm pt-8'>Eight lecturers at TUM have received special recognition for their courses. The Prize for Excellence in Teaching from the...</p>
                    <div className='flex justify-between py-4 font-medium'>
                        <span>4/15/2024</span>
                        <p>Reading time 1 min.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='py-7'>
                <button className='text-white font-bold text-lg bg-secondary h-16 w-32 hover:bg-sky-700'>All NEWS</button>
            </div>
        </div>
    </div>
  )
}

export default News