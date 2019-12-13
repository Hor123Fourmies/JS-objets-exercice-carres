var tbl = [];

// Square object

var Square = function()
{
    this.elem = document.createElement('div');
    this.elem.style.cssText = 'background:red; position absolute; left: 0px; top:0px; transition: all 1.5s';
    document.body.appendChild(this.elem);

    this.x = 0;
    this.y = 0;

    this.setWidth = function (width) {
        this.elem.style.cssText += 'width:'+width+'px';
    };

    this.setHeight = function (height) {
        this.elem.style.cssText += 'height:'+height+'px';
    };

    this.placeRandom = function ()
    {
        this.x = Math.floor(Math.random()*900);
        this.y = Math.floor(Math.random()*900);
        this.elem.style.cssText += 'position:absolute; left: '+this.x+'px; top:'+this.y+'px;';
    };

    this.placeControls = function ()
    {
        this.createControlLeft();
        this.createControlRight();
    };

    this.createControlLeft = function ()
    {
        this.controlLeft = document.createElement('button');
        this.controlLeft.innerHTML = "<";
        this.elem.appendChild(this.controlLeft);
        this.controlLeft.onmousedown = ()=>this.goLeft();
    };


    this.goLeft = function ()
    {
        this.elem.style.left = (parseInt(this.elem.style.left)-55)+'px';
    };

    this.createControlRight = function ()
    {
        this.controlRight = document.createElement('button');
        this.controlRight.innerHTML = ">";
        this.elem.appendChild(this.controlRight);
        this.controlRight.onmouseover = ()=>this.goRight();
    };


    this.goRight = function ()
    {
        this.elem.style.left = (parseInt(this.elem.style.left)+55)+'px';
    };

};


document.getElementById('createSquare').onclick = function ()
{
    var carre = new Square();
    carre.setWidth(150);
    carre.setHeight(150);
    carre.placeRandom();
    carre.placeControls();
};
