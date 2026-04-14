import { create } from "zustand";

interface ScheduleStoreProps {
  weeklyScheduleId: number;
  timeSlotId: number;
  sessionTypeId: number;
  setWeeklyScheduleId: (id: number) => void;
  setTimeSlotId: (id: number) => void;
  setSessionTypeId: (id: number) => void;
}
export const useScheduleStore = create<ScheduleStoreProps>((set) => ({
  weeklyScheduleId: 0,
  timeSlotId: 0,
  sessionTypeId: 0,
  setWeeklyScheduleId: (id) =>
    set((state) => ({ 
      weeklyScheduleId: state.weeklyScheduleId === id ? 0 : id,
      timeSlotId: 0,  
      sessionTypeId: 0,
    })),
  setTimeSlotId: (id) =>
    set((state) => ({ 
      timeSlotId: state.timeSlotId === id ? 0 : id,
      sessionTypeId: 0,
    })),
  setSessionTypeId: (id) =>
    set((state) => ({ 
      sessionTypeId: state.sessionTypeId === id ? 0 : id 
    })),
}));