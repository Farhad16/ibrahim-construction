const People = ({ name, designation, img, phone }: any) => {
  return (
    <div className="flex flex-col items-center justify-center bg-grad text-black group bg-gray-200 rounded-lg">
      <img
        className="w-full h-[250px] object-cover rounded-t-lg"
        src={img}
        alt={name}
      />
      <div className="flex flex-col w-full mt-4 text-right p-4">
        <span className="text-base text-global font-medium">{name}</span>
        <span className="text-sm text-gray-700">{designation}</span>
        <span className="text-xs mt-1 text-gray-700">{phone}</span>
      </div>
    </div>
  );
};

export default People;
