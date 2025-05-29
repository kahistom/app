document.addEventListener("DOMContentLoaded", () => {
    showPage("home");
    loadData();
});

let totalCalories = 0;
let caloriesBurned = 0;
let dietData = [];
let goal = "";

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

function addFood() {
    let foodInput = document.getElementById("foodInput").value;
    if (foodInput.trim() !== "") {
        let foodItem = { name: foodInput, calories: getCalories(foodInput) };
        dietData.push(foodItem);
        totalCalories += foodItem.calories;
        updateDietList();
        saveData();
    }
}

function getCalories(foodName) {
    const foodCalories = {
        "밥": 200,
        "닭가슴살": 150,
        "사과": 95,
        "계란": 70,
        "브로콜리": 50
    };
    return foodCalories[foodName] || 100; // 기본값
}

function updateDietList() {
    let foodList = document.getElementById("foodList");
    foodList.innerHTML = "";
    dietData.forEach(food => {
        let listItem = document.createElement("li");
        listItem.textContent = `${food.name} - ${food.calories} kcal`;
        foodList.appendChild(listItem);
    });
    document.getElementById("totalCalories").textContent = totalCalories;
}

function trackWorkout() {
    let workoutMinutes = document.getElementById("workoutMinutes").value;
    if (workoutMinutes > 0) {
        caloriesBurned = workoutMinutes * 5;
        document.getElementById("caloriesBurned").textContent = caloriesBurned;
        totalCalories -= caloriesBurned;
        document.getElementById("totalCalories").textContent = totalCalories;
        saveData();
    }
}

function getRecommendedDiet() {
    const sampleDiets = [
        "고단백 식단: 닭가슴살, 브로콜리, 고구마",
        "저탄수화물 식단: 샐러드, 연어, 아보카도",
        "균형 잡힌 식단: 밥, 계란, 사과"
    ];
    let recommendedDietList = document.getElementById("recommendedDietList");
    recommendedDietList.innerHTML = "";
    sampleDiets.forEach(diet => {
        let listItem = document.createElement("li");
        listItem.textContent = diet;
        recommendedDietList.appendChild(listItem);
    });
}

function setGoal() {
    goal = document.getElementById("goalInput").value;
    document.getElementById("currentGoal").textContent = goal || "없음";
    saveData();
}

function saveData() {
    localStorage.setItem("dietData", JSON.stringify(dietData));
    localStorage.setItem("totalCalories", totalCalories);
    localStorage.setItem("goal", goal);
}

function loadData() {
    let savedDietData = JSON.parse(localStorage.getItem("dietData")) || [];
    dietData = savedDietData;
    totalCalories = parseInt(localStorage.getItem("totalCalories")) || 0;
    goal = localStorage.getItem("goal") || "";
    document.getElementById("currentGoal").textContent = goal;
    updateDietList();
}

function resetData() {
    localStorage.clear();
    location.reload();
}