### this 指向问题
- 在对象方法的嵌套函数中，`this`会指向`global`对象
```
var age = 2;
var kitty = {
    age: 1,
    growth: function(){
        setTimeout(function(){
            console.log(++this.age);
            },100);
    }
};
console.log(kitty.growth());//3
```
通常利用hack的方法解决，即`self = this`
```
var age = 2;
var kitty = {
    age: 1,
    growth: function(){
        var self = this;
        setTimeout(function(){
            console.log(++self.age);
            },100);
    }
};
console.log(kitty.growth());//2
```
