import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    // проверяем токен
    if (!token) {
      // не авторизован-на страницу логиниться
      return <Navigate to="/login" />;
    }
  
    // аутлет заполнитель. если авторизован-вот дочерние маршруты
    return <Outlet />;
  };
  