var mobil = {
  merek: "Ferrari",
  berat: 1630,
  warna: "hitam",
  gas: function () {
    return "mobil melaju";
  },
  rem: function () {
    return "mobil berhenti";
  },
};

document.write(" 4. (1) Mobil  " + mobil + "<br><br>");
document.write(" &nbsp " + "Merek : " + mobil.merek + "<br>");
document.write(" &nbsp " + " berat : " + mobil.berat + "<br>");
document.write(" &nbsp " + "warna : " + mobil.warna + "<br>");
document.write(" &nbsp " + "gas : " + mobil.gas() + "<br>");
document.write(" &nbsp " + "Rem : " + mobil.rem() + "<br><br>");

var sepeda = {
  merek: "phonix",
  berat: 15,
  warna: "hijau",
  pedal: function () {
    return "sepedah melaju";
  },
  rem: function () {
    return "sepedah berhenti";
  },
};

document.write(" 4. (2) sepeda  " + sepeda + "<br><br>");
document.write(" &nbsp " + "Merek : " + sepeda.merek + "<br>");
document.write(" &nbsp " + " berat : " + sepeda.berat + "<br>");
document.write(" &nbsp " + "warna : " + sepeda.warna + "<br>");
document.write(" &nbsp " + "pedal : " + sepeda.pedal() + "<br>");
document.write(" &nbsp " + "Rem : " + sepeda.rem() + "<br><br>");

var montor = {
  merek: "beat",
  berat: 30,
  warna: "merah",
  gas: function () {
    return "montor melaju";
  },
  rem: function () {
    return "montor berhenti";
  },
};

document.write(" 4. (3) montor  " + montor + "<br><br>");
document.write(" &nbsp " + "Merek : " + montor.merek + "<br>");
document.write(" &nbsp " + " berat : " + montor.berat + "<br>");
document.write(" &nbsp " + "warna : " + montor.warna + "<br>");
document.write(" &nbsp " + "gas : " + montor.gas() + "<br>");
document.write(" &nbsp " + "Rem : " + montor.rem() + "<br><br>");

var blender = {
  merek: "panasonic",
  berat: 1,
  warna: "putih",
  poweron: function () {
    return "menghidupkan blender";
  },
  powerof: function () {
    return "mematikan blender";
  },
};

document.write(" 4. (4) blender  " + blender + "<br><br>");
document.write(" &nbsp " + "Merek : " + blender.merek + "<br>");
document.write(" &nbsp " + " berat : " + blender.berat + "<br>");
document.write(" &nbsp " + "warna : " + blender.warna + "<br>");
document.write(" &nbsp " + "poweron : " + blender.poweron() + "<br>");
document.write(" &nbsp " + "powerof : " + blender.powerof() + "<br><br>");

var ac = {
  merek: "samsung",
  berat: 5,
  warna: "putih",
  poweron: function () {
    return "menghidupkan ac";
  },
  powerof: function () {
    return "mematikan ac";
  },
};

document.write(" 4. (5) ac  " + ac + "<br><br>");
document.write(" &nbsp " + "Merek : " + ac.merek + "<br>");
document.write(" &nbsp " + " berat : " + ac.berat + "<br>");
document.write(" &nbsp " + "warna : " + ac.warna + "<br>");
document.write(" &nbsp " + "poweron : " + ac.poweron() + "<br>");
document.write(" &nbsp " + "powerof : " + ac.powerof() + "<br><br>");
