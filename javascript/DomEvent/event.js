var eventUtil={
            // 添加句柄
            addHandler:function(element,type,handler){
                if(element.addEventListener){//DOM2级处理事件
                    element.addEventListener(type,handler,false);
                }else if(element.attachEvent){//IE浏览器事件处理
                    element.attachEvent('on'+type,handler);
                }else{
                    element['on'+type]=handler;//DOM0级处理事件
                }
            },

            // 删除句柄
            removeHandler:function(element,type,handler){
                if(element.removeEventListener){//DOM2级处理事件
                    element.removeEventListener(type,handler,false);
                }else if(element.detachEvent){//IE浏览器事件处理
                    element.detachEvent('on'+type,handler);
                }else{
                    element['on'+type]=null;//DOM0级处理事件
                }
            },

            //IE尤其是IE8以下的浏览器引用event要使用window.event
            getEvent:function(event){
                // return event?event:window.event;
                return event=event || window.event;//这两句都是可以的，同样的意思
            },

            //获取事件类型
            getType:function(event){
                return event.type;
            },

            //获取事件来源
            getElement:function(event){
                return event.target || event.srcElement;
            },

            //阻止默认事件
            preventDefault:function(event){
                if(event.preventDefault){
                    event.preventDefault();
                }else{
                    event.returnValue=false;
                }
            },

            //阻止冒泡
            stopPropagation:function(event){
                if(event.stopPropagation){
                    event.stopPropagation();
                }else{
                    event.cancelBubble=true;
                }
            }

        }
