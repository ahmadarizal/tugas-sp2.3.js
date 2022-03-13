var jualMobil = {
  iklan: function () {
    console.log(
      `BU, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`
    );
    document.write(
      `BU, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`
    );
  },
};

var mobil = Object.create(jualMobil);

mobil.nama = "Tompel";
mobil.merek = "Avanza";
mobil.tahun = 2017;
mobil.iklan();
