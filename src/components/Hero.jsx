import unVideo from '../assets/universtity-of-munich-video.mp4'

const Hero = () => {
  return (
    <div>
        <div>
        
        <div className='h-72 static bg-blue-900 sm:bg-inherit sm:absolute top-32 pt-10 sm:pt-0 text-white sm:w-200 pl-4 sm:pl-10'>
                <h2 className='text-4xl sm:text-5xl font-bold py-6'>
                TUM. The Entrepreneurial University </h2>
                <p className='text-xl'>Innovation through talent, excellence and responsibility</p>
            </div>

            <video autoPlay loop muted>
                <source src={unVideo} type='video/mp4'/>
            </video>

        </div>
    </div>
  )
}

export default Hero