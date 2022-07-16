const toeicScore = 800;

// if문 예제
if (toeicScore >= 900) {
  console.log("서류 통과");
} else if (toeicScore < 900 && toeicScore >= 800) {
  console.log("서류 대기");
} else if (toeicScore < 800 && toeicScore >= 700) {
  console.warn("서류 보류");
} else {
  console.error("서류 페기");
}

// switch case 예제
switch(toeicScore) {
  case 990:
    console.log("1차 가산점 200");
    break;
  case 980:
  case 970:
    console.log("1차 가산점 100");
    break
  default:
    console.log("파이팅")
}
