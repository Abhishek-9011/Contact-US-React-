function Hero() {
  return (
    <div className="hero">
      <div className="titleDiv">
        <h1 className="title">CONTACT US</h1>
      </div>
      <div className="descDiv">
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className="mainDiv">
        <div>
          <div className="buttonDiv">
            <button className="button1">VIA SUPPORT CHAT</button>
            <button className="button2">VIA CALL</button>
          </div>
          <div className="emailFormDiv">
            <button className="button3">VIA EMAIL FORM</button>
          </div>
          <div>
            <form action="#" method="POST">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="text">TEXT</label>
                <textarea id="text" name="text" rows="4" required></textarea>
              </div>
              <button type="submit" class="submit-btn">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className="character">
          <img src="/character.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
