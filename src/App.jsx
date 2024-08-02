const App = () => {
  return (
    <div className="container">
      <nav>
        <div className="userinfo">
          <img src="./profile.jpeg" alt="" />
          <span>Gerald Jackson</span>
          <img className="icon" src="./light.png" alt="" />
        </div>
        <div className="socials">
          <img src="./github.png" alt="" />
          <img src="linkedin.png" alt="" />
          <img src="twitter.png" alt="" />
        </div>
      </nav>
    </div>
  );
};

export default App;
