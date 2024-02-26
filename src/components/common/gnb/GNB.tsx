import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface IList {
  id: number;
  name: string;
}

const gnb_list = [
  {
    id: 1,
    name: "프로필",
  },
  {
    id: 2,
    name: "다이어리",
  },
  {
    id: 3,
    name: "맛집기행",
  },
  {
    id: 4,
    name: "극한체험",
  },
  {
    id: 5,
    name: "디스패치",
  },
  {
    id: 6,
    name: "방명록",
  },
];

const GNB = () => {
  const [clickedMenu, setClickedMenu] = useState("홈");
  const [isActiveDND, setIsActiveDND] = useState(false);
  const [list, setList] = useState<IList[]>(gnb_list);

  const handleClickMenu = (e: React.MouseEvent<HTMLUListElement>) => {
    const name = (e.target as HTMLSpanElement).textContent;
    if (name !== null) setClickedMenu(name);
  };

  const handleClickDNDBtn = () => {
    setIsActiveDND((prev) => !prev);
  };

  const reorder = (list: IList[], startIndex: number, endIndex: number) => {
    const result: IList[] = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, combine } = result;
    if (combine) return;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const items = reorder(list, result.source.index, result.destination!.index);

    setList(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" isDropDisabled={!isActiveDND}>
        {(provided) => (
          <ul
            ref={provided.innerRef}
            onClick={handleClickMenu}
            className="flex flex-col gap-y-1 absolute top-32 right-3.5"
            {...provided.droppableProps}
          >
            <li className="flex justify-center items-center">
              <span
                className={`flex justify-center items-center w-20 h-10 rounded-r-md border-y-2 border-r-2 border-slate-400 cursor-pointer ${
                  clickedMenu === "홈"
                    ? "bg-white text-slate-400 font-bold"
                    : "text-white bg-slate-400"
                }`}
              >
                홈
              </span>
            </li>

            {list.map((gnb, i) => (
              <Draggable
                key={gnb.id}
                index={i}
                draggableId={String(gnb.id)}
                isDragDisabled={!isActiveDND}
              >
                {(provided) => (
                  <li
                    className="flex justify-center items-center"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span
                      className={`flex justify-center items-center w-20 h-10 rounded-r-md border-y-2 border-r-2 border-slate-400 cursor-pointer ${
                        clickedMenu === gnb.name
                          ? "bg-white text-slate-400 font-bold"
                          : "text-white bg-slate-400"
                      } ${
                        isActiveDND && "text-white bg-red-400 border-red-400"
                      }`}
                    >
                      {gnb.name}
                    </span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <li className="flex justify-center items-center">
              <button
                type="button"
                className="flex justify-center items-center w-20 h-10 rounded-r-md border-y-2 border-r-2 border-slate-400 text-white bg-slate-400"
                onClick={handleClickDNDBtn}
              >
                <IoMdSettings className="text-2xl" />
              </button>
            </li>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default GNB;
