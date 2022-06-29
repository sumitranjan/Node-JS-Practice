async function Order() {
  try {
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

    let res = await food_promise; // async-->promice
    console.log("res:", res);
  } catch (error) {
    console.log("error:", error);
  }
}
