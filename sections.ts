import { TopicType } from './types';

export const topics: TopicType[] = [
  {
    title: 'JavaScript Fundamentals',
    description: 'Get started with the basics of JavaScript.',
    route: '/javascript-fundamentals',
  },
  {
    title: 'Summary',
    description: 'Overview of essential concepts.',
    route: '/summary',
  },
  {
    title: 'ES6',
    description: 'Learn about the new features of ES6.',
    route: '/es6',
  },
  {
    title: 'TypeScript',
    description: 'Understand the power of TypeScript.',
    route: '/typescript',
    isExclusive: true,
  },
  {
    title: 'React',
    description: 'Build interactive UIs with React.',
    route: '/react',
    isExclusive: true,
  },
  {
    title: 'Next.js',
    description: 'Learn server-side rendering and static site generation.',
    route: '/next',
    isExclusive: true,
  },
];
