function animate(obj, target, callback) {
    //加个清除以前的定时器的操作，保证只有一个定时器在执行
    clearInterval(obj.timer);
        //步长没取整，做运算时会出现小数，会导致除不尽的情况，应该将步长设置为整数，向上取整
        //obj.step = (target - obj.offsetLeft) / 10;

        //步长向上取整，这样既能使盒子向前走，也能向后走，
        //obj.step = Math.ceil((target - obj.offsetLeft) / 10);

        //当步长为负数时，应该向下取整，因此
      obj.timer=  setInterval(function () {
        if (obj.offsetLeft==target){
            clearInterval(obj.timer)
        }
            obj.step =
                target - obj.offsetLeft > 0
                    ? Math.ceil((target - obj.offsetLeft) / 10)
                    : Math.floor((target - obj.offsetLeft) / 10);
               
            obj.style.left = obj.offsetLeft + obj.step + "px";
        }, 15);
        //下面这句if，相当于 callback&& callback();这样写更简洁
        if (callback) callback();
       
       
    };
    
