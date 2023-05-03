import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <div>
      <main
        className='flex'
      >
        <Sidebar />
        <Feed />
      </main>
    </div>

  )
}
