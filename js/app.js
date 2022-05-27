const popupScreen = document.querySelector(".popup-screen");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");
	const openBtn = document.querySelector(".windows");

    closeBtn.addEventListener("click", () => {
      popupScreen.classList.remove("active"); //Close the popup screen on click the close button.
      //Create a cookie for a day (to expire within a day) on click the close button.
      document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
    });
	
	openBtn.addEventListener("click", () => {
      popupScreen.classList.add("active"); //Close the popup screen on click the close button.
      //Create a cookie for a day (to expire within a day) on click the close button.
      document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
    });

    //Use the created cookie to hide or show the popup screen.
    const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

    if(WebsiteCookie != -1){
      popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
    }
    else{
      popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired.
    }