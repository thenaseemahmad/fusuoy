import { useNavigate } from "react-router-dom";

export default function Studio(){
    const navigate = useNavigate();
    return (
        <h1 onClick={()=>navigate('/')}>Studio</h1>
    );
}