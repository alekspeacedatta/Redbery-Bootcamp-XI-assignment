export interface WeeklySchedule {
  id: number;
  label: string;
  days: string[];
}
export interface TimeSlot {
    id: number,
    label: string,
    startTime: string,
    endTime: string,
}
export interface SessionType {
    id: number,
    courseScheduleId: number,
    name: string,
    priceModifier: string,
    availableSeats: number,
    location: string | null,
}

export type AccordionItemType = WeeklySchedule | TimeSlot | SessionType;