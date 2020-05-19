document.addEventListener("DOMContentLoaded", () => {
  // your code here

         document.getElementById("submit").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);