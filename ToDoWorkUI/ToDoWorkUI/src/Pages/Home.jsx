import PostList from "../Components/PostList"
  import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>


      <h1>Welcome to ToDoWork</h1>
      <p>Manage your tasks efficiently and stay organized with ToDoWork.</p>
      <Link to="/create">+Create Post </Link>
      <PostList/>




    </div>
  )
}

export default Home