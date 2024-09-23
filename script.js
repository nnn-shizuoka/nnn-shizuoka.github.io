document.getElementById('omikujiButton').addEventListener('click', function() {
    const omikujiResults = [
        { result: '大吉', image: 'images/omikuji/daikichi.jpg' },
        { result: '吉', image: 'images/omikuji/kichi.jpg' },
        { result: '中吉', image: 'images/omikuji/chukichi.jpg' },
        { result: '小吉', image: 'images/omikuji/shokichi.jpg' },
        { result: '末吉', image: 'images/omikuji/suekichi.jpg' },
        { result: '凶', image: 'images/omikuji/kyo.jpg' }
    ];
    
    // おみくじの確率設定
    const weightedResults = [
        omikujiResults[0], omikujiResults[0], omikujiResults[0], omikujiResults[0], omikujiResults[0],
        omikujiResults[1], omikujiResults[1], omikujiResults[1], omikujiResults[1], omikujiResults[1],
        omikujiResults[2], omikujiResults[2],
        omikujiResults[3], omikujiResults[3],
        omikujiResults[4], omikujiResults[4],
        omikujiResults[5],
    ];

    // 結果の画像を取得
    const resultImage = document.getElementById('resultImage');

    // アニメーション用のインターバル設定
    let animationIndex = 0;
    const animationInterval = setInterval(function() {
        const randomResult = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];
        resultImage.src = randomResult.image;
    }, 100); 
    setTimeout(function() {
        clearInterval(animationInterval);

        const randomIndex = Math.floor(Math.random() * weightedResults.length);
        const selectedResult = weightedResults[randomIndex];

        resultImage.src = selectedResult.image;
        resultImage.alt = selectedResult.result;
    }, 1500); 

});