const NumberOfVisitors = () => {
  return (
    <div className="flex gap-x-6 justify-center">
      <div className="relative after:absolute after:content-[''] after:w-0.5 after:h-3 after:top-1.5 after:left-24 after:bg-gray-500">
        <span className="text-sm text-gray-600 mr-1">TODAY</span>
        <strong className="text-emerald-600">1234</strong>
      </div>
      <div>
        <span className="text-sm text-gray-600 mr-1">TOTAL</span>
        <strong className="text-gray-600">12345678</strong>
      </div>
    </div>
  );
};

export default NumberOfVisitors;
