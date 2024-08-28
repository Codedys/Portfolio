import "./popup.css"

const Popup = () => {
  return (
    <div className="popup-main">
      <div>
        <img src="/cv.png" alt="" />
        <span>My CV</span>
      </div>
      <div>
        <img src="/bucket.png" alt="" />
        <span>Bucket List</span>
      </div>
      <div>
        <img src="/bookmark.png" alt="" />
        <span>Bookmarks</span>
      </div>
    </div>
  );
};

export default Popup;
