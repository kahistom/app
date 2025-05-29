function generateCard() {
    document.getElementById("cardName").innerText = document.getElementById("nameInput").value || "이름";
    document.getElementById("cardJob").innerText = document.getElementById("jobInput").value ||"직책";
    document.getElementById("cardPhone").innerText = document.getElementById("phoneInput").value || "연락처";
    document.getElementById("cardCompany").innerText = document.getElementById("companyInput").value || "회사명";
}

function changeStyle() {
    let card = document.getElementById("businessCard");
    let selectedStyle = document.getElementById("styleSelect").value;

    // 기존 스타일 제거
    card.classList.remove("style1", "style2", "style3");

    // 새로운 스타일 추가
    card.classList.add(selectedStyle);
}