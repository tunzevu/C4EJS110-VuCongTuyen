// cau 1 variable swap
{
    let a=1;
    let b=2;
    console.log(a, b);
    [a,b]=[b,a];
    console.log(a, b);
}
{
    let a=1;
    let b=2;
    console.log(a, b);
    let temp;
    temp=a;
    a=b;
    b=temp;
    console.log(a, b);
}
//cau 2 split string into array
{
    var str='hello beauty there';
    var arr=str.split(" ");
    console.log(arr[0]);
}
//cau 3 three dots
{
    const a= [4,5,7,-8];
    console.log(...a);
}
//cau 4 clothes shop
{
    let shop= [jeans, t-shirt, socks];
    let task= prompt('Hi there, welcome to shop admin panel, what do you want(c,r,u,d)');
    if (task='c')
    {
        let item= prompt('name_newItem');
        shop.push(newItem);
        console.log(...shop);
        alert('done');
    }
    else if (task='r')
    {
        console.log(...shop);
    }
    else if (task='u')
    {
        let position= prompt('position_item');
        let newName= prompt('newName_item');
        if (position <= shop.length)
        {
            shop[position]= newName;
            console.log(...shop);
        }
        else alert('not supported');
    }
    else if (task='d')
    {
        let delPosition= prompt('enter the position you want to delete');
        shop.splice(delPosition, 1);
    }
    else alert('This command is not supported');
}
//cau 5
{
    let num= prompt('enter a sequence of numbers, separated by commas');
    let arr= num.split(",");
    console.log(...arr);
    let sum;
    for (let i=0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    alert(`the sum of them is ${sum}`);
}
//cau 6
{
    let num= prompt('enter a sequence of numbers, separated by commas');
    let arr= num.split(",");
    console.log(...arr);
    let min= arr[0];
    for (let i=0; i<arr.length; i++)
    {
        if (min > arr[i])
        {
            min= arr[i];
        }
    }
    alert(`so nho nhat ${min}`);
}
//cau 7
{
    const arr=[1,2,3,4,5];
    let i=0;
    let num= Number(prompt('enter a number'));
    if(num=!arr[i])
    {
        if (i< arr.length)
        {
            i++;
        }
        else alert('not found');
    }
    else alert (i);
}
//cau 8
{
    let mySheep=[30, 32, 39, 60, 100];
    let max= arr[0];
    let position=0;
    for (let i=0; i<mySheep.length; i++)
    {
        if (max < mySheep[i])
        {
            max= arr[i];
            position=i;
        }
    }
    alert(`kich thuoc con cuu lon nhat ${max}`);
    mySheep[position]=8;
}