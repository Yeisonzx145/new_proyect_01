import Card from '../card/Card';

export default function Cards({characters,onClose}) {
   return (
   <div>
      {
         characters.map(({id,name,species,gender,image}) =>{
            return(
               <div>
                  <Card
                  id={id}
                  name={name} 
                  species={species} 
                  gender={gender} 
                  image={image}
                  onClose={onClose}
                  />
               </div>
            );
         })
      }
   </div>
   );
}
