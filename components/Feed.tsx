import { SparklesIcon } from '@heroicons/react/24/outline';
import FeedItem from './FeedItem';
import Input from './Input';

export interface IFeedItem  {
  id: number
  name: string
  userName: string
  img: string
  bg_img: string
  timeStamp: string
}

const feedItems: IFeedItem[] = [
  {
    id: 1,
    name: 'Olena Sherman',
    userName: 'olenasherman',
    img: "https://previews.123rf.com/images/valentint/valentint1611/valentint161105164/66183942-my-account-icon-my-account-website-button-on-white-background.jpg",
    bg_img: 'https://media.istockphoto.com/id/470968021/photo/magic-pink-rhododendron-flowers-in-the-mountains-summer-sunrise.jpg?s=612x612&w=0&k=20&c=KXE3ejKsKpVktqkHxe_ADWC15Rlxmts9956kD2CSaWc=',
    timeStamp: 'two days ago'
  },
  {
    id: 2,
    name: 'Olena Sherman',
    userName: 'olenasherman',
    img: "https://previews.123rf.com/images/valentint/valentint1611/valentint161105164/66183942-my-account-icon-my-account-website-button-on-white-background.jpg",
    bg_img: 'https://media.istockphoto.com/id/481565157/photo/summer-landscape-in-the-mountains-sunrise.jpg?s=612x612&w=0&k=20&c=hSsdF6-al6_7nTP6NM3Fk1xeennt8fQOSS68KI7Crps=',
    timeStamp: 'two months ago'
  },
]
export default function Feed() {
  return (
	<div className = 'xl:ml-[370px] sm:ml-[73px] xl:min-w-[576px] border-l border-r border-gray-200 flex-grow'>
    <div className = 'flex justify-between items-center p-3 sticky top-0 bg-white border-b border-gray-200'>
      <h2 className = 'text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
      <div className = 'flex items-center p-2 h-9 w-9 hoverEffect'>
        <SparklesIcon className = 'w-5'/>
      </div>
    </div>

    <Input />
    <div>
      {
        feedItems.map(item => <FeedItem key = {item.id} {...item} />)
      }
    </div>
  </div>
  )
}
