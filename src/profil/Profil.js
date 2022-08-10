import PropTypes from 'prop-types';
const Profil =({children,FulName,Profession,Bio,handleName})=>{
    return(
        <>
        
        <h1> Son Nom et Prenom  est <span>{FulName}</span> </h1>
        <h3> <span> Youssef </span> est un {Profession} </h3>
        <ul>
                {
                  Bio.map((el,i,t)=> <li>{el}</li>)
                }
            </ul>
            <div className='pic'>
        {
            children
        }     
        <button onClick={()=>handleName('Youssef')}>AlertName</button>
        </div>
        </>
    )
}
export default Profil