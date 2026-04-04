import { Button } from '@/shared/ui'
import crsImg from '../assets/courseImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faStar } from '@fortawesome/free-solid-svg-icons'

const MockCourseInProgressList = () => {
    const arr = [1,2,3]
  return (
    <div className='relative'>
        {/* Blured background section */}
        <div className='grid grid-cols-3 gap-6 blur-sm pointer-events-none select-none opacity-50'>
            {/* Continue Learinin Course Cards */}
            {arr.map(item => (
                <div key={item} className='
                    flex flex-col  gap-2 bg-[#FFFFFF] rounded-xl border-0.5
                    border-[#B7B3F4] p-5 
                '>
                    {/* Course Image, lecturer, rate, name */}
                    <div className='flex gap-4'>
                        {/* Course Image */}
                        <img src={crsImg} alt="Course Image" className='rounded-xl h-30.75' />
                        {/* Course Lecturer, rate, Name */}
                        <div className='flex flex-col gap-2.25'>
                            <div className='flex items-center justify-between'>
                                {/* Lecturer */}
                                <p className='text-sm text-[#8A8A8A] font-medium leading-none'>
                                    Lecturer {` `}
                                    <span className='text-[#666666]'>
                                        Marilyn Mango
                                    </span>
                                </p>
                                {/* rate */}
                                <div className='flex gap-1 items-center'>
                                    <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
                                    <p className='text-sm text-[#525252] font-medium leading-none'>
                                        4.9
                                    </p>
                                </div>
                            </div>
                            <h4 className='text-xl text-[#141414] font-semibold leading-6'>
                                Advanced React & TypeScript Development 
                            </h4>
                        </div>
                    </div>
                    {/* Course view button and progress bar */}
                    <div className='flex gap-10 justify-between items-center'>
                        <div className='flex flex-col gap-1 w-full'>
                            <p className='text-xs text-[#141414] font-medium leading-none'>
                                65% Complete
                            </p>
                            <div className='w-full h-3.75 bg-[#DDDBFA] rounded-[30px]'>
                                <div className='w-[65%] bg-[#4F46E5] rounded-[30px] h-3.75'>
                                </div>
                            </div>
                        </div>
                        <Button variant='outline' className='py-2.75 px-6.25'>
                            View
                        </Button>
                    </div>
                </div>
            ))}
        </div>
        {/* Login card */}
        <div className='
            absolute px-14 py-6.75 bg-[#FFFFFF] border border-[#ADADAD] rounded-xl
            z-10 inset-0 flex items-center justify-center text-center max-w-118 mx-auto
        '>
            <div className='flex flex-col gap-6 items-center'>
                {/* Icon and Text */}
                <div className='flex flex-col items-center gap-3'>
                    <div className='
                        rounded-full flex items-center justify-center bg-[#DDDBFA]
                        w-18.5 h-19.25
                    '>
                        <FontAwesomeIcon icon={faLock} className='text-[#4F46E5] text-3xl'/>
                    </div>
                    <h5 className='text-[#0A0836] font-medium leading-6 '>
                        Sign in to track your learning progress
                    </h5>
                </div>
                <Button variant='primary' className='leading-6 font-medium py-2.25 px-4.5'>
                    Log In
                </Button>
            </div>
        </div>
    </div>
  )
}

export default MockCourseInProgressList
