import { useState } from "react";
import { Breadcrumb, MaxWidth } from "@/shared/ui"
import { EnrollForm } from "@/features/enroll-form";
import { SingleCourseInfo } from "@/widgets/single-course"

export const SingleCoursePage = () => {
    
    const [ category, setCategory ] = useState<string>();
    const [ basePrice, setBasePrice ] = useState<number>(0);

    return (
        <MaxWidth className="mt-16 mb-56.25"> 
            <div className="flex flex-col gap-8">
                <Breadcrumb category={category} />
                <div className="flex gap-33.25 ">
                    <SingleCourseInfo onCategory={setCategory} setBasePrice={setBasePrice} />
                    <EnrollForm basePrice={basePrice}/>
                </div>
            </div>
        </MaxWidth>
    )
}