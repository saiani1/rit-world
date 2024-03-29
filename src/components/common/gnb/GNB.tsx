import { useState } from "react";
import Tree, {
  mutateTree,
  moveItemOnTree,
  RenderItemParams,
  TreeItem,
  ItemId,
  TreeSourcePosition,
  TreeDestinationPosition,
  TreeData
} from "@atlaskit/tree";

import { treeData } from "./constants";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const GNB = () => {
  const [tree, setTree] = useState<TreeData>(treeData);

  const getIcon = (
    item: TreeItem,
    onExpand: (itemId: ItemId) => void,
    onCollapse: (itemId: ItemId) => void
  ) => {
    if (item.children && item.children.length > 0) {
      return item.isExpanded ? (
        <button
          type="button"
          onClick={() => onCollapse(item.id)}
        >
          <IoIosArrowDown
            onClick={() => onCollapse(item.id)}
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onExpand(item.id)}
        >
          <MdKeyboardArrowRight
            onClick={() => onExpand(item.id)}
           />
        </button>
      );
    }
    return <GoDotFill />;
  }

  const onExpand = (itemId: ItemId) => {
    const transformTree = mutateTree(tree, itemId, { isExpanded: true });
    setTree(transformTree);
  };

  const onCollapse = (itemId: ItemId) => {
    const transformTree = mutateTree(tree, itemId, { isExpanded: false });
    setTree(transformTree);
  };

  const onDragEnd = (source: TreeSourcePosition, destination?: TreeDestinationPosition) => {
    if (!destination) return;
    const newTree = moveItemOnTree(tree, source, destination);
    setTree(newTree);
  }

  const renderItem = ({
    item,
    onExpand,
    onCollapse,
    provided,
  }: RenderItemParams) => {
    return (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="flex items-center"
      >
        <span>{getIcon(item, onExpand, onCollapse)}</span>
        <span>{item.data ? item.data.title : ''}</span>
      </div>
    )
  }

  return (
    <nav className="mt-[10px] py-[25px] px-[30px] w-[280px] h-[450px] bg-white rounded-xl">
      <h2 className="mb-[30px] text-[#888] font-medium text-[11px]">Category</h2>
      <ul>
        <Tree
          tree={tree}
          renderItem={renderItem}
          onExpand={onExpand}
          onCollapse={onCollapse}
          onDragEnd={onDragEnd}
          isDragEnabled
          isNestingEnabled
         />
      </ul>
    </nav>
  );
};

export default GNB;
