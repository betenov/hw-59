import React, {useState} from 'react';
import './InputForm.css'




const InputForm = () => {
 const [movie , setMovie] = useState([
   {movie:'Avatar' , id:'1'}
 ])
  const [nameMovie, setNameMovie] =useState('')

  const  onSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    setMovie(prevState=> [
        ...prevState ,{movie:nameMovie,id:Math.random().toString()}
      ]
    )
    setNameMovie('')

  }
  const onDelete = (id:string) => {
   setMovie(prevState => prevState.filter(mov => mov.id !== id ))
  }


  return (
      <div>
         <form onSubmit={onSubmit}>
           <input className="input-add" type="text" value={nameMovie}  onChange={event => setNameMovie(event.target.value)}  />
           <button className="btn-add" type="submit">Add</button>
         </form>
        <div>
          {movie.map(mov => (
            <div className="input" key={mov.id} >
             <input className="movie-card" value={mov.movie} onChange={event => (event.target.value)} />
              <button onClick={() => onDelete(mov.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
}

export default InputForm;