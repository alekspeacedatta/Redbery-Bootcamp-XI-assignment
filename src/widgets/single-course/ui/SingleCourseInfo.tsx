import { useParams } from "react-router-dom"
import { useSingleCourse } from "../hooks/useSingleCourse"
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faBullhorn, faChain, faCode, faPaintBrush, faStar } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/shared/ui";
import { useCourseStore } from "@/entities/course";

interface Props {
    onCategory: ( cat: string ) => void,
    setBasePrice: ( value : number ) => void,
}

export const SingleCourseInfo = ( { onCategory, setBasePrice } : Props ) => {

    const { id } = useParams();
    const { data: singleCourse, isLoading, isError, error } = useSingleCourse(Number(id));

    const setCoursePrice = useCourseStore((state) => state.setCoursePrice);
    
    useEffect(() => {
        setBasePrice(Number(singleCourse?.basePrice));
    })

    useEffect(() => {
        if (singleCourse?.category.name) {
        onCategory?.(singleCourse.category.name);
        }
        setCoursePrice(Number(singleCourse?.basePrice))
    }, [singleCourse]);


    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>{error.message}</p>

    const averageRating = singleCourse?.reviews.length
    ? (singleCourse.reviews.reduce((sum, r) => sum + r.rating, 0) / singleCourse.reviews.length).toFixed(1)
    : null;

    return (
        // Course Wrapper
        <div className="flex flex-col gap-4.5 w-[57.663%]">
            {/* Course TITLE */}
            <h1 className="text-5xl text-[#141414] font-semibold leading-none">
                {singleCourse?.title}
            </h1>
            {/* Course Img, Category, duration, rating */}
            <div className="flex flex-col gap-4 items-start">
                {/* Img */}
                <img src={singleCourse?.image} alt="Course Image" 
                    className="rounded-[10px] w-full h-118.5 object-cover " 
                />
                 {/* Course Category, duration, rating */}
                <div className="flex justify-between items-center w-full">
                    {/* duration */}
                    <div className="flex items-center gap-3
                        has-[:p]:text-[#525252] has-[:p]:text-sm 
                        has-[:p]:font-medium has-[:p]:leading-none
                    ">
                        <p>
                            <FontAwesomeIcon  icon={faCalendar} className="mr-1"/>
                            {singleCourse?.durationWeeks} Weeks
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faClock} className="mr-1"/>
                            {singleCourse?.hours} Hours
                        </p>
                    </div>
                    {/* Category, Rating */}
                    <div className="flex items-center gap-4 has-[:p]:text-[#525252] has-[:p]:text-sm 
                        has-[:p]:font-medium has-[:p]:leading-none">
                        <p>
                            <FontAwesomeIcon  icon={faStar} className="mr-1 text-yellow-500"/>
                            {averageRating}
                        </p>
                        {/* Category  */}
                        <div
                            className="
                                    bg-white text-[#525252] py-2 px-3 text-base
                                        font-medium leading-6 rounded-xl flex items-center gap-1.5
                                    "
                            >
                            <FontAwesomeIcon
                                icon={
                                singleCourse?.category.icon === "development"
                                    ? faCode
                                    : singleCourse?.category.icon === "design"
                                    ? faPaintBrush
                                    : singleCourse?.category.icon === "buisness"
                                        ? faBriefcase
                                        : singleCourse?.category.icon === "marketing"
                                        ? faBullhorn
                                        : faChain
                                }
                                className="mt-05"
                            />
                            {singleCourse?.category.name}
                        </div>
                    </div>
                </div>
                {/* Instructor and Course Description*/}
                <div className="mt-0.5 flex flex-col gap-4.5 items-start">
                    <Badge className="px-3 h-11.5">
                        <img src={singleCourse?.instructor.avatar} alt="Instuctor avatar"
                        className="
                            h-7.5 w-7.5 object-cover rounded-sm
                        " />
                        <p className="tetx-[#666666] font-medium leading-6">
                            {singleCourse?.instructor.name}
                        </p>
                    </Badge>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl text-[#8A8A8A] font-semibold leading-6">
                            Course Description
                        </h3>
                        <p className="text-[#525252] font-medium leading-6">
                            {singleCourse?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}