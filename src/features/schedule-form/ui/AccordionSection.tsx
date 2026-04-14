import type { AccordionItemType, SessionType, TimeSlot, WeeklySchedule } from "@/entities/schedule";
import { useScheduleStore } from "@/entities/schedule/model/useScheduleStore";
import { Button } from "@/shared/ui";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  title: string;
  number: string;
  item: AccordionItemType[];
}

const isWeeklySchedule = (item: AccordionItemType): item is WeeklySchedule => "days" in item;
const isTimeSlot = (item: AccordionItemType): item is TimeSlot => "startTime" in item;

export const AccordionSection = ({ title, number, item }: Props) => {
  const weeklyScheduleId = useScheduleStore((state) => state.weeklyScheduleId);
  const timeSlotId = useScheduleStore((state) => state.timeSlotId);
  const sessionTypeId = useScheduleStore((state) => state.sessionTypeId);
  const setWeeklyScheduleId = useScheduleStore((state) => state.setWeeklyScheduleId);
  const setTimeSlotId = useScheduleStore((state) => state.setTimeSlotId);
  const setSessionTypeId = useScheduleStore((state) => state.setSessionTypeId);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getActiveId = () => {
    if (!item.length) return 0;
    if (isWeeklySchedule(item[0])) return weeklyScheduleId;
    if (isTimeSlot(item[0])) return timeSlotId;
    return sessionTypeId;
  };

  const handleSelect = (id: number) => {
    if (!item.length) return;
    if (isWeeklySchedule(item[0])) return setWeeklyScheduleId(id);
    if (isTimeSlot(item[0])) return setTimeSlotId(id);
    setSessionTypeId(id);
  };

  const activeId = getActiveId();

  const buttonClass = (id: number) => `
    ${id === activeId
      ? "bg-[#DDDBFA] border-[#958FEF] text-[#4F46E5]"
      : "border-[#D1D1D1] bg-white text-[#292929]"
    }
    disabled:bg-[#F5F5F5] disabled:text-[#D1D1D1] disabled:border-[#D1D1D1] disabled:cursor-not-allowed
    hover:bg-[#DDDBFA] hover:border-[#958FEF] hover:text-[#4F46E5]
    border rounded-[10px] transition-colors duration-200 hover:opacity-100
  `;

  return (
    <div className="w-full flex flex-col gap-4.5">
      <div
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={() => setIsOpen((p) => !p)}
      >
        <div className="flex items-center gap-2.75">
          <div className={`
            rounded-full border-2 border-[#130E67] flex justify-center items-center
            transition-colors duration-200 h-7 w-7
            ${!isOpen ? "bg-[#130E67] text-white" : "bg-transparent text-[#130E67]"}
          `}>
            <p className="font-semibold">{number}</p>
          </div>
          <h3 className="text-2xl text-[#130E67] font-semibold leading-none">{title}</h3>
        </div>
        <FontAwesomeIcon
          icon={faArrowUp}
          className={`${isOpen ? "-rotate-180" : "rotate-0"} transition-transform duration-200`}
        />
      </div>

      {isOpen && item.length > 0 && (
        <div className="flex gap-1.5">
          {isWeeklySchedule(item[0])
            ? (item as WeeklySchedule[]).map((i) => {
                const label =
                    i.label === "Weekend Only"
                    ? "Weekend"
                    : i.label
                        .split(" - ")
                        .map(day => day.slice(0, 3))
                        .join(" - ");

                return (
                    <Button
                    variant="link"
                    key={i.id}
                    onClick={() => handleSelect(i.id)}
                    className={`${buttonClass(i.id)} py-9 flex-1`}
                    >
                    <p className="font-semibold leading-none">
                        {label}
                    </p>
                    </Button>
                );
                })
            : isTimeSlot(item[0])
            ? (item as TimeSlot[]).map((i) => (
                <Button
                  variant="link"
                  key={i.id}
                  onClick={() => handleSelect(i.id)}
                  className={`${buttonClass(i.id)} rounded-xl flex justify-center gap-3 py-3.5 px-5`}
                >
                    <FontAwesomeIcon icon={i.label.split(" ")[0] === 'Morning' ? faCloudSun : i.label.split(" ")[0] === 'Afternoon' ? faSun : faMoon}/>
                    <div className="flex flex-col items-start gap-0.5">
                        <p className="font-medium leading-none text-sm text-[#666666]">{i.label.split(" ")[0]}</p>
                        <p className="leading-none text-[10px] text-[#666666]">{i.startTime} - {i.endTime}</p>
                    </div>
                </Button>
              ))
            : (item as SessionType[]).map((i) => (
                <Button
                  variant="link"
                  key={i.id}
                  onClick={() => handleSelect(i.id)}
                  disabled={i.availableSeats === 0}
                  className={buttonClass(i.id)}
                >
                  <p className="font-semibold leading-none">{i.name}</p>
                  <p className="text-sm">
                    {i.availableSeats === 0
                      ? "No Seats Available"
                      : `${i.availableSeats} Seats Available`
                    }
                  </p>
                </Button>
              ))
          }
        </div>
      )}
    </div>
  );
};