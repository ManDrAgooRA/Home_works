const promise = new Promise((res, rej) => {
  setTimeout(() => {
    let number = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    if (1 <= number && number <= 5) {
      console.log('Start the game...');
      res(number);
    } else if (number === 6) {
      rej('Exit!')
    }
  }, 2000)
});

promise.then((value) => {
  if (value === 1) {
    console.log('Stay here')
  }
  if (value >= 2) {
    console.log(`Go ${value} steps`)
  }
})

promise.catch(() => {
  console.error();
})


const goToShop = new Promise((res) => { res(4) })

const makeDinner = new Promise((res) => {
  setTimeout(() => {
    res('Bon Appetit');
  }, 3000)
})


goToShop.then((value) => {
  if (value < 4) {
    return new Promise((res, rej) => {
      rej('Too low products');
    })
  } else {
    makeDinner.then((value) => {
      console.log(value);
    });
  }
}).catch((e) => {
  console.error(e)
})

const preRender = (...arr) => {
  fetch(`https://rickandmortyapi.com/api/character/${arr}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let container = document.querySelector('.container')
      container.innerHTML = '';

      data.forEach(item => {
        const cond = item.status === 'Alive' ? 'live-status' : 'live-status dead';
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
              <div class="card-info">
                  <div class="title">
                      <h1>${item.name}</h1>
                      <div class="status">
                          <div class="${cond}"></div>
                          <p>${item.species} -- ${item.status}</p>
                      </div>
                  </div>
                  <div class="content">
                      <p>${item.location.name}</p>
                  </div>
              </div>
              <div class="card-image">
                  <img src="${item.image}"
                      alt="Img">
              </div>`;
        document.querySelector('.container').append(div);
      });

    });
}

preRender(1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 65, 345, 87, 342)

const getCategory = () => {

  let checkBoxs = document.querySelectorAll('input');
  let str = ''

  checkBoxs.forEach((item, index) => {
    if (item.checked) {

      if (index < 2) {
        str += `gender=${item.id}&`
      } else {
        str += `status=${item.id}&`
      }
    }
  })

  return str

}

const renderFilters = () => {
  if (getCategory()) {
    fetch(`https://rickandmortyapi.com/api/character/?${getCategory()}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let container = document.querySelector('.container')
        container.innerHTML = '';

        data.results.forEach(item => {
          const cond = item.status === 'Alive' ? 'live-status' : 'live-status dead';
          let div = document.createElement('div');
          div.classList.add('card');
          div.innerHTML = `
            <div class="card-info">
                <div class="title">
                    <h1>${item.name}</h1>
                    <div class="status">
                        <div class="${cond}"></div>
                        <p>${item.species} -- ${item.status}</p>
                    </div>
                </div>
                <div class="content">
                    <p>${item.location.name}</p>
                </div>
            </div>
            <div class="card-image">
                <img src="${item.image}"
                    alt="Img">
            </div>`;
          document.querySelector('.container').append(div);
        });

      });
  } else {
    return false;
  }

}

let form = document.querySelector('.form-container');

form.addEventListener('click', renderFilters)
