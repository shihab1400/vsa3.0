var btnBubbleSort = document.querySelector(".bubble-sort");
var btnSelectionSort = document.querySelector(".selection-sort");
var btnInsertionSort = document.querySelector(".insertion-sort");
var btnUnsort = document.querySelector(".btn-unsort");
var myInterval;
var heightArray = [];
var c = 0;
var rnHeight;
var unsortColor = "#AF1740";
var sortColor = "#608BC1";
var intervalTime;
var barCount = 50;
var speedSlider = document.getElementById("speed-controller");
var barContainer = document.querySelector(".bar-container");
var barSlider = document.getElementById("bar-controller");
var bars;
var btnNo;
var i, j, min, temp;

intervalTime = 100 - speedSlider.value;

speedSlider.oninput = function () {
   intervalTime = 100 - this.value;
};

barCount = barSlider.value;

barSlider.oninput = function () {
   barCount = this.value;
   barContainer.innerHTML = "";
   heightArray = [];
   c = 0;
   controlBar();
};

controlBar();

btnUnsort.addEventListener("click", () => {
   c = 0;
   unsort();
   btnEnable();
});

btnBubbleSort.addEventListener("click", () => {
   btnDisable();
   btnNo = 1;
   setVar();
   myInterval = setInterval(bubbleSort, intervalTime);
});

btnSelectionSort.addEventListener("click", () => {
   btnDisable();
   btnNo = 2;
   setVar();
   myInterval = setInterval(selectionSort, intervalTime);
});

btnInsertionSort.addEventListener("click", () => {
   btnDisable();
   btnNo = 3;
   setVar();
   myInterval = setInterval(insertionSort, intervalTime);
});

function controlBar() {
   for (var i = 0; i < barCount; i++) {
      barContainer.innerHTML += `<div class="bars"></div>`;
   }
   bars = document.querySelectorAll(".bars");
   unsort();
}

function unsort() {
   bars.forEach((bar) => {
      rnHeight = Math.floor(Math.random() * 35) + 5;
      heightArray[c++] = rnHeight;
      bar.style.height = `${rnHeight}rem`;
      bar.style.background = unsortColor;
   });
}

function setVar() {
   if (btnNo == 1) {
      i = 0;
      j = 0;
   } else if (btnNo == 2) {
      i = 0;
      j = i + 1;
      min = i;
   } else {
      i = 1;
      j = i;
   }
}

function bubbleSort() {
   if (heightArray[j] > heightArray[j + 1]) {
      temp = heightArray[j];
      heightArray[j] = heightArray[j + 1];
      heightArray[j + 1] = temp;
      bars[j].style.height = `${heightArray[j]}rem`;
      bars[j + 1].style.height = `${heightArray[j + 1]}rem`;
   }
   j++;
   if (j == heightArray.length - i - 1) {
      bars[j].style.background = sortColor;
      i++;
      j = 0;
   }
   if (i == heightArray.length - 1) {
      bars[0].style.background = sortColor;
      clearInterval(myInterval);
      btnUnsort.disabled = false;
   }
}

function selectionSort() {
   if (heightArray[min] > heightArray[j]) {
      min = j;
   }
   j++;
   if (j === heightArray.length) {
      temp = heightArray[i];
      heightArray[i] = heightArray[min];
      heightArray[min] = temp;
      bars[i].style.height = `${heightArray[i]}rem`;
      bars[min].style.height = `${heightArray[min]}rem`;
      bars[i].style.background = sortColor;
      i++;
      min = i;
      j = i + 1;
   }
   if (i === heightArray.length - 1) {
      bars[i].style.background = sortColor;
      clearInterval(myInterval);
      btnUnsort.disabled = false;
   }
}

function insertionSort() {
   if (heightArray[j - 1] > heightArray[j]) {
      temp = heightArray[j - 1];
      heightArray[j - 1] = heightArray[j];
      heightArray[j] = temp;
      bars[j].style.height = `${heightArray[j]}rem`;
      bars[j - 1].style.height = `${heightArray[j - 1]}rem`;
      j--;
   } else {
      i++;
      j = i;
   }
   bars[j - 1].style.background = sortColor;
   if (i == heightArray.length) {
      bars[i - 1].style.background = sortColor;
      clearInterval(myInterval);
      i = 1;
      j = i;
      btnUnsort.disabled = false;
   }
}

function btnDisable() {
   btnBubbleSort.disabled = true;
   btnSelectionSort.disabled = true;
   btnInsertionSort.disabled = true;
   btnUnsort.disabled = true;
   speedSlider.disabled = true;
   barSlider.disabled = true;
}

function btnEnable() {
   btnBubbleSort.disabled = false;
   btnSelectionSort.disabled = false;
   btnInsertionSort.disabled = false;
   speedSlider.disabled = false;
   barSlider.disabled = false;
}
