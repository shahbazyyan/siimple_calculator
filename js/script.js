document.addEventListener("DOMContentLoaded", function () {
    let allInputs = document.querySelectorAll(".inp");
    let display = document.querySelector("#display");


    allInputs.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            switch (item.value) {
               case "=" : display.value = eval(display.value); break;
               case "AC" : display.value = ""; break;
               case "DE" : display.value = display.value.slice(0, -1); break;
               default: display.value += item.value;
            }
        });
    });

    // allInputs.forEach(item => {
    //     item.addEventListener("click", (e) => {
    //         e.preventDefault();

    //         if (item.value === "=") {
    //             display.value = eval(display.value);
    //         } else if (item.value === "AC") {
    //             display.value = "";
    //         } else if (item.value === "DE") {
    //             display.value = display.value.slice(0, -1);
    //         } else {
    //             display.value += item.value;
    //         }
    //     });
    // });
});
