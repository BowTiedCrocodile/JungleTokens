//GET /account?address={address} => { name, description, img-link} for NFT
//GET /badges?address={address} => [ { name, img-link } ]
const endpointUrl = "https://something/api/";

function getAccount() {
  const accountId = "1"; // MetaMask JS function to get the accountID here.

  getAccountInfoAjax(accountId).done( (data) => {
    $("#name").text(data.name);
    $("#description").text(data.description);
    $("#imgNft").attr("src", data.imgLink);
    $("#imgNft").removeClass("visually-hidden");
  });
}

function getAccountInfoAjax(address) {
  const endpoint = `${endpointUrl}account?address=${address}`;

  return $.ajax(endpoint,{
    accepts: "application/json"
  });
}

function getBadges() {
  const accountId = "1"; // MetaMask JS function to get the accountID here.

  getBadgesInfoAjax(accountId).done( (data) => {
    // temp vars
    const badgeArray = data.d;
  });
}

function getBadgesInfoAjax(address) {
  const endpoint = `${endpointUrl}badges?address=${address}`;

  return $.ajax(endpoint,{
    accepts: "application/json"
  });
}