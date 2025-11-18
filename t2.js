function register() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById("color").value;


    document.cookie = `name=${name};path=/`;
    document.cookie = `gender=${gender};path=/`;
    document.cookie = `color=${color};path=/`;

  
    let visits = getCookie("visits");
    visits = visits ? parseInt(visits) + 1 : 1;
    document.cookie = `visits=${visits};path=/`;

    
    document.getElementById("registration-section").style.display = "none";
    document.getElementById("greeting-section").style.display = "block";

    
    const imgSrc = gender === "male" ? "1.jpg" : "2.jpg";
    document.getElementById("profile-pic").src = imgSrc;
    document.getElementById("profile-pic").style.display = "block";
    document.getElementById("welcome-message").innerHTML = `Welcome <span style="color:${color};">${name}</span>, you have visited this site <span style="color:${color};">${visits}</span> times :)`;
}

function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Initialize page with data from cookies and increase visit count
window.onload = function() {
    let visits = getCookie("visits");
    visits = visits ? parseInt(visits) : 0;
    visits += 1;  // Increase visit count
    document.cookie = `visits=${visits};path=/`; // Update cookie with new visit count

    const name = getCookie("name");
    const gender = getCookie("gender");
    const color = getCookie("color");

    console.log('Cookies read:', `name=${name}`, `gender=${gender}`, `color=${color}`, `visits=${visits}`);

    if (name && gender && color) {
        const imgSrc = gender === "male" ? "1.jpg" : "2.jpg";
        document.getElementById("profile-pic").src = imgSrc;
        document.getElementById("profile-pic").style.display = "block";
        document.getElementById("welcome-message").innerHTML = `Welcome <span style="color:${color};">${name}</span>, you have visited this site <span style="color:${color};">${visits}</span> times :)`;
        document.getElementById("registration-section").style.display = "none";
        document.getElementById("greeting-section").style.display = "block";
    } else {
        document.getElementById("registration-section").style.display = "block";
        document.getElementById("greeting-section").style.display = "none";
    }
}