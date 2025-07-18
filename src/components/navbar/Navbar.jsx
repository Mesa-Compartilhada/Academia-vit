import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    if(localStorage.getItem("nome")) {
        return (
            <div className="flex flex-row p-4 gap-4">
                <Link to="/" className="text-blue-700 hover:opacity-50">Home</Link>
                <Link to="/treino" className="text-blue-700 hover:opacity-50">Treinos</Link>
                <button className="text-blue-700 hover:opacity-50 hover:cursor-pointer" onClick={() => { [localStorage.removeItem("nome"), navigate("/login")] }}>Sair</button>
            </div>
        )
    }
    else {
        return (
            <div className="flex flex-row p-4 gap-4">
                <Link to="/" className="text-blue-700 hover:opacity-50">Home</Link>
                <Link to="/login" className="text-blue-700 hover:opacity-50">Login</Link>
                <Link to="/cadastro" className="text-blue-700 hover:opacity-50">Cadastro</Link>
            </div>
        )
    }
}