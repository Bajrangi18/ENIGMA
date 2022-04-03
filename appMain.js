const dataBtn = document.getElementById("genData");

dataBtn.addEventListener("click", async event =>{
        GenerateTable();
   })


function GenerateTable() {
  fetch('http://health-info.us-e2.cloudhub.io/empData/1NH19EC129')
    .then(res => res.json())
    .then((out) => {
  }).catch(err => console.error(err));
  const empTemp = JSON.parse(out)
       var table = document.getElementById("EmpTable");

       var row = table.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);


       cell1.innerHTML = "1NH19EC129";
       cell2.innerHTML = "JOHN DOE";
       cell3.innerHTML = empTemp.BPM;
       cell4.innerHTML = empTemp.Temperature;

    }
