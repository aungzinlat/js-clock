const display = document.getElementById("display");

const startTime = () => {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ms = today.getMilliseconds()
  m = checkTime(m);
  s = checkTime(s);
//   ms = checkTime(ms)

  display.innerHTML = `<p class="bg-secondary d-inline p-1 rounded text-center">${h}</p> : <p class="bg-secondary d-inline p-1 rounded text-center">${m}</p> : <p class="bg-secondary d-inline p-1 rounded text-center"> ${s}</p>`;
  setTimeout(startTime, 1000);
};

const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//   }

// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById("display").innerHTML =  h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
//   }

//   const today = new Date();
// document.getElementById("display").innerHTML = today
//   console.log(today);
