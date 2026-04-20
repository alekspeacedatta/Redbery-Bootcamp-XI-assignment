import { useSessionType } from "@/features/enroll-form/hook/useSessionType"
import { AccordionSection } from "./AccordionSection"
import { useWeeklySchedule } from "@/features/enroll-form/hook/useWeeklySchedule"
import { useParams } from "react-router-dom"
import { useTimeSlot } from "@/features/enroll-form/hook/useTimeSlot"
import { useScheduleStore } from "@/entities/schedule"
import { useCourseStore } from "@/entities/course"
import { useEffect, useState } from "react"
import { Button } from "@/shared/ui"
import { useAuthStore, useUserStore } from "@/entities/session"
import { WarrningMessage } from "./WarrningMessage"

interface Props {
    basePrice: number
}

export const EnrollForm = ({ basePrice } : Props) => {
    const [ sessionType, setSessionType ] = useState<number>(0);

    const { id } = useParams();
    const crsId = Number(id);

    const coursePrice = useCourseStore((state) => state.coursePrice)

    const weeklyScheduleId = useScheduleStore((state) => state.weeklyScheduleId);
    const timeSlotId = useScheduleStore((state) => state.timeSlotId);
    const sessiontTypeId = useScheduleStore((state) => state.sessionTypeId);

    const isProfileComplete = useUserStore((state) => state.user?.profileComplete)
    const setIsProfileOpen = useUserStore((state) => state.setIsProfileOpen)

    const isAuth = useAuthStore((state) => state.isAuth);
    const setAuthMode = useAuthStore((state) => state.setAuthMode);
    const openModal = useAuthStore((state) => state.openModal);

    const { data: weeklySchedule } = useWeeklySchedule(Number(crsId));
    const { data: timeSlots } = useTimeSlot(crsId, weeklyScheduleId)
    const { data: sessionTypes } = useSessionType(crsId, weeklyScheduleId, timeSlotId)


    useEffect(() => {
        if (sessionTypes && sessiontTypeId) {
            const selected = sessionTypes.find(s => s.id === sessiontTypeId);
            if (selected) {
                setSessionType(Number(selected.priceModifier));
            }
        }
    }, [sessionTypes, sessiontTypeId]);

return (
    <div className="w-[33.845%] mt-16   ">
        {/* Weekly Schedule Section */}
        <div className="w-full flex flex-col gap-8">
            <AccordionSection opened={true} item={weeklySchedule ?? []} title="Weekly Schedule" number="1" />
            <AccordionSection opened={!!weeklyScheduleId} item={timeSlots ?? []} title="Time Slot" number="2" />
            <AccordionSection opened={!!timeSlotId} item={sessionTypes ?? []} title="Session Type" number="3" />
        </div>
        <div className="bg-white rounded-xl border border-[#F5F5F5] p-10 mt-8">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <h5 className="text-xl text-[#8A8A8A] font-semibold leading-6">
                        Total Price
                    </h5>
                    <p className="text-[32px] text-[#292929] font-semibold leading-none">
                        $ {coursePrice}
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h6 className="text-base text-[#8A8A8A] font-medium leading-6">
                            Base Price
                        </h6>
                        <p className="text-base text-[#292929] font-medium leading-none">
                           + ${basePrice}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h6 className="text-base text-[#8A8A8A] font-medium leading-6">
                            Session Type
                        </h6>
                        <p className="text-base text-[#292929] font-medium leading-none">
                           +  ${sessionType}
                        </p>
                    </div>
                </div>
                <Button 
                    className="py-5 disabled:bg-[#EEEDFC] disabled:text-[#B7B3F4]"
                    disabled={!weeklyScheduleId || !timeSlotId || !sessiontTypeId || !isAuth || !isProfileComplete}
                    variant="primary" 
                    fullWidth={true} 
                >
                    Enroll Now
                </Button>
            </div>
        </div>
        {isAuth && !isProfileComplete && (
            <WarrningMessage warrningType="profile" method={() => setIsProfileOpen(true)}/>
        )}
        {!isAuth && (
            <WarrningMessage warrningType="auth" method={() => { setAuthMode('register'); openModal() }}/>
        )}
    </div>
)
}
