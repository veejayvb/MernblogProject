import SideBar from '../../Component/Sidebar/SideBar'
import SinglePost from '../../Component/SinglePost/SinglePost'
import './Single.css'

const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <SideBar/>
    </div>
  )
}

export default Single