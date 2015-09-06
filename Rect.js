/**
 * Created by ssthouse on 2015/9/6.
 */
function Rect(n, color) {
    //将Rect传入Shape的构造方法中---获得shape的所有属性
    createjs.Shape.call(this);

    this.setRectType = function (type) {
        this._RectType = type;
        switch (type) {
            case 1:
                this.setColor(color)
                break;
            case 2:
                //获取一个相近的颜色
                var colorNumber = parseInt(color.substr(1, color.length - 1));
                //document.writeln(colorNumber);
                colorNumber += 0x11;
                //document.writeln(colorNumber);
                //alert(colorNumber);
                this.setColor("#" + colorNumber);
                break;
        }
    };

    this.getRectType = function () {
        return this._RectType;
    }

    this.setColor = function (colorStr) {
        this.graphics.beginFill(colorStr);
        this.graphics.drawRect(0, 0, 400 / n - 5, 400 / n - 5);
        this.graphics.endFill();
    }

    this.setRectType(1);
}

Rect.prototype = new createjs.Shape();