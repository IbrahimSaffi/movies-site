import MovieItem from "./MovieItem"




function Container(props) {
    

    return (
        <div className="container">
            {props.itemsList.map(ele =>
                <MovieItem handleClick={props.handleClick} movieDetail = {ele} className="item" key={ele["title"]} poster={ele["poster_path"]} title={ele["title"]} desc={ele["overview"]} />
            )}


        </div>
    )
}
export default Container