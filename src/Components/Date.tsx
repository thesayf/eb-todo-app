import React from "react";

const getFormattedDate = (): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return Intl.DateTimeFormat("en-US", options).format(new Date());
};

const DateComponent: React.FC = () => {
    return(
        <div className="col-span-full md:col-span-1 border h-full">
            Date
        </div>
    )
}

export default DateComponent;