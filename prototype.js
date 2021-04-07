// Function Empty (Tidak Berfungsi Sama sekali)
//Study Case Bagaimana cara nya saya memasukan sebuah data kedalam func tsb.

function student(){ 
    //Not Func
    // student.prototype.class = "9A";
    // student.prototype.startDate = new Date();
    // student.prototype.Bulk = function () {
    //     console.log (this.class)
    // }
}

function collage() { 
    //Not Func
    // collage.prototype.name = "lalalal";
}

    collage.prototype.name = "lalalal";
    student.prototype.class = "9A";
    student.prototype.startDate = new Date();
    student.prototype.Bulk = function () {
        console.log (this.class)
    }
    collage.prototype.showData = function () {
        console.log (this.name)
    }

let Dedi = new student()
let lalala = new collage()

console.log(Dedi)
console.log(lalala)