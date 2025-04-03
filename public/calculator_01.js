// 音声ファイルをロード
if (!window.clickSound) {
  window.clickSound = new Audio('/audio/click-sound1.mp3');
  console.log("clickSound が初期化されました");
} else {
  console.log("clickSound はすでに存在します");
}

function press(val) {
  document.getElementById("display").value += val;
  clickSound.play(); // ボタンが押されたときに音を鳴らす
}

function clearDisplay() {
  document.getElementById("display").value = "";
  clickSound.play(); // クリアボタンを押したときも音を鳴らす
}

function calculate() {
  let expression = document.getElementById("display").value;
  try {
    let result = math.evaluate(expression);
    document.getElementById("display").value = result;
    clickSound.play(); // 計算結果が表示されたときも音を鳴らす
  } catch (e) {
    alert("計算エラー");
    clearDisplay();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display"); // 表示部分
  const buttons = document.querySelectorAll(".btn"); // ボタン

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.dataset.value; // data-value から値を取得
      display.textContent += value; // 表示部分に追加
      clickSound.play(); // ボタンをクリックしたときに音を鳴らす
    });
  });
});