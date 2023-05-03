import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, ShareIcon, HeartIcon } from '@heroicons/react/24/outline'
import { IFeedItem } from './Feed'
export default function FeedItem({name, userName, img, bg_img, timeStamp}: IFeedItem) {
  return (
	<div className = 'border-b border-t b-gray-500 t-3'>
		<div className = 'flex items-start justify-between p-2'>
			<img 
				src = {img} 
				alt = "profile-image"
				className = 'w-12 h-12 rounded-full'
			/>	

			<div className = 'flex-col flex-1'>
				<div className = 'flex justify-between'>
					<div className = 'flex items-center ml-2'>
						<h4 className = 'font-bold mr-2 hover:underline'>{name}</h4>
						<span>@{userName} </span>
						<span className = 'ml-1 hover:underline'> - {timeStamp}</span>
					</div>
				
					<div className = 'hoverEffect h-9 p-2'>
						<EllipsisHorizontalIcon className = 'h-5 w-5'/>		
					</div>
				</div>

				<div className = 'p-2'>
					<img 
						src = {bg_img} alt = "bg"
						className = 'rounded-2xl' 
					/>
				</div>

				<div className = 'flex justify-between h-9'>
					<ChatBubbleOvalLeftEllipsisIcon 
						className = 'hoverEffect p-2'
					/>
					<HeartIcon 
						className = 'hoverEffect hover:bg-red-200 hover:text-red-500 p-2'
					/>
					<ShareIcon 
						className = 'hoverEffect hover:bg-red-200 hover:text-red-500 p-2'
					/>
					<ChartBarIcon 
						className = 'hoverEffect p-2'
					/>
				</div>
			</div>
		</div>

	</div>
	
  )
}
