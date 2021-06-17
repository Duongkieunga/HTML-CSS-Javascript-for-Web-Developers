var dog1 = {
    type:'cho ta'
  };
  var dog2 = {
    type:'husky'
  };
  var bunchOfDogs = [dog1, dog2];
  // console.log(bunchOfDogs[1])
  var dog3 = {
    type:'Shiba'
  };
  bunchOfDogs[0] = dog3;

  var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
  ];
  
  function getTopStudents(students) {
    // Write code here...
    var arr =  students.sort(function(a, b){
        return b.score - a.score
    }).slice(0, 3)
    console.log(arr)
    var res = []
    for (var ele of arr){
        res.push(ele.name)
    }
    return res
    }
    console.log(getTopStudents(students))
students.splice(0,2);
  