import { useEffect, useState } from 'react';

export const OutputTerminal = ({ output }: { output: string[] }) => {
  const [currentOutput, setCurrentOutput] = useState<string[]>([]);
  useEffect(() => {
    setCurrentOutput(output);
    return () => {
      setCurrentOutput([]);
    };
  }, [output]);
  return (
    <div className='mt-4 border p-2 bg-gray-800 text-white rounded font-medium'>
      <p className='text-slate-200'>Output:</p>
      <div className='mt-2 text-green-300 font-sans font-thin text-sm '>
        {currentOutput.map((message, index) => (
          <div key={index}>
            {message}
            {currentOutput.length - 1 === index && (
              <div>
                <span className='text-xs text-gray-400'>[END]</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
