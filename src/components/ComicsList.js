import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getComics } from "../utils/api";
import { heroes } from "../utils/_DATA";
import Comic from "./Comic";

export default function ComicsList(props) {
  const { characterID } = useParams();
  const [comics, setComics] = useState();
  const [comicInfo, setInfo] = useState();
  const [currentIndex, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchMyComics() {
      try {
        setLoading(true);
        const receivedComics = await getComics(characterID, currentIndex);
        const { total, count, results } = receivedComics;
        setInfo({ total, count });
        setComics(results);
        setLoading(false);
      } catch (error) {
        alert("Error Occured, Please Try Again Later");
      }
    }
    fetchMyComics();
  }, [characterID, currentIndex]);
  const hero = heroes[characterID];
  if (hero === undefined) {
    return <Redirect to="/not-found" />;
  }
  return (
    <div>
      <p className="tip">
        <span role="img" aria-label="idea">
          💡
        </span>
        Did you know? You can click on a comic cover to get a detailed view!
      </p>
      <div className="comic-page-info">
        {hero.name} Comics ({comicInfo ? comicInfo.total : 0} found)
      </div>
      <div className="comic-page-nav">
        Page {currentIndex + 1}⠀
        <button disabled={loading || currentIndex === 0} onClick={() => currentIndex > 0 && setIndex(currentIndex - 1)}>
          ˂
        </button>
        <button disabled={loading || (currentIndex + 1) * 24 >= comicInfo.total} onClick={() => setIndex(currentIndex + 1)}>
          ˃
        </button>
      </div>
      {loading ? (
        <div id="loader">
          <img src="/images/loader.gif" alt="loading indicator" />
          <h3>Loading...</h3>
        </div>
      ) : (
        <table className="comics-list">
          <tbody>
            <tr>
              {comics.map((comic, index) => (
                <Comic key={index} comic={comic} />
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
