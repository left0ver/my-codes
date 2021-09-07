var that 
class Tab {
    
    constructor(id) {
        that = this;
        this.main=document.querySelector(id)
       
        this.add=this.main.querySelector(".tabadd")
        this.ul=this.main.querySelector("nav ul")
        this.fsection=this.main.querySelector(".tabscon")
       
        this.init();
        
    }
    init() {
        this.updateNode();
        this.add.onclick=this.addTab;
        for (var i=0;i<this.lis.length;i++) {
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab;
            this.remove[i].onclick=this.removeTab;
            this.spans[i].ondblclick=this.editTab;
            this.section[i].ondblclick=this.editTab;
        }
    }
    updateNode() {
        this.lis=this.main.querySelectorAll("li");
        this.section=this.main.querySelectorAll("section");
        this.remove=this.main.querySelectorAll(".delete");
        this.spans=this.main.querySelectorAll("nav li span:first-child")
    }
    toggleTab() {
       that.clearClass();
        this.className="current";
        that.section[this.index].className="conactive";
    }
    clearClass() {
        for(var i=0;i<this.lis.length;i++) {
            this.lis[i].className="";
            this.section[i].className="";
        }
    }
     addTab() {
        that.clearClass();
      var li= '<li class="current"><span>新选项卡</span><span class="delete" ><svg class="icon shanchu1" aria-hidden="true"> <use xlink:href="#iconshanchu1"></use> </svg></span></li>'
        that.ul.insertAdjacentHTML("beforeend",li)
        var section='<section class="conactive">测试333</section>'
        that.fsection.insertAdjacentHTML("beforeend",section);
        that.init();
    }
    editTab() {
        var str=this.innerHTML;
        //下面这句代码就是当双击的时候让文字不会被选定
        window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()
        this.innerHTML="<input type='text'></input>"
        var input=this.children[0];
        input.value=str;
        input.select();
        //失去焦点时，将文本框里面的值赋值给span
        input.onBlur=function() {
           this.parentNode.innerHTML= this.value;
        }
        input.onkeyup=function(e) {
            if(e.keyCode==13) {
                input.blur();
            }
        }
        
    }
    removeTab(e) {
        e.stopPropagation();
            var index=this.parentNode.index;
            console.log(index);
            //将li和下面的section移除
            that.lis[index].remove();
            that.section[index].remove();
            //删除了之后li和section的个数也变了，重新更新一变
            that.init();
            //当我们点击的删除的li不处于选定状态的时候，就还是让原先的li处于选定状态，
            //原理就是当删除的li是处于选定状态时，这时候删除了，就没有.current这个类了，就会执行下面的代码，反之则会return，return之后就不会往下执行了
            if(document.querySelector(".current"))return;
            //删除之后将删除的前一个li调用点击事件
            index--;
            //调用li的点击事件，即不用点击直接调用
            that.lis[index]  && that.lis[index].click();


    }
}

new Tab("#tab")