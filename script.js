const endpointUrl = "https://degenistan.com/";

function getAccount() {
  const accountId = $("#accountIDInput").val();

  getAccountInfoAjax(accountId).done( (data) => {
    data = data[0].meta;
    $("#name").text(data.name);
    $("#description").text(data.description);
    $("#imgNft").attr("src", data.image);
    $("#imgNft").removeClass("visually-hidden");
  });
}

function getAccountInfoAjax(address) {
  const endpoint = `${endpointUrl}account`;

  const data = `{"account":"${address}"}`;

  return $.post({
    url: endpoint,
    contentType: "application/json",
    accepts: "application/json",
    data: data
  });
}

function getBadges() {
  const accountId = $("#accountIDInput").val();

  getBadgesInfoAjax(accountId).done( (data) => {
    // temp vars
    const badgeArray = data.d;
  });
}

function getBadgesInfoAjax(address) {
  const endpoint = `${endpointUrl}badges?address=${address}`;

  return $.ajax(endpoint,{
    type: "POST",
    accepts: "application/json"
  });
}