import { useNavigate } from "react-router-dom";

export const usePageTransition = () => {
    const navigate = useNavigate();

    const move = (path: string) => {
      navigate(path);
    };

    return {move};
}