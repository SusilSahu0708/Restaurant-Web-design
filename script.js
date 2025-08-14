  const container = document.querySelector(".container");

  let isClickable = true;

let input = document.querySelector("input");


// console.log(input);
input.addEventListener("keyup", (evt) => {
  if (evt.key === "Enter") {
    let base_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let real_url = `${base_url}${input.value}`;
    input.value = "";

    fetch(real_url).then((res) => {
      res.json().then((data) => {
        let length = data.meals.length;

        let container = document.querySelector(".container");
        container.innerHTML = "";

        for (let i = 0; i < length; i++) {
          let mealId = data.meals[i].idMeal;
          let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
          let realIdUrl = `${idUrl}${mealId}`;

          fetch(realIdUrl).then((res) => {
            res.json().then((info) => {
              ingredient1 = info.meals[0].strIngredient1;
              ingredient2 = info.meals[0].strIngredient2;
              ingredient3 = info.meals[0].strIngredient3;
              ingredient4 = info.meals[0].strIngredient4;

              let card = document.createElement("div");
              card.classList.add("card");

              card.innerHTML = `
                      <div class="imgBox">
                      <img src=${data.meals[i].strMealThumb} alt="img">
                  </div>
                  <h4>${data.meals[i].strMeal}</h4>
                  <ul>
                    <button>${ingredient1}</button>
                    <button>${ingredient2}</button>
                    <button>${ingredient3}</button>
                    <button>${ingredient4}</button>
                  </ul>
                  `;

              container.appendChild(card);

            card.addEventListener("click", () => {

              if(isClickable) {
                isClickable = false;

                // alert(url);
                fetch(real_url).then((res) => {
                    res.json().then((about) => {
                        // console.log(about.meals[i].idMeal);
                        let id = about.meals[i].idMeal;
                        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
                        let orgId = `${idUrl}${id}`;
                        // console.log(orgId);

                        fetch(orgId).then((res) => {
                            res.json().then((data) => {
                    
                                let instr = data.meals[0].strInstructions;
                                console.log(data.meals[0].strInstructions);
                                // alert(`Instructions : ${instr}`);;

                                 let popUp = document.createElement("div");
                                popUp.classList.add("popUp");

                                popUp.innerHTML = `
                                   <button class="closeBtn">❌</button>
                                   <p>${instr}</p>
                                `;
                                
                                container.appendChild(popUp);
                                let close =  document.querySelector(".closeBtn");
                                console.log(close);
                                close.addEventListener("click", () => {
                                  isClickable = true;
                                    console.log("close");
                                    container.removeChild(popUp);
                                  });

                            })
                        })
                        
                    })
                })

              }
            });
            });
          });
        }
      });
    });
  }
});

