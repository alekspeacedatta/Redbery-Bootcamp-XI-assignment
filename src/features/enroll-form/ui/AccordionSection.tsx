import { useCourseStore } from "@/entities/course";
import type { AccordionItemType, SessionType, TimeSlot, WeeklySchedule } from "@/entities/schedule";
import { useScheduleStore } from "@/entities/schedule/model/useScheduleStore";
import { Button } from "@/shared/ui";
import { faMoon, faSun, faUser, faCircleStop } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp, faCloudSun, faComputer, faLocationDot, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  opened?: boolean;
  title: string;
  number: string;
  item: AccordionItemType[];
}

export const AccordionSection = ({ title, number, item, opened }: Props) => {

  const location = useLocation();

//   Type Guards  
  const isWeeklySchedule = (item: AccordionItemType): item is WeeklySchedule => "days" in item;
  const isTimeSlot = (item: AccordionItemType): item is TimeSlot => "startTime" in item;

//   Ids and id setters from SchedureStore
  const weeklyScheduleId = useScheduleStore((state) => state.weeklyScheduleId);
  const timeSlotId = useScheduleStore((state) => state.timeSlotId);
  const sessionTypeId = useScheduleStore((state) => state.sessionTypeId);
  const setWeeklyScheduleId = useScheduleStore((state) => state.setWeeklyScheduleId);
  const setTimeSlotId = useScheduleStore((state) => state.setTimeSlotId);
  const setSessionTypeId = useScheduleStore((state) => state.setSessionTypeId);
  const updateCoursePrice = useCourseStore((state) => state.updateCoursePrice)

//   to make control is section opened or not also style of numbered style
  const [isOpen, setIsOpen] = useState<boolean>(number === '1');

// after TimeSlot array and WeeklySchedule array are not empty opened becomes true and isOpend toggles
    useEffect(() => {
      setIsOpen(!!opened);
    }, [opened]);

    useEffect(() => {
        setWeeklyScheduleId(0);
    }, [location.pathname])
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
    disabled:bg-[#F5F5F5] disabled:text-[#D1D1D1] disabled:border-[#D1D1D1] disabled:cursor-default disabled:opacity-40
    hover:bg-[#DDDBFA] hover:border-[#958FEF] hover:text-[#4F46E5] 
    border rounded-xl transition-colors duration-200 hover:opacity-100 cursor-pointer
  `;

  return (
    // Accordion Section Wrapper
    <div className="w-full flex flex-col gap-4.5">
        {/* Accordion Header For each Section */}
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
            {/* Rounded Number */}
            <p className="font-semibold">{number}</p>
          </div>
          {/* Title of the Header */}
          <h3 className="text-2xl text-[#130E67] font-semibold leading-none">{title}</h3>
        </div>
        {/* Rotating Arrow of Accordion section */}
        <FontAwesomeIcon
          icon={faArrowUp}
          className={`${isOpen ? "-rotate-180" : "rotate-0"} transition-transform duration-200`}
        />
      </div>

      {/* conditional rendering according to which data we get for each Accordion Section call */}
      {isOpen && item.length > 0 && (
        // Accordion Section Content Wrapper
        <div className="flex gap-1.5">
          {/* Checks if sent data is WeeklySchedule type with type guard above :20 line */}
            {isWeeklySchedule(item[0]) ? (item as WeeklySchedule[]).map((i) => {
                    const label =
                        i.label === "Weekend Only" ? "Weekend" : i.label
                        .split(" - ")
                        .map(day => day.slice(0, 3))
                        .join(" - ");
                    return (
                        <button
                            key={i.id}
                            onClick={() => handleSelect(i.id)}
                            className={`${buttonClass(i.id)} py-9 flex-1`}
                            >
                            <p className="font-semibold leading-none">
                                {label}
                            </p>
                        </button>
                    );
                    })
                //   Checks if sent data is TimeSlot type with type guard above :21 line 
                : isTimeSlot(item[0])
                ? (item as TimeSlot[]).map((i) => (
                    <Button
                    variant="link"
                    key={i.id}
                    onClick={() => handleSelect(i.id)}
                    className={`${buttonClass(i.id)} rounded-xl flex justify-center gap-3 py-3.5 px-5`}
                    >
                        <FontAwesomeIcon className="text-[#666666]" icon={i.label.split(" ")[0] === 'Morning' ? faCloudSun : i.label.split(" ")[0] === 'Afternoon' ? faSun : faMoon}/>
                        <div className="flex flex-col items-start gap-0.5">
                            <p className="font-medium leading-none text-sm text-[#666666]">{i.label.split(" ")[0]}</p>
                            <p className="leading-none text-[10px] text-[#666666]">{i.startTime} - {i.endTime}</p>
                        </div>
                    </Button>
                ))
                //   Renders Sesstion Type
                : (item as SessionType[]).map((sessionType) => (
                    <div className="flex flex-col gap-2 w-50">
                        <button
                            key={sessionType.id}
                            onClick={() => {
                                handleSelect(sessionType.id);
                                updateCoursePrice(Number(sessionType.priceModifier))
                            }}
                            disabled={sessionType.availableSeats === 0}
                            className={`${buttonClass(sessionType.id)} flex flex-col items-center`}
                        >
                            {/* Inner Wrapper */}
                            <div className={` 
                                    ${ sessionType.id === activeId ? 'text-[#4F46E5]' : 'text-[#525252]' } 
                                    flex flex-col items-center justify-center p-10 gap-1.5 hover:text-[#4F46E5]
                                    transition-colors
                                `}>
                                {/* Session Tyoe Icon */}
                                <FontAwesomeIcon className="text-3xl " icon={sessionType.name === 'online' ? faComputer : sessionType.name === 'in_person' ? faUser : faCircleStop}/>
                                <p className="font-semibold leading-none ">
                                    {sessionType.name}
                                </p>
                                {/* Location and  Session Type Name */}
                                <p className=" font-normal text-xs leading-none">
                                    {/* Location Dot if location exsits */}
                                    {sessionType.location && <FontAwesomeIcon icon={faLocationDot} className="mr-0.5"/>} 
                                    {sessionType.location ? sessionType.location : 'Google Meets'}
                                </p>          
                                {/* Adding Aditional Price according to Session Type */}
                                <p className='text-sm text-[#736BEA] font-medium leading-none'>
                                   {sessionType.priceModifier === '0.00' ? 'included' : ` + ${sessionType.priceModifier}`} 
                                </p>
                            </div>
                        </button>
                        {/* Renders how many Available seats are left */}
                        <p className={`text-center text-xs font-medium ${sessionType.availableSeats >= 5 ? `text-[#3D3D3D]` : 'text-[#F4A316]'}`}>
                            {sessionType.availableSeats < 5 && <FontAwesomeIcon icon={faWarning} className="mr-1"/>}
                            {sessionType.availableSeats > 5 ? `${sessionType.availableSeats} Seats Available` : `Only ${sessionType.availableSeats} Seates Remaining`}
                        </p>
                    </div>
                ))
          }
        </div>
      )}
    </div>
  );
};