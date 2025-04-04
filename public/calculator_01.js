// 音声ファイルをロード
if (!window.clickSound1) {
  window.clickSound1 = new Audio('/audio/click-sound1.mp3');
  window.clickSound1.load(); // 音声ファイルをロード
  console.log("clickSound1 が初期化されました");
} else {
  console.log("clickSound1 はすでに存在します");
}

if (!window.clickSound2) {
  window.clickSound2 = new Audio('/audio/click-sound2.mp3');
  window.clickSound2.load(); // 音声ファイルをロード
  console.log("clickSound2 が初期化されました");
} else {
  console.log("clickSound2 はすでに存在します");
}

function press(val) {
  document.getElementById("display").value += val;
  window.clickSound1.play(); // ボタンが押されたときにclickSound1を鳴らす
  console.log(`ボタンが押されました: ${val}`);
}

function clearDisplay() {
  document.getElementById("display").value = "";
  window.clickSound1.play(); // クリアボタンを押したときもclickSound1を鳴らす
  console.log("クリアボタンが押されました");
}

function calculate() {
  let expression = document.getElementById("display").value;
  try {
    let result = math.evaluate(expression);
    document.getElementById("display").value = result;
    window.clickSound2.play(); // 計算結果が表示されたときにclickSound2を鳴らす
    console.log(`計算結果: ${result}`);
  } catch (e) {
    console.error("計算エラー:", e);
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
      window.clickSound1.play(); // ボタンをクリックしたときにclickSound1を鳴らす
      console.log(`ボタンがクリックされました: ${value}`);
    });
  });
});