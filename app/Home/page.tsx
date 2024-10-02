'use client';

import { useRouter } from 'next/navigation';
import { TopicType } from '../../types';
import { topics } from '../../sections';
import { Card } from '../../components/Card';

const HomePage = () => {
  const router = useRouter();

  const handleButtonClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className='flex flex-col items-center  min-h-screen bg-gradient-to-br from-blue-200 to-purple-200 p-4'>
      <div className=' z-10 flex flex-col items-center mt-4'>
        <h1 className='text-6xl font-extrabold text-gray-800 mb-5 text-center'>
          Welcome to the Learning Hub
        </h1>
        <p className='text-lg text-gray-700 mb-8 text-center max-w-xl'>
          Explore various topics to enhance your skills and knowledge in modern
          web development. Click on a topic to get started!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
          {topics.map((topic: TopicType) => (
            <Card
              key={topic.route}
              title={topic.title}
              description={topic.description}
              isExclusive={topic.isExclusive}
              onClick={() => handleButtonClick(topic.route)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