// !---------------------------------
let searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
  let base_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  let real_url = `${base_url}${input.value}`;
  input.value = "";
  // alert(real_url);
  fetch(real_url).then((res) => {
    res.json().then((data) => {
      let length = data.meals.length;

      let container = document.querySelector(".container");
      container.innerHTML = "";

      for (let i = 0; i < length; i++) {
        let mealId = data.meals[i].idMeal;

        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
        let realIdUrl = `${idUrl}${mealId}`;

        fetch(realIdUrl).then((res) => {
          res.json().then((info) => {
            ingredient1 = info.meals[0].strIngredient1;
            ingredient2 = info.meals[0].strIngredient2;
            ingredient3 = info.meals[0].strIngredient3;
            ingredient4 = info.meals[0].strIngredient4;

            let card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                        <div class="imgBox">
                        <img src=${data.meals[i].strMealThumb} alt="img">
                    </div>
                    <h4>${data.meals[i].strMeal}</h4>
                    <ul>
                    <button>${ingredient1}</button>
                    <button>${ingredient2}</button>
                    <button>${ingredient3}</button>
                    <button>${ingredient4}</button>
                    </ul>
                    `;

            container.appendChild(card);

          card.addEventListener("click", () => {

            if(isClickable) {
              isClickable = false;

              // alert(url);
              fetch(real_url).then((res) => {
                  res.json().then((about) => {
                      // console.log(about.meals[i].idMeal);
                      let id = about.meals[i].idMeal;
                      let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
                      let orgId = `${idUrl}${id}`;
                      // console.log(orgId);
  
                      fetch(orgId).then((res) => {
                          res.json().then((data) => {
                  
                              let instr = data.meals[0].strInstructions;
                              console.log(data.meals[0].strInstructions);
                              // alert(`Instructions : ${instr}`);;
  
                               let popUp = document.createElement("div");
                              popUp.classList.add("popUp");
  
                              popUp.innerHTML = `
                                 <button class="closeBtn">❌</button>
                                 <p>${instr}</p>
                              `;
                              
                              container.appendChild(popUp);
                              let close =  document.querySelector(".closeBtn");
                              console.log(close);
                              close.addEventListener("click", () => {
                                isClickable = true;
                                  console.log("close");
                                  container.removeChild(popUp);
                                });
  
                          })
                      })
                      
                  })
              })

            }
            
            });
          });
        });
      }
    });
  });
});

// !---------------------

// !-------------
let btn1 = document.querySelector(".btn1");

let ingredient1, ingredient2, ingredient3, ingredient4;

btn1.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian";

  fetch(url).then((res) => {
    res.json().then((data) => {
    //   console.log(data);
      let length = data.meals.length;

      for (let i = 0; i < length; i++) {
        // console.log(data.meals[i].idMeal);
        let mealId = data.meals[i].idMeal;

        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
        let realIdUrl = `${idUrl}${mealId}`;
        // console.log(realIdUrl);

        fetch(realIdUrl).then((res) => {
          res.json().then((info) => {
            // console.log(info.meals[0]);

            ingredient1 = info.meals[0].strIngredient1;
            ingredient2 = info.meals[0].strIngredient2;
            ingredient3 = info.meals[0].strIngredient3;
            ingredient4 = info.meals[0].strIngredient4;

            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                    <div class="imgBox">
                    
                    <img src=${data.meals[i].strMealThumb} alt="img">
                </div>
                <h4>${data.meals[i].strMeal}</h4>
                <ul>
                    <button>${ingredient1}</button>
                    <button>${ingredient2}</button>
                    <button>${ingredient3}</button>
                    <button>${ingredient4}</button>
                </ul>
                `;

            container.appendChild(card);

            card.addEventListener("click", () => {
              if(isClickable) {

                isClickable = false;
                // alert(url);
                fetch(url).then((res) => {
                    res.json().then((about) => {
                        // console.log(about.meals[i].idMeal);
                        let id = about.meals[i].idMeal;
                        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
                        let orgId = `${idUrl}${id}`;
                        // console.log(orgId);

                        fetch(orgId).then((res) => {
                            res.json().then((data) => {
                    
                                let instr = data.meals[0].strInstructions;
                                console.log(data.meals[0].strInstructions);
                                // alert(`Instructions : ${instr}`);

                                let popUp = document.createElement("div");
                                popUp.classList.add("popUp");

                                popUp.innerHTML = `
                                   <button class="closeBtn">❌</button>
                                   <p>${instr}</p>
                                `;
                                
                                container.appendChild(popUp);
                                let close =  document.querySelector(".closeBtn");
                                console.log(close);
                                close.addEventListener("click", () => {
                                  isClickable = true;
                                    console.log("close");
                                    container.removeChild(popUp);
                                  });
                               

                            })
                        })
                        
                    })
                })

              }
            })

          });
        });
      }
    });
  });
});

// !---------------------------

let btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese";

  fetch(url).then((res) => {
    res.json().then((data) => {
      let length = data.meals.length;

      for (let i = 0; i < length; i++) {
        let mealId = data.meals[i].idMeal;
        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
        let realIdUrl = `${idUrl}${mealId}`;

        fetch(realIdUrl).then((res) => {
          res.json().then((info) => {
            ingredient1 = info.meals[0].strIngredient1;
            ingredient2 = info.meals[0].strIngredient2;
            ingredient3 = info.meals[0].strIngredient3;
            ingredient4 = info.meals[0].strIngredient4;

            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                        <div class="imgBox">
                        <img src=${data.meals[i].strMealThumb} alt="img">
                    </div>
                    <h4>${data.meals[i].strMeal}</h4>
                    <ul>
                    <button>${ingredient1}</button>
                    <button>${ingredient2}</button>
                    <button>${ingredient3}</button>
                    <button>${ingredient4}</button>
                    </ul>
                    `;

            container.appendChild(card);

             card.addEventListener("click", () => {
              if(isClickable) {

                isClickable = false;

                // alert(url);
                fetch(url).then((res) => {
                    res.json().then((about) => {
                        // console.log(about.meals[i].idMeal);
                        let id = about.meals[i].idMeal;
                        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
                        let orgId = `${idUrl}${id}`;
                        // console.log(orgId);

                        fetch(orgId).then((res) => {
                            res.json().then((data) => {
                    
                                let instr = data.meals[0].strInstructions;
                                console.log(data.meals[0].strInstructions);
                                // alert(`Instructions : ${instr}`);;


                                 let popUp = document.createElement("div");
                                popUp.classList.add("popUp");

                                popUp.innerHTML = `
                                   <button class="closeBtn">❌</button>
                                   <p>${instr}</p>
                                `;
                                
                                container.appendChild(popUp);
                                let close =  document.querySelector(".closeBtn");
                                console.log(close);
                                close.addEventListener("click", () => {
                                  isClickable = true;
                                    console.log("close");
                                    container.removeChild(popUp);
                                  });
                            })
                        })
                        
                    })
                })
              }
            })
          });
        });
      }
    });
  });
});

// !-------------------------
let btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=american";

  fetch(url).then((res) => {
    res.json().then((data) => {
      let length = data.meals.length;

      for (let i = 0; i < length; i++) {
        let mealId = data.meals[i].idMeal;
        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
        let realIdUrl = `${idUrl}${mealId}`;

        fetch(realIdUrl).then((res) => {
          res.json().then((info) => {
            ingredient1 = info.meals[0].strIngredient1;
            ingredient2 = info.meals[0].strIngredient2;
            ingredient3 = info.meals[0].strIngredient3;
            ingredient4 = info.meals[0].strIngredient4;

            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                        <div class="imgBox">
                        <img src=${data.meals[i].strMealThumb} alt="img">
                    </div>
                    <h4>${data.meals[i].strMeal}</h4>
                    <ul>
                    <button>${ingredient1}</button>
                    <button>${ingredient2}</button>
                    <button>${ingredient3}</button>
                    <button>${ingredient4}</button>
                    </ul>
                    `;

            container.appendChild(card);

            card.addEventListener("click", () => {

              if(isClickable) {
                isClickable = false;

                // alert(url);
                fetch(url).then((res) => {
                    res.json().then((about) => {
                        // console.log(about.meals[i].idMeal);
                        let id = about.meals[i].idMeal;
                        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
                        let orgId = `${idUrl}${id}`;
                        // console.log(orgId);

                        fetch(orgId).then((res) => {
                            res.json().then((data) => {
                    
                                let instr = data.meals[0].strInstructions;
                                console.log(data.meals[0].strInstructions);
                                // alert(`Instructions : ${instr}`);

                                 let popUp = document.createElement("div");
                                popUp.classList.add("popUp");

                                popUp.innerHTML = `
                                   <button class="closeBtn">❌</button>
                                   <p>${instr}</p>
                                `;
                                
                                container.appendChild(popUp);
                                let close =  document.querySelector(".closeBtn");
                                console.log(close);
                                close.addEventListener("click", () => {
                                  isClickable = true;
                                    console.log("close");
                                    container.removeChild(popUp);
                                  });

                            })
                        })
                        
                    })
                })
              }
            })
          });
        });
      }
    });
  });
});
// !-------------------

let btn4 = document.querySelector(".btn4");

