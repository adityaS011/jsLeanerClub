export type TopicType = {
  title: string;
  description: string;
  route: string;
  isExclusive?: boolean;
};

export type SectionOptions =
  | 'Variables'
  | 'Closure'
  | 'This'
  | 'Hoisting'
  | 'Callback';
