import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'

export default function Input() {
  return (
	<div className = 'flex justify-between p-2'>
		<div>
			<img 
				src = 'https://previews.123rf.com/images/valentint/valentint1611/valentint161105164/66183942-my-account-icon-my-account-website-button-on-white-background.jpg'
				alt = "profile-image"
				className = 'w-12 h-12 rounded-full'
			/>
		</div>
	
		<div className = 'w-full p-2'>
			<textarea 
				placeholder = "What's happening?"
				className = 'w-full border-none focus:ring-0 outline-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700'
				rows = {2}
			/>
			<div className = 'flex justify-between p-2 border-t b-gray-500'>
				<div className = 'flex'>
					<PhotoIcon className = 'hoverEffect h-9 p-2 mr-2 text-sky-500 hover:bg-sky-100'/>
					<FaceSmileIcon className = 'hoverEffect h-9 p-2 text-sky-500 hover:bg-sky-100'/>
				</div>

				<button disabled className = 'py-2 px-5 hover:brightness-95 bg-blue-400 rounded-full text-white disabled:opacity-50'>Tweet</button>
			</div>
		</div>
	</div>
  )
}
