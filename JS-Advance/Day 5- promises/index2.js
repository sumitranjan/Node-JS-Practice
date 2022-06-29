function Order() {
  let status = "open";

  let order = document.getElementById("food").value;

  let time = Math.round(Math.random() * 5);
  let food_promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status === "open") {
        resolve(`${order} le bhai le`);
      } else {
        reject("Told you, it was closed");
      }
    }, time * 1000);
  });

  food_promise.then(function (res) {
    console.log("res:", res);
  });

  food_promise.catch(function (err) {
    console.log("err:", err);
  });
}
