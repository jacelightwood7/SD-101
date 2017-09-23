window.onload =function() {
  var rdFtoK = document.getElementById("rdFtoK");
rdFtoK.checked = true;
}

function FtoC(DegF){
  return (DegF-32)*5/9;
}
function changeConversion(degFrom, degTo) {
  var spnDegFrom = document.getElementById("spnDegFrom");
  var spngDegTo = document.getElementById("spnDegTo");
  varspnDegResult = document.getElementById("spnDegResult");
  spnDegResult.innerHTML ="?"
  spnDegFrom.innerHTML = degFrom;
  spngDegTo.innerHTML = degTo;
}
function convertTemp() {
  //get radio buttons
  var rdFtoC = document.getElementById("rdFtoC");
  var rdCtoF = document.getElementById("rdCtoF");
  var rdFtoK = document.getElementById("rdFtoK");
  var rdKtoF = document.getElementById("rdKtoF");
  var rdCtoK = document.getElementById("rdCtoK");
  var rdKtoC = document.getElementById("rdKtoC");

  var txtDeg = document.getElementById("txtDeg");
  var spnDegResult = document.getElementById("spnDegResult");
  if (rdFtoC.checked) {
spnDegResult.innerHTML = FtoC(txtDeg.value).toFixed(2);
  }
  else if (rdCtoF.checked) {
spnDegResult.innerHTML = CtoF(txtDeg.value).toFixed(2);
  }
  else if (rdFtoK.checked) {
spnDegResult.innerHTML = FtoK(txtDeg.value).toFixed(2);
  }
  else if (rdKtoF.checked) {
spnDegResult.innerHTML = KtoF(txtDeg.value).toFixed(2);
  }
  else if (rdCtoK.checked) {
spnDegResult.innerHTML = CtoK(txtDeg.value).toFixed(2);
  }
  else if (rdKtoC.checked) {
spnDegResult.innerHTML = KtoC(txtDeg.value).toFixed(2);
  }
  else {
spnDegResult.innerHTML = "";
  }
function FtoK(DegF) {
  return CtoK(FtoC(DegF));
}
function KtoF(DegK) {
  return CtoF(KtoC(DegK))
}
function FtoK(DegF) {
  return (DegF-273.15)*9/5+32;
}
function KtoF(DegK) {
  return (DegK-273.15)*9/5+32;
}
function CtoF(DegC) {
  return DegC*9/5+32;
}
function CtoK(DegC) {
  return parseInt(DegC)+273.15;
}
function KtoC(DegK) {
  return DegK-273.15;
}
}
