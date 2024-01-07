import React from "react";
import SubmittedTimeSlot from "./submitted_time_slot_component";
import UnsubmittedTimeSlot from "./unsubmitted_time_slot_component";
import TestTaskComponent from "../testcomponents/testTaskCoponent";
import { SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface DragagableSlotPtrops {
  slot: any;
  id: string;
  tasks: Array<any>;
  isActive: boolean; // Add this line
  isOverlay?: boolean; // Add this line
}

const DragableSlot: React.FC<DragagableSlotPtrops> = ({
  slot,
  tasks,
  isActive,
  isOverlay,
}) => {
  // const { setNodeRef, isOver, over } = useDroppable({
  //     id: slot.id,
  //     data: {
  //         type: 'Column',
  //     },
  // });

  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
  } = useDraggable({ id: slot.id, data: { type: "Column", slot: slot } });
  const { setNodeRef: setDroppableNodeRef } = useDroppable({
    id: slot.id,
    data: { type: "Column", slot: slot },
  });

  const setNodeRef = (node: HTMLElement | null) => {
    setDraggableNodeRef(node);
    setDroppableNodeRef(node);
  };

  const placeholderStyle = {
    border: "1px",
    minHeight: "400px",
    margin: "10px",
    backgroundColor: "grey",
  };

  if (isActive && !isOverlay) {
    return (
      <div
        ref={setNodeRef}
        className="col-span-full p-4 border rounded-md bg-white mt-2 opacity-50"
      >
        <div {...listeners} {...attributes} className="handle">
          Drag
        </div>
        <div className="text-lg font-bold">{slot.title}</div>
        <SortableContext items={tasks.map((task) => task.id)}>
          {tasks.map((task) => {
            return <TestTaskComponent key={task.id} id={task.id} task={task} />;
          })}
        </SortableContext>
      </div>
    );
  }

  return (
    <div>
      {slot.isSubmitted ? (
        <SubmittedTimeSlot
          key={slot.id}
          id={slot.id}
          slotName={slot.name}
          startTime={slot.startTime}
          endTime={slot.endTime}
          tasks={slot.tasks}
        />
      ) : (
        <UnsubmittedTimeSlot
          key={slot.id}
          id={slot.id}
          slotName={slot.name}
          startTime={slot.startTime}
          endTime={slot.endTime}
          tasks={slot.tasks}
        />
      )}
    </div>
    // <>
    // {/* <div ref={setNodeRef} className="col-span-full p-4 border rounded-md bg-white mt-2">
    //     <div {...listeners} {...attributes} className="handle">Drag</div>
    //     <div className="text-lg font-bold">{slot.title}</div>
    //     <SortableContext items={tasks.map(task => task.id)}>
    //     {
    //         tasks.map((task) => {
    //             return (
    //                 <TestTaskComponent key={task.id} id={task.id} task={task} />
    //         )
    //     })
    //     }
    //     </SortableContext>
    // </div> */}
    // </>
  );
};

export default DragableSlot;
