
SIMPAN 'nama'
SIMPAN 'angka pembilang'
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'

SIMPAN 'alas' dari segitiga
SIMPAN 'tinggi' dari segitiga
HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'"

MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF

var nama;
var angka;
var angka2;
var hitung = angka/angka2;
console.log('Halo'+nama+','+angka+ 'dibagi' +angka2+ 'adalah sama dengan '+hitung;
                        
var alas;
var tinggi;
var luas segitiga = (alas * tinggi)/2;
console.log( "Luas Segitiga: "+luas segitiga);          


var tahun = 2017;
if(tahun%4==0){
  if(tahun%100!=0){
    console.log('tahun adalah tahun kabisat')
  } else if(tahun%400==0){
     console.log('tahun adalah bukan tahun kabisat')
  }
}
else{
  console.log('tahun adalah bukan tahun kabisat')
}