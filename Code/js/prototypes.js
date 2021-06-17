
/**
 * contructor function: Ten la danh tu, thuong viet hoa chu cai dau. Dung de tao mot doi tuong moi
 * normal function : cameCase, thuc hien mot nhiem vu nhat dinh
 * tất cả các function trong javascript được khai báo đều có property là prototype vì function cũng là object. Ngược lại prototype có constructor trỏ ngược lại object(constructor function) ban đầu
 * Prototype object được chia sẽ giữa tất cả các objects được tạo bằng sử dụng từ khóa new
 */

 function Mouse(color, weight){
     this.type = "mouse"
     this.color = color
     this.weight = weight
     this.sleep = function(){
         console.log('sleeping....')
     }
 }

 Mouse.prototype.sleep1 = function(){
     console.log(this.color+'sleeping....')
 }// tiet kiem bo nho

 var jerry = new Mouse('white',20)
 var mickey = new Mouse('black',10)
 console.log(jerry.sleep === mickey.sleep)
 console.log(jerry.sleep1 === mickey.sleep1)

 
function Student(name, level) {
    
    name : name
    level : level
    school : "CodersX"

}

module.exports = Student;