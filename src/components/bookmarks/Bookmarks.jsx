import ".././bucketlist/bucketlist.css";
import { bookMarkData } from "../../binding/bookmarks_bind";

const Bookmarks = () => {
  return (
    <div className="bucketlist-main">
      <h1>📑 Bookmarks</h1>
      <p> Here are some of the content I consume</p>
      <div className="bucketlist-cards">
        {bookMarkData.map((data, index) => (
          <a key={index} href={data.link} className="b-card">
            <h5>{data.name}</h5>
            <span>{data.content}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
