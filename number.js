/**
 * Get a random fact from your favorite number
 */
async function getFavoriteNumFact(number = 4) {
  let url = `http://numbersapi.com/${number}?json`;

  try {
    let fact = await $.getJSON(url, function (data) {
      $("#number-facts").append($("<li>").text(data.text));
    });
  } catch (e) {
    console.log(e);
  }
}

/**
 * Get 3 facts from different numbers
 */
async function getNumFacts(
  randomNum1 = 42,
  randomNum2 = 96,
  randomNum16 = 100
) {
  let url = `http://numbersapi.com/${randomNum1},${randomNum2},${randomNum16}?json`;

  try {
    const facts = await $.getJSON(url);
    // Set keys of array of objects
    keys = Object.keys(facts);
    // Iterate over each key and create HTML element
    keys.forEach((fact) => {
      $("#number-facts").append($("<li>").text(`${facts[fact]}`));
    });
  } catch (e) {
    console.log(e);
  }
}

/**
 *Get 4 facts from your favorite number
 */
async function getFavNumFacts(number = 4) {
  let url = `http://numbersapi.com/${number}?json`;

  try {
    let facts = await Promise.all([
      $.getJSON(url, function (data) {
        $("#number-facts").append($("<li>").text(data.text));
      }),
      $.getJSON(url, function (data) {
        $("#number-facts").append($("<li>").text(data.text));
      }),
      $.getJSON(url, function (data) {
        $("#number-facts").append($("<li>").text(data.text));
      }),
      $.getJSON(url, function (data) {
        $("#number-facts").append($("<li>").text(data.text));
      }),
    ]);

    return facts;
  } catch (e) {
    console.log(e);
  }
}
