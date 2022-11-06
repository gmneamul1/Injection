document.getElementById("calulator").addEventListener("click", function () {

  // cyce time
  const cycleTime = document.getElementById("cycle").value;

  const cycleString = parseFloat(cycleTime ? cycleTime : 0);

  // cavity
  const cavity = document.getElementById("cavity").value;
  const cavityString = parseFloat(cavity ? cavity : 96);
  const cavityCycle = cavityString * 3600;
  // console.log(cavityCycle)
  // let output = 0;
  function outputvalue() {
    if (cycleString <= 0) {
      return 0;
    } else {
      let output = cavityCycle / cycleString;
      // console.log(output);
      return output;
    }
  }
  const perHourOutput = outputvalue();
  // console.log(perHourOutput);

  const outputString = parseFloat(perHourOutput);
  const outputText = document.getElementById("output");
  outputText.innerText = perHourOutput.toFixed(2);
  const outputValue = outputText.innerText;

  const material = document.getElementById("size").value;
  const gramToKg = parseFloat(material / 1000);

  // console.log(gramToKg)
  const materials = material * outputString;
  const gramMaterial = material * outputString;

  // console.log(material)
  // console.log(outputString)
  // console.log(gramMaterial)
  const kgMaterial = gramMaterial / 1000;
  const materialskg = document.getElementById("material-kg");

  materialskg.innerText = parseFloat(kgMaterial).toFixed(2);
  const remainingTime = document.getElementById("remaining-time").value;
  const remain = remainingTime ? remainingTime : 0;

  function remaingTime() {
    if (remain <= 0) {
      return 0;
    } else {
      const reminingTimeNumber = 60 / remainingTime;
      // console.log(reminingTimeNumber)
      return reminingTimeNumber;
    }
  }
  const remainTime = remaingTime();
  // console.log(remainTime)

  const remaingstring = parseFloat(remainTime);
  // console.log(remaingstring)
  const outputZero = perHourOutput ? perHourOutput : 0;

  function remainoutput() {
    if (remaingstring <= 0) {
      return 0;
    } else {
      const remaingPreforms = outputZero / remaingstring;
      return remaingPreforms;
    }
  }

  const remainPreform = remainoutput();
  // console.log(remainPreform)

  const product8hourse = document.getElementById("8hoursProduct");
  const producedPreforms = document.getElementById("produce-preforms").value;
  //   total production
  const eightHoursProd =
    parseFloat(remainPreform) +
    parseFloat(producedPreforms ? producedPreforms : 0);

 
  const totalProduction = product8hourse.innerText;
  // console.log(totalProduction)

  



  //   carton
  const carton = document.getElementById("percarton").value;
  const cartons = parseFloat(carton ? carton : 0);
  // console.log(cartons)
  const totalCarton = parseFloat(eightHoursProd? eightHoursProd: 0) / parseFloat(cartons? cartons: 1);
  const totalCartonInt = parseInt(totalCarton )
  const totalCartons = document.getElementById("Cartons");
  totalCartons.innerText = totalCartonInt;


// per shift profuction 
  const totalProduction1 =parseFloat( totalCartonInt? totalCartonInt:0 )*  parseFloat(cartons? cartons: 0); 
  const totalProductionInt = parseInt(totalProduction1)
  console.log(totalCarton)
  console.log(cartons)
  console.log(totalProduction1)
  product8hourse.innerText = totalProductionInt;


  // under
  const under = document.getElementById("under-preforms").value;
  const isUnder = under ? under : 0;
  const underTops = parseFloat(isUnder) * parseFloat(cartons);
  const underTOMat = parseFloat(underTops * gramToKg);
  // console.log(underTops)
  // console.log(underTOMat)

  // wastage total
  const totalWastage = document.getElementById("wastage").value;
  const userWastege = parseFloat(totalWastage ? totalWastage : 0);
  // console.log(userWastege)

  const produceToMaterials = totalProductionInt * gramToKg;
  const materialsString = parseFloat(produceToMaterials);
  console.log(produceToMaterials);
  const TotalMaterial = userWastege + materialsString + underTOMat;
  const totalmaterialToPercentage = parseFloat(TotalMaterial);
  console.log(totalmaterialToPercentage);

  const totalMaterial = document.getElementById("total-materials");
  totalMaterial.innerText = TotalMaterial.toFixed(2);

  // wastage percentage
  const wastagePercentage = document.getElementById("percentage");
  const wastageToPercentage = (userWastege * 100) / totalmaterialToPercentage;

  function wastage(x) {
    if (isNaN(wastageToPercentage)) {
      return 'Please type input value';
    }else{
      return wastageToPercentage.toFixed(2);
    }
   
  }
  
  wastagePercentage.innerText = (wastage())
  // console.log(wastageToPercentage)
  // console.log(userWastege)
  // running time
  const runningTime = document.getElementById("running");
  const runningHourse = underTops + totalProduction1;
  const runningDvided = runningHourse / perHourOutput;

  runningTime.innerText = runningDvided.toFixed(3);
  // break down time
  const breakDown = document.getElementById("break");
  const breakFromRuuning = 8 - parseFloat(runningDvided);
  breakDown.innerText = breakFromRuuning.toFixed(3);
  // avarage cycle time 
  const avaragecyle= document.getElementById('avarage')
  const avarage = (3600 * cavityString) / runningHourse;
  const avarageAndRunningTime = avarage * parseFloat(runningDvided)
  avaragecyle.innerText =  avarageAndRunningTime.toFixed(3)





// cases

const perCase = document.getElementById("perCase").value;

  const cases = document.getElementById("case");
  const totalCase =
    parseFloat( totalProduction1) / parseFloat(perCase ? perCase : 24);
   console.log(totalCase)
  //  console.log(totalProduction)
  //  console.log(( perCase ? perCase : 0))
  // // console.log(totalCase)
  function totalCasena() {
    if (!isFinite(totalCase)) {
      return 0;
    } else {
      return totalCase;
    }
  }
  totalCasena()
  const totalcaseNan = totalCasena();
  // console.log(totalcaseNan)

  cases.innerText = totalcaseNan.toFixed(2);















  // cages
  const cages = document.getElementById("per-cage").value;

  const totalCages = document.getElementById("cages");
  const totalCage = cages ? cages : 0;
const isinfint =  parseFloat(totalCarton) / parseFloat(totalCage)
function ifinit(x) {
  if (!isFinite(isinfint)) {
    return "Please type Per box Value";
  } else
  {
    return isinfint.toFixed(2);
  }


}
ifinit()
  totalCages.innerText = (ifinit());
});

// function refreshPage() {
//   form.reset();

//   // window.location.reload();5
// }

function refreshPage() {

  var elements = [] ;
  elements = document.getElementsByClassName("MyTestClass");

  for(var i=0; i<elements.length ; i++){
     elements[i].value = "" ;
  }

}
