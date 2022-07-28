

function MovieItem(props) {

   return (
            <div onClick={()=>props.handleClick(props.movieDetail)} className="item"  >
               <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt="" />
               <div className="temp-container">
                  <div className="details">
                     <h3>{props.title}</h3>
                     <p>{props.desc}</p>
                  </div>
               </div>
            </div>
   )
}
export default MovieItem