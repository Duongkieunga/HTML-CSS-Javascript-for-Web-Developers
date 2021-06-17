// cac phuong thuc cua Object
var myDog = {
    weight :5,
    bark: function(){//anonymous function
    console.log('Gau gau, my weight is', this.weight);
    },
    eat : function(bone){
      this.weight += bone.weight;
      return this
    }
  };
  var bone = {weight:0.5};
  myDog.eat(bone);
  console.log(myDog.weight)
  Object.values(myDog)