/**
 * Created by Administrator on 2017/5/19.
 */



   /* function Begin()
    {
        var x=getRandom("begin");
        var y=getRandom("begin");
        var a=getRandom("begin");
        var b=getRandom("begin");
        if(x==a&&y==b)
        {
            Begin();
        }
        else
        {
            line[x][y].innerHTML=getRandom("game");
            line[x][y].className="small_box div"+line[x][y].innerHTML;
            line[a][b].innerHTML=getRandom("game");
            line[a][b].className="small_box div"+line[a][b].innerHTML;
        }
    }*/

    //block样式函数
    function style(obj)
    {
        if(obj.innerHTML=="")
        {
            obj.className="small_box";
        }
        else
        {
            obj.className="small_box div"+obj.innerHTML;
        }
    }
    //给一个随机block赋值且加上样式
    function Create()
    {
        var x=getRandom("begin");
        var y=getRandom("begin");
        if(!block[x][y].innerHTML)
        {
            block[x][y].innerHTML=getRandom("game");
            style(block[x][y]);
            return block[x][y];
        }
        else
        {
            Create();
        }
    }

    //游戏开始
    function Begin()
    {
        Create();
        Create();
    }

    //随机函数
    function getRandom(name)
    {
        if(name=="begin")
            //随机坐标
        return Math.round(Math.random()*3);
        else if(name=="game")
        {
            //随机2 4
            var x=Math.round(Math.random()*4);
            x<2?x=4:x=2;
            return x;
        }
    }




    //左键的函数
    function keyLeft()
    {
        var leader=new Array();
        var judge=1;
        for(var i=0;i<4;i++)
        {
            leader[i]=Leftmove(block[i]);
            leader[i+4]=Rightmerge(block[i]);
            Leftmove(block[i]);
            for(var j=0;j<4;j++)
            {
                style(block[i][j]);
            }
        }
        for(var i=0;i<leader.length;i++)
        {
            judge=leader[i]||judge
        }
        if(judge)
        {
            setTimeout(Create,100);
        }
        return leader[4]+leader[5]+leader[6]+leader[7]
    }

    //右键的函数
    function keyRight()
    {
        var leader=new Array();
        var judge=1;
        for(var i=0;i<4;i++)
        {
            leader[i]=Rightmove(block[i]);
            leader[i+4]=Leftmerge(block[i]);
            Rightmove(block[i]);
            for(var j=0;j<4;j++)
            {
                style(block[i][j]);
            }
        }
        for(var i=0;i<leader.length;i++)
        {
            judge=leader[i]||judge
        }
        if(judge)
        {
            setTimeout(Create,100);
        }
        return leader[4]+leader[5]+leader[6]+leader[7]
    }

    //下键的函数
    function keyDown()
    {
        var leader=false;
        var leader1=false;
        var sorce=0;
        for(var j=0;j<4;j++)
        {
            for(var i=0;i<3;i++)
            {
                if (block[i+1][j].innerHTML==""&& block[i][j].innerHTML!="")
                {
                    for(var z=i;z>=0;z--)
                    {
                        block[z+1][j].innerHTML=block[z][j].innerHTML;
                        block[z][j].innerHTML="";
                    }
                    leader=true;
                }
            }

            for(var i=3;i>0;i--)
            {

                if(block[i][j].innerHTML!="" && block[i][j].innerHTML==block[i-1][j].innerHTML)
                {
                    //alert(1);
                    block[i-1][j].innerHTML*=2;
                    block[i][j].innerHTML="";
                    i--;
                    leader1=true;
                    sorce++;
                }
            }

            for(var i=0;i<3;i++)
            {
                if (block[i+1][j].innerHTML==""&& block[i][j].innerHTML!="")
                {
                    for(var z=i;z>=0;z--)
                    {
                        block[z+1][j].innerHTML=block[z][j].innerHTML;
                        block[z][j].innerHTML="";
                    }
                }
            }
            for(var i=0;i<4;i++)
            {
                style(block[i][j]);
            }
        }
        if(leader||leader1)
        {
            setTimeout(Create,100);
        }
        return sorce;
    }

    //上键
    function keyUp()
    {
        var leader=false;
        var leader1=false;
        var sorce=0;
        for(var j=0;j<4;j++)
        {
            for(var i=3;i>0;i--)
            {
                if (block[i-1][j].innerHTML==""&& block[i][j].innerHTML!="")
                {
                    for(var z=i;z<=3;z++)
                    {
                        block[z-1][j].innerHTML=block[z][j].innerHTML;
                        block[z][j].innerHTML="";
                        leader=true;
                    }
                }
            }

            for(var i=0;i<3;i++)
            {

                if(block[i][j].innerHTML!="" && block[i][j].innerHTML==block[i+1][j].innerHTML)
                {
                    //alert(1);
                    block[i+1][j].innerHTML*=2;
                    block[i][j].innerHTML="";
                    i++;
                    leader1=true;
                    sorce++;
                }
            }

            for(var i=3;i>0;i--)
            {
                if (block[i-1][j].innerHTML==""&& block[i][j].innerHTML!="")
                {
                    for(var z=i;z<=3;z++)
                    {
                        block[z-1][j].innerHTML=block[z][j].innerHTML;
                        block[z][j].innerHTML="";
                    }
                }
            }
            for(var i=0;i<4;i++)
            {
                style(block[i][j]);
            }
        }
        if(leader || leader1)
        {
            setTimeout(Create,100);
        }
        return sorce;
    }


