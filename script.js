const url = "https://api.github.com/users/okni-c/repos";

const colorURL = " http://thecolorapi.com/scheme?hex=62B440&format=html&mode=analogic&count=6"

fetch(url)
    .then(response => response.json())
    .then(data => getData(data));

function getData(data) {

    for (var i = 0; i < data.length; i++) {

        var date = moment(data[i].updated_at);

        var applePallette = ['62B440', '59B640', '51B740', '48B840', '40B941', '40BB4A', '40BC54', '40BD5D', '40BE67', '40BF71', '41C07B', '42C185', '42C190', '43C29A', '44C3A4', '44C3AE', '45C4B8', '46C4C2', '46BEC5', '47B5C6'];

        var parent = document.getElementById('repo-div');

        var child = document.createElement('div');

        var card = `
        <!-- card start -->
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
              role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#${applePallette[Math.floor(Math.random() * applePallette.length)]}" /><text x="50%" y="50%" fill="#000000"
                dy=".3em">${data[i].name}</text>
            </svg>

            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <form action="${data[i].html_url}">
                  <input type="submit" class="btn btn-sm btn-outline-secondary" value="View on GitHub" />
                </form>
                </div>
                <small class="text-muted">${date.format('lll')}</small>
              </div>
            </div>
          </div>
        </div>
        <!-- card end -->
        `;

        child.innerHTML = card;

        parent.appendChild(child);

    }
}