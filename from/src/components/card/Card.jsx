import { Link } from 'react-router-dom';
import Detail from '../views/Detail';
import style from './Card.module.css';

export default function Card({id,name,species,image,gender,onClose}) {
   return (
      <div className={style.Contenedor}>
         <div className={style.div1} >
            <Link to={`/detail/${id}`}><h3 className={style.info}>Info</h3></Link>
            <button className={style.cierre} onClick={() => onClose(id)}>X</button>
         </div>
         <div className={style.div2} >
            <img className={style.imagenes} src={image} alt="" />
         </div>
         <div className={style.divTex}>
            <h2 className={style.title}>{ name}</h2>
            <h2 className={style.letras}>{species}</h2>
            <h2 className={style.letras}>{gender}</h2>
         </div>
      </div>
   );
}
