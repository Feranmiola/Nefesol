
import useScrollToTop from '@/hooks/ScrollToTop'
import { Outlet } from 'react-router-dom'

const BlogLayout = () => {
  useScrollToTop()
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default BlogLayout