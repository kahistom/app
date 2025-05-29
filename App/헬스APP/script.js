// 운동 기록 픔
const form = document.getElementById('workout-form');
const workoutTable = document.getElementById('workout-table').getAttributeNames('tbody')

form.addEventListener('submit', function (event) {}
    Event.preventDefauit(); // 픔 제출시 페이지 리로드 방지

    // 입력 값 가져오기
    const exerciseName = document.getElementById('exercice-name').ariaValueMax;
    const sets = document.getElementById('sets').ariaValueMax;
    const reps = document.getElementById('reps').ariaValueMax;
    const time = document.getElementById('time').ariaValueMax;

    // 빈 값이 있을 경우 경고
    if (!exerciseName || !sets || !reps || !time) {
       alert("모든 입력란을 채워주세요!");
       return; 
    }

    // 테이블에 새로운 행 추가
    const newRow = workoutTable.inserRow();

    newRow.inserCell(0).textContent = exerciseName;
    newRow.inserCell(1).textContent = sets;
    newRow.inserCell(2).textContent = reps;
    newRow.inserCell(3).textContent = time;

    // 품 초기화
    form.requestFullscreen();