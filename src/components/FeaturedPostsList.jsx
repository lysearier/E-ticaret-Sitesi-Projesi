import FeaturedPost from './cards/FeaturedPosts';

import post1 from '../assets/photos/post1.jpg';
import post2 from '../assets/photos/post2.jpg';
import post3 from '../assets/photos/post3.jpg';

const posts = [
  {
    image: post1,
    badges: ['Google', 'Trending', 'New'],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 10,
  },
  {
    image: post2,
    badges: ['Meta', 'Insight', 'Design'],
    title: 'Understanding Human Centered Design',
    description: "Design isn't just what it looks like and feels like. Design is how it works.",
    date: '10 May 2021',
    comments: 5,
  },
  {
    image: post3,
    badges: ['Apple', 'Product', 'Innovation'],
    title: 'The Future of Mobile Computing',
    description: 'The next generation of hardware is already in your pocket. Explore the innovation curve.',
    date: '30 March 2021',
    comments: 12,
  },
];

export default function FeaturedPostsList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {posts.map((post, index) => (
        <FeaturedPost key={index} {...post} />
      ))}
    </div>
  );
}
