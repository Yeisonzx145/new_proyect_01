import { Link } from 'react-router-dom';
import Detail from '../views/Detail';
import style from './Card.module.css';

export default function Card({id,name,species,image,gender,onClose}) {
   return (
      <div className={style.myDiv}>
         <button className={style.cierre} onClick={() => onClose(id)}>X</button>
         
         <img className={style.imagenes} src={image} alt="" />
         
         <div className={style.divNombre}><h2 className={style.title}>{ name}</h2></div>
        
         <div className={style.divDescripcion}>
         <h2 className={style.letras}>{species}</h2>
         <h2 className={style.letras}>{gender}</h2>
         <Link to={`/detail/${id}`}><h3>Info</h3></Link>
         </div>
      </div>
   );
}
