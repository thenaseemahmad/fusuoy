
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";


import Studio from "./components/Studio";
import "./styles.css";

// const router = createBrowserRouter([
//   {path:'/', element:<Home/>},
//   {path:'/studio', element:<Studio/>}
// ])

// export default function App() {
//   const [userRecognized, setUserRecognized] = useState(false);
//   const navigate = useNavigate();
//   //check if a valid user
//   if(userRecognized){
//     navigate('/studio');
//   }

//   return (
//     <div className="App">
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studio" element={<Studio/>}/>
      </Routes>
    </BrowserRouter>
  );
}
