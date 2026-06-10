// Make random number Array :
  function RandomNumber() {
    const arr = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 6) + 1,
    );
    console.log("random!");
    // setNum(arr);
    return arr;
  }
