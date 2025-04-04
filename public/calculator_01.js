// 音声ファイルをロード（1種類だけ）
if (!window.clickSound1) {
  window.clickSound1 = new Audio('/audio/click-sound1.mp3');
  window.clickSound1.load();
  console.log("clickSound1 が初期化されました");
} else {
  console.log("clickSound1 はすでに存在します");
}

function press(val) {
  document.getElementById("display").value += val;
  window.clickSound1.play();
  console.log(`ボタンが押されました: ${val}`);
}

function clearDisplay() {
  document.getElementById("display").value = "";
  window.clickSound1.play();
  console.log("クリアボタンが押されました");
}

function calculate() {
  let expression = document.getElementById("display").value;
  try {
    let result = math.evaluate(expression);
    document.getElementById("display").value = result;
    window.clickSound1.play(); // ← sound2 ではなく sound1 に統一
    console.log(`計算結果: ${result}`);
  } catch (e) {
    console.error("計算エラー:", e);
    alert("計算エラー");
    clearDisplay();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.dataset.value;
      display.textContent += value;
      window.clickSound1.play();
      console.log(`ボタンがクリックされました: ${value}`);
    });
  });
});