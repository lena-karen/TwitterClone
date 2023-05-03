import { menuItemType } from './Sidebar'

export default function SidebarMenuItem({title, Icon, active}: menuItemType) {
  return (
	<div className = 'flex items:center xl:justify-start p-4 hover:hoverEffect'>
		{ Icon }  
		<p className = {`${active && 'font-bold'} ml-2 pl-2 hidden xl:inline text-gray-700`}>{title}</p>
	</div>
  )
}
