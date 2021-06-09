function ComicView(props) {
  const { comic } = props;
  const { dates, prices, thumbnail, characters, isbn, title, description, urls } = comic;
  const { path, extension } = thumbnail;
  console.log(props.comic);
  return (
    <div className="comic-view-modal">
      <div className="comic-view">
        <div className="header">
          <img id="close-button" src="\buttons\arrow-back-black.svg" alt="close" onClick={props.onClose} />
          <h3 className="comic-view-title">{title}</h3>
        </div>
        <div className="comic-view-details">
          <div className="comic-view-cover">
            <img src={`${path}/portrait_fantastic.${extension}`} width="168" height="252" alt="cover" />
          </div>
          <div className="comic-information">
            <span>
              <p>Price: </p> {prices[0].price > 0 ? "$" + prices[0].price : "N/A"}
              <br />
              <p>Characters: </p> {"characters" in comic ? characters.items.map((character) => character.name + ", ") : "N/A"}
              <br />
              <p>ISBN: </p> {isbn !== "" ? isbn : "N/A"}
              <br />
              <p>Publication Date: </p> {"dates" in comic ? new Date(dates[0].date).toDateString() : "N/A"}
              <br />
              <p>Description: </p> {description !== null ? description : "N/A"}
              <br />
              <p>More Details: </p> {urls.length > 0 ? <a href={urls[0].url}>Click Here</a> : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicView;
