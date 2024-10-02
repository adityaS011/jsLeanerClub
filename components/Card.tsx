export const Card = ({
  title,
  description,
  onClick,
  isExclusive = false, // New prop to control badge visibility
}: {
  title: string;
  description: string;
  onClick: () => void;
  isExclusive?: boolean; // Optional prop
}) => {
  return (
    <div
      className='relative flex flex-col overflow-hidden justify-between p-6 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105'
      onClick={onClick} // Added onClick to the card itself
    >
      {/* Sash/Badge */}
      {isExclusive && (
        <div className='absolute top-2 right-[-35px] p-0'>
          <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold py-2 px-4 pl-12 w-36 h-fit rotate-45'>
            Exclusive
          </div>
        </div>
      )}

      <h2 className='text-2xl font-semibold max-w-52 w-full mb-2 text-gray-800'>
        {title}
      </h2>
      <p className='text-gray-600 mb-4 '>{description}</p>
      <button className='px-4 py-2 text-sm font-semibold text-white  bg-gradient-to-r from-teal-500 to-blue-600 rounded-md hover:bg-green-700 transition duration-300 ease-in-out'>
        Let's F***ing go!
      </button>
    </div>
  );
};

export default Card;
