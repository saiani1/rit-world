type ItemId = string;

interface TreeItem {
  id: ItemId;
  children: ItemId[];
  hasChildren: boolean;
  isExpanded?: boolean;
  data: {
    title: string;
  };
}

export interface TreeDataType {
  rootId: ItemId;
  items: {
    [key: string]: TreeItem;
  };
}
