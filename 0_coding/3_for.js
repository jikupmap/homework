// for문 예제
for(let i=0; i < 5; i++) {
    for(let j=0; j < 5; j++) {
      process.stdout.write("◼");
    }
    process.stdout.write("\n");
  };
  
  // map() 예제
  const locals = ["강남", "강동", "중구"];
  const localTags = locals.map((local, index) => {
    return `${index} 번째 지역구 ${local}`
  });
  
  // forEach() 예제
  localTags.forEach((local, _index) => {
    console.log(local);
  });
  