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
        <div className="col-span-full md:col-span-1 h-full">
            <h1 className="text-4xl">{getFormattedDate()}</h1>
        </div>
    )
}

export default DateComponent;