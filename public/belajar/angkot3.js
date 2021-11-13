var angkot = 1;
var jmlAngkot = 10;
var angkotBeroprasi = 6;

for(angkot; angkot <= jmlAngkot; angkot++){
   if(angkot <= angkotBeroprasi && angkot != 5){
       console.log('angkot no. ' +angkot+ 'baik');
   } else if(angkot === 8 || angkot === 10 || angkot === 5){
       console.log('angkot no '+angkot+' sedang lembur');
   } else{
       console.log('angkot no ' +angkot+ 'rusak');
   }


}

