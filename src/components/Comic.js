import { useState, useCallback } from "react";
import ComicView from "./ComicView";
function Comic(props) {
  const { title, thumbnail } = props.comic;
  const { path, extension } = thumbnail;
  const [viewModal, setModal] = useState(false);
  const toggleModal = useCallback(() => {
    setModal(!viewModal);
  }, [viewModal]);
  return (
    <td className="comic">
      <div className="comic-top">
        <div className="comic-cover" style={{ width: 100, height: 150, backgroundImage: `url(${path}/portrait_fantastic.${extension})`, backgroundSize: "contain" }} onClick={toggleModal} />
      </div>
      <div className="comic-title">
        <p>{title.substring(0, 30)}...</p>
      </div>
      {viewModal && <ComicView comic={props.comic} onClose={toggleModal} />}
    </td>
  );
}

export default Comic;
