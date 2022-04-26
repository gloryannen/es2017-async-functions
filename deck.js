/**
 * Get deck, shuffle it, then draw a card
 * Show card value and suit
 * Cards drawn again do so from the same deck
 */
async function drawCard() {
  const deck = await $.getJSON(
    "http://deckofcardsapi.com/api/deck/new/shuffle"
  );
  const deck_id = deck.deck_id;
  let card = await $.getJSON(
    `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  );
  console.log(card.cards[0].value, "OF", card.cards[0].suit);
}

/**
 * Load HTML with button to draw cards from a deck
 */

async function setHTMLDeck() {
  let $deckContainer = $("#deck-container").addClass(
    "container justify-content-md-center text-center"
  );
  let $btn = $("#card-btn");

  const deck = await $.getJSON(
    "http://deckofcardsapi.com/api/deck/new/shuffle"
  );
  const deck_id = deck.deck_id;
  $btn.click(async function () {
    let card = await $.getJSON(
      `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );
    $deckContainer.append(
      $("<img>")
        .attr("src", card.cards[0].image)
        .addClass("ml-2 mb-2")
        .width("150px")
    );
    if (card.remaining == 0)
      $btn
        .prop("disabled", true)
        .html("No More Cards")
        .removeClass("btn-success")
        .addClass("btn-danger");
  });
}
setHTMLDeck();
