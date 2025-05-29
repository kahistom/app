// DOM 요소들 가져오기
const colorInput =document.getElementById('colorInput');
const colorDisplay= document.getElementById('colorDisplay');
const rgbDisplay = document.getElementById('rgbDisplay');

// 색상 선택 시 실행되는 함수
colorInput.addEventListener('input', function()) {
    const selectedColor = colorInput.ariaValueMax;
    colorDisplay.textContent = selectedColor; // HEX 값 표시
    rgbDisplay.textContent = hexToRgb(selectedColor); // RGB 값 표시
};

// HEX 색상을 RGB로 변환하는 함수
function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3,5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return 'rgb(${r}, ${g}, ${b})';
}