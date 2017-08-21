/*
Buatlah sebuah Class Student, yang memiliki atribut berikut:

    Name,
    Age,
    Date of Birth,
    Gender
    Student ID (bisa berupa angka atau teks), dan
    Hobbies (bisa menampung lebih dari 1 hobi).

Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:

    SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
    SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka
    SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
    SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya bisa menerima nilai Male atau Female
    addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks
    removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi apa yang akan dihapus
    getData: menampilkan seluruh data atribut murid
*/

class Student {
   constructor (Name,Age,DateBirth,Gender,StudentID,Hobbies) {
   this.Name = Name;
    this.Age = Age;
     this.DateBirth = DateBirth;
      this.Gender = Gender;
       this.StudentID = StudentID;
        this.Hobbies = Hobbies;
  }

  setName(newSetName) {
    this.Name = newSetName;
  }

  SetAge(newAge) {
    this.Age = newAge;
  }

  SetDateOfBirth(newDateOfBirth) {
    this.DateBirth = newDateOfBirth;
  }

  SetGender(newGender) {
     if(newGender ==='Male' || newGender ==='Female'){
     this.Gender = newGender;
         }
    }

  addHobby(newHobby){
    this.Hobbies.push(newHobby);
  }

  removeHobby(hobi){
   for(let i=0;i<this.Hobbies.length;i++){
    if(this.Hobbies[i] === hobi){
        this.Hobbies.splice(i, 1);
    }
  }
}
  getData() {
    let data = 'Nama : '+this.Name + '\nUmur : '+ this.Age +'\nTgl.Lahir : '+this.DateBirth + '\nJenis Kelamin : '+ this.Gender +'\nID Student : '+ this.StudentID + '\nHobi : '+this.Hobbies;
    return data;
  }
}

let Lita = new Student('Lita', 23, '10081990', 'Male', 13211008, ['Mancing', 'Makan', 'TIdur']);

Lita.SetGender('Male');
Lita.addHobby('Mendengkur');
Lita.removeHobby('Makan');
console.log(Lita.getData());