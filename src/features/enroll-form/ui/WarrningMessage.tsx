import { Button } from '@/shared/ui'
import { faArrowRight, faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface WarrningMessageProps {
    method: () => void,
    warrningType: 'auth' | 'profile'
}

export const  WarrningMessage = ( { method, warrningType } : WarrningMessageProps ) => {
  return (
    <div className="bg-white rounded-xl mt-2.75 border border-[#E5E7EB] p-5 flex items-center justify-between">
        <div className="flex flex-col gap-2 w-[70%]">
            <h6 className="text-base text-[#292929] font-medium leading-6">
                <FontAwesomeIcon icon={faWarning} className="text-[#F4A316] pr-1.5"/>
                {warrningType === 'auth' && 'Authentication Required'}
                {warrningType === 'profile' && 'Complete Your Profile'}
            </h6>
            <p className="text-xs text-[#8A8A8A] leading-none">
                {warrningType === 'auth' && 'You need sign in to your profile before enrolling in this course.'}
                {warrningType === 'profile' && 'You need to fill in your profile details before enrolling in this course.'}
            </p>
        </div>
        <Button 
            variant="outline"
            className="py-2.5 px-3"
            onClick={method}
        >
            Complete
            <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
        </Button>
    </div>
  )
}
