import React from 'react'
import { Task } from '../app_context'
import { useAppContext } from '../app_context'
import SubmittedTaskComponent from './submitted_task_component';
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TestTaskComponent from './testItemComponent';

type SubmittedTimeSlotProps = {
    index: number;
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[];  
}

const initialItems = ['task1', 'task2', 'task3']

const SubmittedTimeSlot: React.FC<SubmittedTimeSlotProps>  = ({index, slotName, startTime, endTime, tasks}) => {
    const { timeSlots, setTimeSlots } = useAppContext();
    const tasksCompleted = tasks.filter(task => task.completed).length
    const totalTasks = tasks.length
    const calculateProgress = (tasks: Task[]) => {
        const completedTasks = tasks.filter(task => task.completed).length
        return (completedTasks / tasks.length) * 100    
    }

    const [items, setItems] = React.useState(initialItems);

    const sensors = useSensors(
        useSensor(PointerSensor),
      );
    const [progress, setProgress] = React.useState<number>(calculateProgress(tasks));
    const handleEdit = () => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index].isSubmitted = false;
        setTimeSlots(updatedTimeSlots);
    }

    const handleAssignmentDisplay = (task: Task ) => {
        if (task.assignment.type === "Stand Alone Task") {
            return "Stand Alone Task";
        } else {
            return `${task.assignment.type}: ${task.assignment.description}`;
        }
    }

    const completedSlotCheck = () => {
        if (calculateProgress(tasks) === 0) {
            return "incomplete"
        } else if (calculateProgress(tasks) === 100) {
            return "completed"
        } else {
            return "partiallyCompleted"
        }
    }
    
    const handleComplete = () => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index].status = completedSlotCheck()
        setTimeSlots(updatedTimeSlots);
    }

    const handleTaskToggle = (taskIndex: number) => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index].tasks[taskIndex].completed = !updatedTimeSlots[index].tasks[taskIndex].completed;
        setProgress(calculateProgress(updatedTimeSlots[index].tasks));
        setTimeSlots(updatedTimeSlots);
    }

    // const handleDragEnd = (event: DragEndEvent) => {
    //     const { active, over } = event;

    //     if (over && active.id !== over.id) {
    //         // Find the indices of the dragged and the target items
    //         const oldIndex = tasks.findIndex(task => task.id === active.id);
    //         const newIndex = tasks.findIndex(task => task.id === over.id);
    
    //         if (oldIndex !== newIndex) {
    //             // Reorder the tasks
    //             const reorderedTasks = [...tasks];
    //             const [movedItem] = reorderedTasks.splice(oldIndex, 1);
    //             reorderedTasks.splice(newIndex, 0, movedItem);
    //             // Update the specific time slot's tasks in the application state
    //             const updatedTimeSlots = [...timeSlots];
    //             updatedTimeSlots[index].tasks = reorderedTasks;
    //             setTimeSlots(updatedTimeSlots);
    //         }
    //     }
    // };
    
//     const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;

//     if (over && active.id !== over.id) {
//         setItems((items) => {
//             const oldIndex = items.indexOf(active.id as string);
//             const newIndex = items.indexOf(over.id as string);
//             return arrayMove(items, oldIndex, newIndex);
//         });
//     }
// };

const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
        const oldIndex = tasks.findIndex(task => task.id === active.id);
        const newIndex = tasks.findIndex(task => task.id === over.id);

        if (oldIndex !== newIndex) {
            setTimeSlots((currentSlots) => {
                const updatedTimeSlots = [...currentSlots];
                const updatedTasks = arrayMove(updatedTimeSlots[index].tasks, oldIndex, newIndex);
                updatedTimeSlots[index].tasks = updatedTasks;
                return updatedTimeSlots;
            });
        }
    }
};


    
    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4 mt-2">
            {/* Main Content */}
            <div className="flex-grow space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Time Slot Name */}
                    <div className="flex-grow mr-4">
                        <h3 className="font-semibold">{slotName}</h3>
                    </div>
                    <div className="flex-grow mr-4">
                        <progress className="progress progress-primary w-56" value={progress} max="100"></progress>
                    </div>
                    {/* Time Interval */}
                    <div className="text-gray-600">
                        Start: {startTime}- End: {endTime}
                    </div>
                </div>
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
                {/* Tasks
                <div className="space-y-4">
                    {tasks.map((task, idx) => (
                        <SubmittedTaskComponent
                            key={idx}
                            task={task}
                            index={idx}
                            slotIndex={index}
                            handleTaskToggle={handleTaskToggle}
                            handleAssignmentDisplay={handleAssignmentDisplay}/>
                    ))
                    }
                </div> */}
                {
                    tasks.map((task) => (
                    <TestTaskComponent key={task.id} item={task.name} id={task.id} /> 
                    ))
                }

                </SortableContext>
                </DndContext>
            </div>

            {/* Edit Button */}
            <div className="mt-2 flex justify-end">
                <button 
                    className="btn btn-outline btn-primary mr-2"
                    onClick={handleEdit}
                    >
                    Edit Slot
                </button>
                {
                    progress === 100 ? <button className="btn btn-outline btn-success" onClick={handleComplete}>All Tasks Complete</button> : <button className="btn btn-outline btn-info " onClick={handleComplete}>{tasksCompleted}/{totalTasks} Tasks Complete</button>
                }
                
            </div>
        </div>

    )
}

export default SubmittedTimeSlot