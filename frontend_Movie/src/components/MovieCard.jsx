function MovieCard({movie}){
    function favorite(){
      alert("clicked");
    }
return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="over-lay">
                <button  className="favorite-btn"onClick={favorite}><img src="../assests/heart.png" alt="Heart" /></button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>

}

export default MovieCard