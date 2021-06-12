//GET /account?address={address} => { name, description, img-link} for NFT
//GET /badges?address={address} => [ { name, img-link } ]
const endpointUrl = "https://something/api/";

function getAccount() {
  const accountId = "1"; // MetaMask JS to get the accountID
  getAccountAjax(accountId);
}

function getAccountAjax(address) {
  const endpoint = `account?address=${address}`;

  $.ajax(endpoint,{
    accepts: "application/json"
  }).done( (data) => {
    // temp vars
    $("#name")[0] = data.name;
    $("#description")[0] = data.description;
    $("#imgNft")[0] = data.imgLink;
  });
}

function getBadges(address) {
  const endpoint = `badges?address=${address}`;
  
  $.ajax(endpoint,{
    accepts: "application/json"
  }).done( (data) => {
    // temp vars
    const badgeArray = data.d;
  });
}