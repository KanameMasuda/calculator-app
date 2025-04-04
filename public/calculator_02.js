// clickSound の初期化を確認
if (!window.clickSound1) {
  window.clickSound1 = new Audio('/audio/click-sound1.mp3'); // 音声ファイルのパス
  console.log("clickSound1 が初期化されました");
} else {
  console.log("clickSound1 はすでに存在します");
}

if (!window.clickSound2) {
  window.clickSound2 = new Audio('/audio/click-sound2.mp3'); // 音声ファイルのパス
  console.log("clickSound2 が初期化されました");
} else {
  console.log("clickSound2 はすでに存在します");
}

function press(val) {
  document.getElementById("display").value += val;
  console.log(`ボタンが押されました: ${val}`); // ボタンが押されたときにログを出力
  // ボタンを押したときには音を鳴らさない
}

function clearDisplay() {
  document.getElementById("display").value = "";
  console.log("クリアボタンが押されました");
  window.clickSound1.play(); // クリアボタンを押したときはclickSound1を鳴らす
}

function calculate() {
  let expression = document.getElementById("display").value;

  try {
    console.log(`計算式: ${expression}`); // 計算する式を表示
    // ＝ボタンを押した瞬間にclickSound1を鳴らす
    window.clickSound2.play();

    // 計算式をリセット（表示をクリア）
    document.getElementById("display").value = ""; // 計算式をクリア

    // 3秒後に計算結果を表示
    setTimeout(() => {
      let result = math.evaluate(expression);
      console.log(`計算結果: ${result}`); // 計算結果を表示
      document.getElementById("display").value = result; // 3秒後に結果を表示
    }, 3000);
    
  } catch (e) {
    console.error("計算エラー:", e);
    alert("計算エラー");
    clearDisplay();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display"); // 表示部分
  const buttons = document.querySelectorAll(".btn"); // ボタン

  // ボタンがクリックされたときに表示部分に値を追加
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.dataset.value; // data-value から値を取得
      console.log(`ボタンがクリックされました: ${value}`); // クリックされた値を表示
      display.value += value; // display.value に追加
    });
  });
});