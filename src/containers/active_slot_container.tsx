import React, { useState } from "react";
import { TimeSlot } from "../app_context";
import TimeSlotAdder from "../components/time_slot_adder_component";
import DragableSlot from "../components/dragable_slot";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { createPortal } from "react-dom";
import TestTaskComponent from "../testcomponents/testTaskCoponent";
import { arrayMove } from "@dnd-kit/sortable";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

interface ActiveSlotContainerProps {
    slots: TimeSlot[];
}

interface Slot {
    id: string;
    title: string;
    // Add more fields as needed
  }
  
  interface Task {
    id: string;
    columnId: string;
    content: string;
    // Add more fields as needed
  }

const defaultSLots = [
    {
      id: "todo",
      title: "Todo",
    },
    {
      id: "doing",
      title: "Work in progress",
    },
    {
      id: "done",
      title: "Done",
    },
  ];
  
  const defaultTasks = [
    {
      id: "1",
      columnId: "todo",
      content: "List admin APIs for dashboard",
    },
    {
      id: "2",
      columnId: "todo",
      content:
        "Develop user registration functionality with OTP ",
    },
    {
      id: "3",
      columnId: "doing",
      content: "Conduct security testing",
    },
    {
      id: "4",
      columnId: "doing",
      content: "Analyze competitors",
    },
    {
      id: "5",
      columnId: "done",
      content: "Create UI kit documentation",
    },
    {
      id: "6",
      columnId: "done",
      content: "Dev meeting",
    },
    {
      id: "7",
      columnId: "done",
      content: "Deliver dashboard prototype",
    },
    {
      id: "8",
      columnId: "todo",
      content: "Optimize application performance",
    },
    {
      id: "9",
      columnId: "todo",
      content: "Implement data validation",
    },
    {
      id: "10",
      columnId: "todo",
      content: "Design database schema",
    },
    {
      id: "11",
      columnId: "todo",
      content: "Integrate SSL web certificates into workflow",
    },
    {
      id: "12",
      columnId: "doing",
      content: "Implement error logging and monitoring",
    },
    {
      id: "13",
      columnId: "doing",
      content: "Design and implement responsive UI",
    },
  ];

const  ActiveSlotContainer: React.FC<ActiveSlotContainerProps> =  ({slots}) =>  {

    const [activeTask, setActiveTask] = useState<any>(null);
    const [tasks, setTasks] = useState<Task[]>(defaultTasks);
    const [columns, setColumns] = useState<Slot[]>(defaultSLots); 
    
    

      const onDragStart = (event: any) => {
        setActiveTask(event.active.data.current.task)
        console.log(event.active.data.current.task)
      }

      const ondragover = (event: any) => {
        const { active, over } = event;
            if (!over) return;

            console.log("DRAG OVER" );

            const activeId = active.id;
            const overId = over.id;

            if (activeId === overId) return;

            const isActiveATask = active.data.current?.type === "Task";
            const isOverATask = over.data.current?.type === "Task";

            if (!isActiveATask) return;

            // Im dropping a Task over another Task
            if (isActiveATask && isOverATask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);

                if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
                // Fix introduced after video recording
                tasks[activeIndex].columnId = tasks[overIndex].columnId;
                return arrayMove(tasks, activeIndex, overIndex - 1);
                }

                return arrayMove(tasks, activeIndex, overIndex);
            });
            }

            const isOverAColumn = over.data.current?.type === "Column";

            // Im dropping a Task over a column
            if (isActiveATask && isOverAColumn) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);

                tasks[activeIndex].columnId = overId;
                console.log("DROPPING TASK OVER COLUMN", { activeIndex });
                return arrayMove(tasks, activeIndex, activeIndex);
            });
            }
  }
      


    return (
        <>
        <DndContext onDragStart={onDragStart} onDragOver={ondragover}>
            <SortableContext items={columns.map(slot => slot.id)} strategy={rectSortingStrategy}>
            {
                
                columns.map((slot) => (
                    <DragableSlot key={slot.id} id={slot.id} slot={slot} tasks={tasks.filter(task => task.columnId === slot.id)}/>                
                ))
                
            }
            </SortableContext>

            {
                        activeTask && createPortal(
                            <DragOverlay>
                                <TestTaskComponent id={activeTask.id} task={activeTask} />
                            </DragOverlay>, document.body
                        )
                }
            <TimeSlotAdder /> 
        </DndContext>
        </>

    )
}

export default ActiveSlotContainer;