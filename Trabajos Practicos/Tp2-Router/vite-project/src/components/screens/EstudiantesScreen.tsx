import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { EstudianteCard } from "../ui/EstudianteCard";
import { IEstudiante } from "../../types/IEstudiante";
import { getAllEstudiantesByCursoId } from "../../http/api";
import styles from "./EstudiantesScreen.module.css";

interface EstudiantesScreenProps {
  cursoId: string;
}

export const EstudiantesScreen: React.FC<EstudiantesScreenProps> = ({ cursoId }) => {
  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);
  const navigate = useNavigate();

  const getEstudiantes = async () => {
    try {
      const data = await getAllEstudiantesByCursoId(cursoId);
      if (data) setEstudiantes(data);
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
    }
  };

  useEffect(() => {
    getEstudiantes();
  }, [cursoId]);

  const handleVolverACursos = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Estudiantes del Curso {cursoId}</h1>
        <button 
          className={styles.button} 
          onClick={handleVolverACursos}
        >
          Volver a Cursos
        </button>
      </div>
      
      {estudiantes.length > 0 ? (
        <div className={styles.estudiantesGrid}>
          {estudiantes.map((estudiante) => (
            <EstudianteCard key={estudiante.id} estudiante={estudiante} />
          ))}
        </div>
      ) : (
        <p className={styles.emptyMessage}>No hay estudiantes disponibles para este curso.</p>
      )}
    </div>
  );
};