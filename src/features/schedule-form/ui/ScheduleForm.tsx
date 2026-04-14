import { useSessionType } from "@/features/schedule-form/hook/useSessionType"
import { AccordionSection } from "./AccordionSection"
import { useWeeklySchedule } from "@/features/schedule-form/hook/useWeeklySchedule"
import { useParams } from "react-router-dom"
import { useTimeSlot } from "@/features/schedule-form/hook/useTimeSlot"
import { useScheduleStore } from "@/entities/schedule"

export const ScheduleForm = () => {
    const { id } = useParams();
    const crsId = Number(id)

    const weeklyScheduleId = useScheduleStore((state) => state.weeklyScheduleId);
    const timeSlotId = useScheduleStore((state) => state.timeSlotId);

    const { data: weeklySchedule } = useWeeklySchedule(Number(crsId));
    const { data: timeSlots } = useTimeSlot(crsId, weeklyScheduleId)
    const { data: sesstionTypes } = useSessionType(crsId, weeklyScheduleId, timeSlotId)

  return (
    <div className="w-[33.845%]">
        {/* Weekly Schedule Section */}
        <div className="w-full flex flex-col gap-8">
            <AccordionSection item={weeklySchedule ?? []} title="Weekly Schedule" number="1" />
            <AccordionSection item={timeSlots ?? []} title="Time Slot" number="2" />
            <AccordionSection item={sesstionTypes ?? []} title="Session Type" number="3" />
        </div>
        
    </div>
  )
}
