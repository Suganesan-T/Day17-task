var api = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>foo(data1))

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

function foo(data1){
    for(i=0;i<data1.length;i++){
        var column = document.createElement("div")
        column.className = "col-md-4"
        column.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        <img src=${data1[i].flags.png} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Country: ${data1[i].capital}</p>
          <p class="card-text">Region: ${data1[i].region}</p>
          <p class="card-text">Country Code: ${data1[i].cca3}</p>
          <a href="#" class="btn btn-primary" onclick=(bar(${data1[i].latlng[0]},${data1[i].latlng[1]},${data1[i].region})) >Click for Weather</a>
          <div id=${data1[i].region}> <div>
        </div>
      </div>`

      row.append(column)
      container.append(row)
      document.body.append(container)
    }
}

function bar(lat, lng, name) {
    var apii = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=725e81a13e9967cc69164286786de230`;
    console.log(name);
  
    fetch(apii)
      .then((data3) => data3.json())
      .then((data4) => {
        alert(`            
       Humidity is ${data4.main.humidity}
       Pressure is ${data4.main.pressure}
       Temperature is ${data4.main.temp}`);
      });
  }

  