import "./Giflist.css";

const GifList = (props) => {
  const Giflist = props.giflist.map((gif) => {
    return (
      <li className="gif-list">
        <img
          id={gif.id}
          src={gif.images.downsized.url}
          alt="gif"
          key={gif.id}
          // onClick={
          //   (() => props.GifPost(true, gif.id, gif.images.downsized.url),
          //   console.log(gif.id))
          // }
        />
      </li>
    );
  });

  return <div className="gif-div"> {Giflist}</div>;
};

export default GifList;