btn4.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=italian";

  fetch(url).then((res) => {
    res.json().then((data) => {
      let length = data.meals.length;

      for (let i = 0; i < length; i++) {
        let mealId = data.meals[i].idMeal;

        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
        let realIdUrl = `${idUrl}${mealId}`;

        fetch(realIdUrl).then((res) => {
          res.json().then((info) => {
            ingredient1 = info.meals[0].strIngredient1;
            ingredient2 = info.meals[0].strIngredient2;
            ingredient3 = info.meals[0].strIngredient3;
            ingredient4 = info.meals[0].strIngredient4;

            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                        <div class="imgBox">
                        <img src=${data.meals[i].strMealThumb} alt="img">
                    </div>
                    <h4>${data.meals[i].strMeal}</h4>
                    <ul>
                    <button>${ingredient1}</button>
                    <button>${ingredient2}</button>
                    <button>${ingredient3}</button>
                    <button>${ingredient4}</button>
                    </ul>
                    `;

            container.appendChild(card);

             card.addEventListener("click", () => {
              if(isClickable) {
                isClickable = false;

                // alert(url);
                fetch(url).then((res) => {
                    res.json().then((about) => {
                        // console.log(about.meals[i].idMeal);
                        let id = about.meals[i].idMeal;
                        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
                        let orgId = `${idUrl}${id}`;
                        // console.log(orgId);

                        fetch(orgId).then((res) => {
                            res.json().then((data) => {
                    
                                let instr = data.meals[0].strInstructions;
                                console.log(data.meals[0].strInstructions);
                                // alert(`Instructions : ${instr}`);;

                                 let popUp = document.createElement("div");
                                popUp.classList.add("popUp");

                                popUp.innerHTML = `
                                   <button class="closeBtn">❌</button>
                                   <p>${instr}</p>
                                `;
                                
                                container.appendChild(popUp);
                                let close =  document.querySelector(".closeBtn");
                                console.log(close);
                                close.addEventListener("click", () => {
                                  isClickable = true;
                                    console.log("close");
                                    container.removeChild(popUp);
                                  });

                            })
                        })
                        
                    })
                })
              }
            });
          });
        });
      }
    });
  });
});

// !-------------------

let btn5 = document.querySelector(".btn5");

btn5.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian";

  fetch(url).then((res) => {
    res.json().then((data) => {
      let length = data.meals.length;

      for (let i = 0; i < length; i++) {
        let mealId = data.meals[i].idMeal;

        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
        let realIdUrl = `${idUrl}${mealId}`;

        fetch(realIdUrl).then((res) => {
          res.json().then((info) => {
            ingredient1 = info.meals[0].strIngredient1;
            ingredient2 = info.meals[0].strIngredient2;
            ingredient3 = info.meals[0].strIngredient3;
            ingredient4 = info.meals[0].strIngredient4;

            let card = document.createElement("div");
            card.classList.add("card");
           
            card.innerHTML = `
                    <div class="imgBox">
                    <img src=${data.meals[i].strMealThumb} alt="img">
                    </div>
                    <h4>${data.meals[i].strMeal}</h4>
                    <ul>
                    <button>${ingredient1}</button>
                    <button>${ingredient2}</button>
                    <button>${ingredient3}</button>
                    <button>${ingredient4}</button>
                    </ul>
                    `;

            container.appendChild(card);

             card.addEventListener("click", () => {

              if(isClickable) {

                isClickable = false;
                // alert(url);
                fetch(url).then((res) => {
                    res.json().then((about) => {
                        // console.log(about.meals[i].idMeal);
                        let id = about.meals[i].idMeal;
                        let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
                        let orgId = `${idUrl}${id}`;
                        // console.log(orgId);

                        fetch(orgId).then((res) => {
                            res.json().then((data) => {
                    
                                let instr = data.meals[0].strInstructions;
                                console.log(data.meals[0].strInstructions);
                                // alert(`Instructions : ${instr}`);;

                                 let popUp = document.createElement("div");
                                popUp.classList.add("popUp");

                                popUp.innerHTML = `
                                   <button class="closeBtn">❌</button>
                                   <p>${instr}</p>
                                `;
                                
                                container.appendChild(popUp);
                                let close =  document.querySelector(".closeBtn");
                                console.log(close);
                                close.addEventListener("click", () => {
                                  isClickable = true;
                                    console.log("close");
                                    container.removeChild(popUp);
                                  });

                            })
                        })
                        
                    })
                })
              }
            })
          });
        });
      }
    });
  });
});
// !-----------------------

