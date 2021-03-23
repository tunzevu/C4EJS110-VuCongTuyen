// // let _name= 'Tuyen';

// // cau 1
// {
//     console.log('var va const la 2 keywords dung de khai bao bien tron JS');
//     console.log('var dung de khai bao bien toan cuc' + 'let dung de khai bao bien cuc bo');
//     console.log('bien duoc khai bao bang let co the thay doi gia tri' + 'bien duoc khai bao bang const khong thay doi duoc gia tri');
// }
// // cau 2
// {
//     console.log('Boolean la 1 kieu du kieu trong JS, cho ket qua la gia tri TRUE hoac FALSE');
// }
// // cau 3
// // cau 3a
// {
//     for (let n=0; n<7; n++)
//     {
//         console.log(n);
//     }
// }
// // cau 3b
// {
//     let n= prompt('nhap vao 1 so duong bat ki');
//     for (let n=0; n<7; n++)
//     {
//         console.log(n);
//     }
// }
// // cau 3c
// {
//     let n= prompt('nhap vao 1 so duong bat ki');
//     for (let x=3; x<7; x++)
//     {
//         console.log(x);
//     }
// }
// // cau 3d
// {
//     let c= prompt('nhap vao 1 so duong bat ki');
//     let n= prompt('nhap vao 1 so duong lon hon c');
//     for (let x=3; x<7; x++)
//     {
//         console.log(x);
//     }
// }
// cau 3e
{
    let c= prompt('nhap vao 1 so duong bat ki');
    let n= prompt('nhap vao 1 so duong lon hon c');
    for (let x=c; x<n; x+=3)
    {
        console.log(x);
    }
}
// cau 3f
// {
//     let c= prompt('nhap vao 1 so duong bat ki');
//     let n= prompt('nhap vao 1 so duong lon hon c');
//     let s= prompt('nhap vao gia tri buoc nhay');
//     for (let x=3; x<7; x+=s)
//     {
//         console.log(x);
//     }
// }
// // cau 4
// {
//     let n= prompt('nhao 1 so duong bat ki');
//     let tich=1;
//     for (let x=1; x<=n; x++)
//     {
//         tich *=x;
//     }
//     console.log(tich);
// }
// // cau 5
// {
//     let n= prompt('nhap vao so tuoi cua ban');
//     if (n<14) 
//     {
//         console.log('ban chua du so tuoi quy dinh');
//     }
//     else 
//     {
//         console.log('chao mung ban');
//     }
// }
// // cau 6
// {
//     let n=prompt('nhap vao 1 so tu nhien co gia tri tu 0 den 9');
//     if (n <=4 )
//     {
//         console.log('Lower half');
//     }
//     else if (n <9)
//     {
//         console.log('Higher half');
//     }
//     else 
//     {
//         console.log('gia tri ban nhap khong nam trong khoang tu 0 den 9');
//     }
// }
// // cau 7
// {
//     let n=prompt('nhap vao 1 so duong bat ki');
//     let x=prompt('nhap vao so duong nho hon n da nhap');
//     n= Math.ceil(n);
//     if (x<n)
//     {
//         console.log('Lower half');
//     }
//     else
//     {
//         console.log('Higher half');
//     }
// }
// // cau 8
// {
//     let n=prompt('nhap vao 1 so duong bat ki');
//     let x= n%2;
//     if (x=0)
//     {
//         console.log(n +'la so chan');
//     }
//     else 
//     {
//         console.log(n + 'la so le');
//     }
// }
// // cau 9
// //9a
// {
//     for (let i=1; i<=3; i++)
//     {
//         console.log('L');
//     }
//     for (i=1; i<=3; i++)
//     {
//         console.log('H');
//     }
// }
// // cau 9b
// {
//     let n=prompt('nhap vao 1 so duong bat ki');
//     let x= Math.ceil(n);
//     for (let i=1; i<x; i++)
//     {
//         console.log('L');
//     }
//     for (let i=x; i<n; i++)
//     {
//         console.log('H');
//     }
// }
// // cau 9c
// {
//     for (let i=1; i<4; i++)
//     {
//         console.log('0');
//         console.log('1');
//     }
// }
// // cau 9d
// {
//     let n= prompt('nhap vao so duong bat ki');
//     for (let i=1; i<=7n; i++)
//     {
//         if (i%2 == 1)
//         {
//             console.log('0');
//         }
//         else
//         {
//             console.log('1');
//         }
//     }
// }
// // cau 10
// {
//     let chieuCao=prompt('nhap chieu cao cua ban don vi cm');
//     let canNang= prompt('nhap can nang cua ban don vi kg');
//     let bmi= canNang/ (chieuCao*chieuCao);
//     if (bmi< 16)
//     {
//         console.log('qua gay');
//     }
//     else if (bmi<18.5)
//     {
//         console.log('gay');
//     }
//     else if (bmi<25)
//     {
//         console.log('can doi');
//     }
//     else if (bmi<30)
//     {
//         console.log('beo');
//     }
//     else 
//     {
//         console.log('qua beo')
//     }
// }