//判断是否需要移动的函数
function Leftmove(block)
{
    var leader=false;
    for(var i=3;i>=1;i--)
    {
        //console.log(block[i]);
        if (block[i-1].innerHTML==""&& block[i].innerHTML!="")
        {
            for(var j=i;j<4;j++)
            {
                block[j-1].innerHTML=block[j].innerHTML;
                block[j].innerHTML="";
            }
            leader=true;
            //console.log(leader);
        }
    }
    return leader;
}

function Rightmove(block)
{
    var leader=false;
    for(var i=0;i<=2;i++)
    {
        //console.log(block[i]);
        if (block[i+1].innerHTML==""&& block[i].innerHTML!="")
        {
            for(var j=i;j>=0;j--)
            {
                block[j+1].innerHTML=block[j].innerHTML;
                block[j].innerHTML="";
            }
            leader=true;
            //console.log(leader);
        }
    }
    return leader;
}

//合并
function Leftmerge(block)
{
    var leader=0;
    var i=3;
    while (i>=1)
    {
        if(block[i].innerHTML!="" && block[i].innerHTML==block[i-1].innerHTML)
        {
            block[i].innerHTML*=2;
            //alert(block[i-1].innerHTML);
            block[i-1].innerHTML="";
            i-=2;
            leader++;
        }
        i--;
    }
    return leader;
}

function Rightmerge(block)
{
    var leader=0;
    var i=0;
    while (i<=2)
    {
        if(block[i].innerHTML!="" && block[i].innerHTML==block[i+1].innerHTML)
        {
            block[i].innerHTML*=2;
            //alert(block[i+1].innerHTML);
            block[i+1].innerHTML="";
            i+=2;
            leader++;
        }
        i++;
    }
    return leader;
}


function gameover(block)
{
    for(var i=0;i<block.length;i++)
    {
        for(var j=0;j<block[i].length;j++)
        {
            if (block[i][j].innerHTML=="")
            {
                return false;
            }
            else if (j<block[i].length-1 && block[i][j].innerHTML==block[i][j+1].innerHTML)
            {
                return false;
            }
            else if (i<block.length-1 && block[i][j].innerHTML==block[i+1][j].innerHTML)
            {
                return false;
            }
        }
    }
    return true;
}


//重新开始

function  tryAgain(block)
{
    for(var i in block)
    {
        for(var j in block[i])
        {
            block[i][j].innerHTML="";
            style(block[i][j]);
        }
    }
    Begin();
}