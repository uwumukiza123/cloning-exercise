import chevronDown from '../assets/chevron-down.svg'
import arrowRight from '../assets/right-arrow.svg'
import presidentialStudentLunch from '../assets/csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d.jpeg'

const DegreePrograms = () => {
  return (
    <div className='pl-4 sm:pl-10 pr-4 sm:pr-0'>
        <div className='flex justify-between bg-gray-200 hover hover:bg-gray-100 h-16 border-b border-secondary mr-0 sm:mr-10'>
            <button className='px-4'>Select degree program or enter keyword</button>
            <img src={chevronDown} alt="chevron down" className='px-3'/>
        </div>
        <div className='flex gap-2 items-center justify-end text-secondary font-semibold mr-0 sm:mr-10'>
            <span>Degree programs</span>
            <img src={arrowRight} alt="arrow right" className='w-7'/>
        </div>

        <div className='block sm:flex'>
            <img src={presidentialStudentLunch} alt="presidentila student lunch" />
            <div className='bg-secondary w-full h-full sm:h-80 static sm:relative right-10 top-16'>
                <div className='p-8 text-white'>
                    <h1 className='font-bold text-3xl'>What drives us: President Thomas F. Hofmann about TUM</h1>
                    <p className='py-10'>Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so</p>

                    <div className='bg-white hover:bg-blue-900 h-16 w-32'>
                    <button className='p-4 font-semibold text-black'>READ MORE</button>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DegreePrograms