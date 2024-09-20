document.getElementById('omikujiButton').addEventListener('click', function() {
    const omikujiResults = [
        { result: '大吉', image: 'images/daikichi.png' },
        { result: '中吉', image: 'images/chukichi.png' },
        { result: '小吉', image: 'images/shokichi.png' },
        { result: '吉', image: 'images/kichi.png' },
        { result: '凶', image: 'images/kyo.png' }
    ];

    const weightedResults = [
        omikujiResults[0], omikujiResults[1], omikujiResults[2], 
        omikujiResults[3], omikujiResults[4]
    ];
    

    const randomIndex = Math.floor(Math.random() * weightedResults.length);
    const selectedResult = weightedResults[randomIndex];

    const resultImage = document.getElementById('resultImage');
    resultImage.src = selectedResult.image;
    resultImage.alt = selectedResult.result;
    resultImage.style.display = 'block';
});