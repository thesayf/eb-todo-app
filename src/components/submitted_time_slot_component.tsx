import React, { useState } from "react";
import { Task } from "../app_context";
import { useAppContext } from "../app_context";
import SubmittedTaskComponent from "./submitted_task_component";
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

type SubmittedTimeSlotProps = {
  id: string;
  slotName: string;
  startTime: string;
  endTime: string;
  tasks: Task[];
};

const SubmittedTimeSlot: React.FC<SubmittedTimeSlotProps> = ({
  id,
  slotName,
  startTime,
  endTime,
  tasks: initialTasks,
}) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const { timeSlots, setTimeSlots } = useAppContext();
  const tasksCompleted = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const calculateProgress = (tasks: Task[]) => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    return (completedTasks / tasks.length) * 100;
  };

  const [progress, setProgress] = React.useState<number>(
    calculateProgress(tasks)
  );
  const handleEdit = () => {
    const updatedTimeSlots = timeSlots.map((slot) =>
      slot.id === id ? { ...slot, isSubmitted: false } : slot
    );
    setTimeSlots(updatedTimeSlots);
  };

  const handleAssignmentDisplay = (task: Task) => {
    if (task.assignment.type === "Stand Alone Task") {
      return "Stand Alone Task";
    } else {
      return `${task.assignment.type}: ${task.assignment.description}`;
    }
  };

  const completedSlotCheck = () => {
    if (calculateProgress(tasks) === 0) {
      return "incomplete";
    } else if (calculateProgress(tasks) === 100) {
      return "completed";
    } else {
      return "partiallyCompleted";
    }
  };

  const handleComplete = () => {
    const updatedTimeSlots = timeSlots.map((slot) =>
      slot.id === id ? { ...slot, status: completedSlotCheck() } : slot
    );
    setTimeSlots(updatedTimeSlots);
  };

  const handleTaskToggle = (taskIndex: number) => {
    // Update tasks state in the current component
    const updatedTasks = tasks.map((task, idx) =>
      idx === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Update timeSlots state in the context
    const updatedTimeSlots = timeSlots.map((slot) => {
      if (slot.id === id) {
        const updatedSlotTasks = slot.tasks.map((task, idx) =>
          idx === taskIndex ? { ...task, completed: !task.completed } : task
        );
        return { ...slot, tasks: updatedSlotTasks };
      }
      return slot;
    });
    setTimeSlots(updatedTimeSlots);
    setProgress(calculateProgress(updatedTasks)); // Update progress based on the new tasks state
  };

  const onDragStart = (event: DragStartEvent) => {
    setActiveTask(event.active.data.current?.task);
  };

  const onDragOver = (event: DragOverEvent) => {
    console.log("tasks[0]");

    // const {active, over} = event;

    // if(!over) return

    // const activeId = active.id;
    // const overId = over.id;

    // if(activeId === overId) return;

    // const isActiveTask = active.data.current?.type === "Task"
    // const isOverTask = over.data.current?.type === "Task"

    // if(isActiveTask && isOverTask) {
    //   setTasks((tasks) => {
    //     const activeTaskIndex = tasks.findIndex((task) => task.id === activeId);
    //     const overTaskIndex = tasks.findIndex((task) => task.id === overId);

    //     if(tasks[activeTaskIndex].slotId !== tasks[overTaskIndex].slotId){
    //       tasks[activeTaskIndex].slotId = tasks[overTaskIndex].slotId;
    //     }
    //     return arrayMove(tasks, activeTaskIndex, overTaskIndex);
    //   })
    // }
  };

  return (
    <div className=" bg-base-100 col-span-full p-4 border rounded-md flex flex-col space-y-4 mt-2">
      {/* Main Content */}
      <div className="flex-grow space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Time Slot Name */}
          <div className="flex-grow mr-4">
            <h3 className="font-semibold">{slotName}</h3>
          </div>
          <div className="flex-grow mr-4">
            <progress
              className="progress progress-primary w-56"
              value={progress}
              max="100"
            ></progress>
          </div>
          {/* Time Interval */}
          <div className="text-gray-600">
            Start: {startTime}- End: {endTime}
          </div>
        </div>
        <div className="space-y-4">
          <DndContext onDragStart={onDragStart} onDragCancel={onDragOver}>
            <SortableContext items={tasks.map((task) => task.id)}>
              {tasks.map((task, idx) => (
                <SubmittedTaskComponent
                  key={idx}
                  task={task}
                  index={idx}
                  handleTaskToggle={handleTaskToggle}
                  handleAssignmentDisplay={handleAssignmentDisplay}
                />
              ))}
            </SortableContext>
            {activeTask &&
              createPortal(
                <DragOverlay>
                  <SubmittedTaskComponent
                    task={activeTask}
                    index={activeTask.number - 1}
                    handleTaskToggle={handleTaskToggle}
                    handleAssignmentDisplay={handleAssignmentDisplay}
                  />
                </DragOverlay>,
                document.body
              )}
          </DndContext>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-2 flex justify-end">
        <button
          className="btn btn-outline btn-primary mr-2"
          onClick={handleEdit}
        >
          Edit Slot
        </button>
        {progress === 100 ? (
          <button
            className="btn btn-outline btn-success"
            onClick={handleComplete}
          >
            All Tasks Complete
          </button>
        ) : (
          <button
            className="btn btn-outline btn-info "
            onClick={handleComplete}
          >
            {tasksCompleted}/{totalTasks} Tasks Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default SubmittedTimeSlot;
