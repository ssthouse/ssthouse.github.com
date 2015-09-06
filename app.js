/**
 * Created by ssthouse on 2015/9/6.
 */
//添加舞台--Container---刷新
var stage = new createjs.Stage("gameView");
var container = new createjs.Container();
stage.addChild(container);
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);

var n = 2;

function addRect() {
    var colorNumber = parseInt(Math.random() * 1000000);
    var colorStr = "#" + colorNumber;

    var chooseX = parseInt(Math.random() * n);
    var chooseY = parseInt(Math.random() * n);

    for (var x = 0; x < n; x++) {
        for (var y = 0; y < n; y++) {
            var rect = new Rect(n, colorStr);
            container.addChild(rect);
            //如果是选中的位置--变成红色
            if (x == chooseX && y == chooseY) {
                rect.setRectType(2);
            }

            rect.x = x * (400 / n);
            rect.y = y * (400 / n);

            //给答案方块设置点击事件
            if(rect.getRectType() == 2){
                rect.addEventListener("click", function () {
                    n++;
                    container.removeAllChildren();
                    addRect();
                });
            }
        }
    }
}

addRect();