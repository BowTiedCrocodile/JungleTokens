function getAccount () {
  const accountId = $('#accountIDInput').val()

  getAccountInfoAjax(accountId).done((data) => {
    data = data[0].meta
    $('#name').text(data.name)
    $('#description').text(data.description)
    $('#imgNft').attr('src', data.image)
    $('#imgNft').removeClass('visually-hidden')
  })
}

function getAccountInfoAjax (address) {
  const endpoint = `${endpointUrl}account`

  const data = `{"account":"${address}"}`;

  return $.post({
    url: endpoint,
    contentType: 'application/json',
    accepts: 'application/json',
    data: data
  })
}

function getBadges () {
  const accountId = $('#accountIDInput').val()
  $('#badges').empty();

  getBadgesInfoAjax(accountId).done((data) => {
    const badges = $('#badges');
    data.forEach(element => {
      data = element.meta;
      const badgeElement = $("<div></div>");
      badgeElement.addClass("col-3");

      badgeElement.append($(`<div class="fw-bold">Badge Name:</div>`));
      badgeElement.append($(`<div>${data.name}</div>`));

      badgeElement.append($(`<div class="fw-bold">Badge Description:</div>`));
      badgeElement.append($(`<div>${data.description}</div>`));

      badgeElement.append($(`<img src="${data.image}" width="100%"/>`))
      badges.append( badgeElement )
    });
    badges.removeClass('visually-hidden')    
  })
}

function getBadgesInfoAjax (address) {
  const endpoint = `${endpointUrl}badges?address=${address}`

  const data = `{"account":"${address}"}`;

  return $.post({
    url: endpoint,
    contentType: 'application/json',
    accepts: 'application/json',
    data: data
  })
}

App = {
  web3Provider: null,
  contracts: {},

  init: async function () {
    return await App.initWeb3()
  },

  initWeb3: async function () {
    if (window.ethereum) {
      App.web3Provider = window.ethereum
      try {
        await window.ethereum.enable()
      } catch (error) {
        // User denied account access...
        console.error('User denied account access')
      }
    } else if (window.web3) {
      App.web3Provider = window.web3.currentProvider
    } else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }
    web3 = new Web3(App.web3Provider)

    return App.initContract()
  },
  initContract: async function () {
    web3.eth.getAccounts((error, accounts) => {
      $('#accountIDInput').val(accounts[0])
    })
  }
}

$(function () {
  $(window).on('load', function () {
    App.init()
  });

  $('#accountIDInput').on('change', (event)=>{
    event.target.value = event.target.value.trim();
  });
})
