import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CursoCard } from "../ui/CursoCard";
import { ICurso } from "../../types/ICurso";
import { getAllCursos } from "../../http/api";
import styles from "./CursosScreen.module.css";

export const CursosScreen = () => {
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const navigate = useNavigate();

  const getCursos = async () => {
    const data = await getAllCursos();
    if (data) setCursos(data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  const handleCursoClick = (cursoId: number) => {
    navigate(`/curso/${cursoId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cursos:</h1>
      <div className={styles.cursosGrid}>
        {cursos.map((curso) => (
          <div 
            key={curso.id} 
            onClick={() => handleCursoClick(curso.id)} 
            className={styles.cursoItem}
          >
            <CursoCard curso={curso} />
          </div>
        ))}
      </div>
    </div>
  );
};