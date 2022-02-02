$(document).ready(function () {
  $(':input[type="submit"]').prop("disabled", true);
  $apiReturn = false;
  //API will called after license field out of focus
  $("input#element_10").on("blur", function () {
    $license = $("input#element_10").val();
    $.ajax({
      url: "https://forms.janz.co/mailwizz.php",
      method: "POST",
      data: { 'purchase_code': $license },
      processData: false,
      contentType: false,
      success: function (json) {
        console.log(json);
        var response = JSON.parse(json);
        if (response.status == "success") {
          $apiReturn = true;
        } else {
          $apiReturn = false;
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
    //put the API call here to get the license status
    if ($apiReturn) {
      $(':input[type="submit"]').prop("disabled", false);
    }
  });
});
