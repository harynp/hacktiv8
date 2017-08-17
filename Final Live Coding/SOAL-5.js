/*
===========================
Soal 4 : Most Frequent Item
===========================

Name : _____

Buatlah sebuah function yang berfungsi menampilkan frequent item dari yang paling sedikit tampil hinga yang paling banyak tampil dalam sebuah array beserta totalnya
Input : [‘asus’, ‘asus’, ‘samsung, ‘iphone’,‘iphone’, ‘asus’,‘asus’];
Output : samsung (1) ,sphone(2) , asus(3)
Input : [9, 'b', 'b', 'c', 9, 9, 'b', 9, 2, 2];
Output : c(1) , 2(2) ,b(3) ,9(4)


*/
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counted = [], count = [];
var i = 0, j = 0, k = 0;
while (k < arr.length) {
    if (counted.indexOf(arr[k]) < 0) {
        counted[i] = arr[k];
        count[i] = 0;
        for (j = 0; j < arr.length; j++) {
            if (counted[i] == arr[j]) {
                count[i]++;
            }
        }
        i++;
    } else {
        k++;
    }
}
console.log(count+'='+counted)


// console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone','iphone', 'asus','asus'])); // samsung(1), iphone(2) , asus(4)
// console.log(mostFrequentItem([9,'b','b','c',9,9,'b',9, 2,2])); // c(1) , 2(2) ,b(3) ,9(4)
// // * Total dari array yang sama itu sendiri harus di tampilkan jumlah nya.
