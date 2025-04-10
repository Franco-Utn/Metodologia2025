import React from "react";
import { ICurso } from "../../types/ICurso";
import styles from "./CursoCard.module.css";

interface CursoCardProps {
  curso: ICurso;
}

export const CursoCard: React.FC<CursoCardProps> = ({ curso }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{curso.nombre}</h2>
    </div>
  );
};