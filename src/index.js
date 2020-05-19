document.addEventListener("DOMContentLoaded", () => {
  // your code here

         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);