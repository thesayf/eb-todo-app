import React, { useState } from 'react';
import { useAppContext } from '../app_context';

function ScheduleComponent() {
  const {activeSlots, setActiveSlots} = useAppContext();

  return (
    <div className="flex justify-between items-center">
      <div className="text-xl font-bold">Today's Schedule</div>
      <div className="btn-group">
        <button
          className={`btn btn-sm ${activeSlots ? 'btn-active' : ''}`}
          onClick={() => setActiveSlots(true)}
        >
          Active Slots
        </button>
        <button
          className={`btn btn-sm ${!activeSlots ? 'btn-active' : ''}`}
          onClick={() => setActiveSlots(false)}
        >
          Completed Slots
        </button>
      </div>
    </div>
  );
}

export default ScheduleComponent;