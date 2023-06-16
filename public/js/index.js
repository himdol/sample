shopList = shopList.replaceAll('&#34;', '\"');
shopList = JSON.parse(shopList);

function init() {
  makeMainTableTbody();
}

function makeMainTableTbody() {
  let mainTbody = document.getElementById('main_tbody');
  let html = "";
  shopList.forEach(elem => {
    const shopId = elem.SHOP_ID;
    const shopNameKr = elem.SHOP_NAME_KR;
    html +=
      `<tr class="shop">
        <th>${shopId}</th>
        <td>${shopNameKr}</td>
      </tr>`;
  });
  mainTbody.innerHTML = html;
}




document.getElementById("getEmail").addEventListener("click", function() {
  console.log("click");
});


init();

