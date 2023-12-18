interface IProps {
  name: string;
  color: string;
}

const CategoryTag = ({ name, color }: IProps) => {
  return (
    <div>
      <span className={`text-xs p-0.5 text-white rounded-sm ${color}`}>
        {name}
      </span>
    </div>
  );
};

export default CategoryTag;
