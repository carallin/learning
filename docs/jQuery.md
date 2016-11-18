## 事件 ##
### 1. 事件委托
- #### jquery 'on'
```
$(document).on('click','li',function(){
    alert($(this).attr('id'));
    })
```
- #### javaScript
```
document.getElementById('list').addEventListener('click',function(e){
    if(e.target && e.target.nodeName == 'li'){
        // TO DO
    }
    })
```
