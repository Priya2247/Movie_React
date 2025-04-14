import MovieCard from "../components/MovieCard"
function Home(){
    const Movies=[{id:"1",title:"Pushpa",release_date:"2024"},
        {id:"2",title:"SitaRaman",release_date:"2022"},
        {id:"3",title:"LuckyBaskar",release_date:"2024"},
        {id:"4",title:"pushpa_2",release_date:"2025"}]
        function search(){
            alert("searched");
        }
    return (
       
        <div className="home">
            <form onSubmit={search} className="search-form">
         <input type="text" placeholder="Search for movies .."   className="search-input"/>
         <button type="submit"><img src="../assests/search-icon.png" alt="search icon" className="search-btn" /></button>
        </form>
          <div className="movie-grid">
            {Movies.map((i)=>(<MovieCard movie={i} key={i.id}/>))}
          </div>
    </div>
    );
}

export default Home