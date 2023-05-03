import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import { HashtagIcon, HomeIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon } from '@heroicons/react/24/outline'

export type menuItemType = {
	title: string
	Icon: React.ReactNode
	active: boolean
}

export default function Sidebar() {

	const itemStyle: string = 'h-7 text-gray-700'
	const menuItems: menuItemType[] = [
		{
			title: 'Home',
			Icon: <HomeIcon className = {itemStyle} />,
			active: true
		},
		{
			title: 'Explore',
			Icon: <HashtagIcon className = {itemStyle} />,
			active: false
		},
		{
			title: 'Notifictions',
			Icon: <BellIcon className = {itemStyle} />,
			active: false
		},
		{
			title: 'Messages',
			Icon: <InboxIcon className = {itemStyle} />,
			active: false
		},
		{
			title: 'Bookmarks',
			Icon: <BookmarkIcon className = {itemStyle} />,
			active: false
		},
		{
			title: 'Lists',
			Icon: <ClipboardIcon className = {itemStyle} />,
			active: false
		},
		{
			title: 'Profile',
			Icon: <UserIcon className = {itemStyle} />,
			active: false
		},
		{
			title: 'More',
			Icon: <EllipsisHorizontalCircleIcon className = {itemStyle} />,
			active: false
			
		},
	]
  return (
	<div className = 'sm:flex flex-col p-2 items-start fixed h-full'>
		<div className = 'hoverEffect mb-3 w-12 p-1 hover:bg-blue-100'>
			<Image 
				src = 'https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png'
				width = "50"
				height = "50"
				alt = 'logo'
				
			/>
		</div>

		<div>
			{
				menuItems.map(item => <SidebarMenuItem key = {item.title} {...item}/>)
			}

		</div>

		<button 
			className = 'w-56 h-12 bg-blue-sky-200 mt-4 ml-2 p-3 rounded-full text-white text-lg bg-blue-400 hover:brightness-95 hidden xl:inline'
		>Tweet</button>

		<div className = 'flex justify-center xl:justify-between items-center mt-4 p-2 hoverEffect '>
			<div className = 'flex items-center mt-auto'>
				<img 
					src="https://previews.123rf.com/images/valentint/valentint1611/valentint161105164/66183942-my-account-icon-my-account-website-button-on-white-background.jpg" 
					alt = "profile-image"
					className = 'w-10 h-10 rounded-full xl:mr-2'
				/>
				<div className = 'ml-2 hidden xl:inline'>
					<p className = 'font-bold'>Olena Sherman</p>
					<p>@olena_sherman</p>
				</div>
			</div>

			<EllipsisHorizontalIcon className = 'xl:ml-8 h-8 w-8 p-2 hidden xl:inline'/>
		</div>
	</div>
  )
}
