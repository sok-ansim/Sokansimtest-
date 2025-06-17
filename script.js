function runTest(questions, resultImages) {
  const testScreen = document.getElementById("test-screen");
  let current = 0;
  let score = 0;

  function showQuestion(index) {
    const q = questions[index];
    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${q.image}" alt="질문 이미지" style="max-width: 700px; border-radius: 8px; margin-bottom: 20px;"><br>
        <p style="font-size: 35px; font-weight: bold;">${q.text}</p>
        <button onclick="next(true)" style="margin: 10px; padding: 16px 32px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 28px; cursor: pointer;">예</button>
        <button onclick="next(false)" style="margin: 10px; padding: 16px 32px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 28px; cursor: pointer;">아니오</button>
      </div>
    `;
  }

  window.next = function(answer) {
    if (answer) score++;
    current++;
    if (current < questions.length) {
      showQuestion(current);
    } else {
      showResult();
    }
  }

  function showResult() {
    let resultIndex = 0;
    if (score >= 2) resultIndex = 2;
    else if (score >= 1) resultIndex = 1;

    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${resultImages[resultIndex]}" alt="결과 이미지" style="max-width: 700px; border-radius: 8px; margin-bottom: 20px;"><br>
        <a href="https://m.booking.naver.com/booking/13/bizes/400700?theme=place&lang=ko" target="_blank">
          <button style="margin: 10px; padding: 14px 30px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 22px; cursor: pointer;">속안심내과 예약하기</button>
        </a>
        
        <div style="margin-top: 40px;">
          <p style="font-size: 20px; font-weight: bold;">다른 건강 자가진단도 해보세요</p>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 10px;">
            <a href="brain.html"><button style="padding: 12px 24px; font-size: 18px; background-color: #eeeeee; border: none; border-radius: 6px; cursor: pointer;">뇌 MRI</button></a>
            <a href="heart.html"><button style="padding: 12px 24px; font-size: 18px; background-color: #eeeeee; border: none; border-radius: 6px; cursor: pointer;">심장</button></a>
            <a href="vessel.html"><button style="padding: 12px 24px; font-size: 18px; background-color: #eeeeee; border: none; border-radius: 6px; cursor: pointer;">혈관</button></a>
            <a href="colon.html"><button style="padding: 12px 24px; font-size: 18px; background-color: #eeeeee; border: none; border-radius: 6px; cursor: pointer;">대장암</button></a>
            <a href="digest.html"><button style="padding: 12px 24px; font-size: 18px; background-color: #eeeeee; border: none; border-radius: 6px; cursor: pointer;">소화기</button></a>
          </div>
        </div>
      </div>
    `;
  }

  showQuestion(current);
}
