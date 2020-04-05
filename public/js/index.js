// Get references to page elements
var $productSearchTxt = $("#productSearchTxt");
var $exampleDescription = $("#example-description");
var $productSearchBtn = $("#productSearchBtn");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  searchPetFood: function(searchText) {
    return $.ajax({
      url: "api/petfood/" + searchText,
      type: "GET"
    });
  },
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $productSearchTxt.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $productSearchTxt.val("");
  $exampleDescription.val("");
};

// handleSearchFormSubmit is called whenever we submit a new pet food search
var handleSearchFormSubmit = function(event) {
  event.preventDefault();
  const searchText = $productSearchTxt.val().trim();

  if (!searchText) {
    alert("You must enter a product name of pet food name!");
    return;
  }

  API.searchPetFood(searchText).then(function(data) {
    console.log(data);
  });

  $productSearchTxt.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$productSearchBtn.on("click", handleSearchFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
