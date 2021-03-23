let _name= 'Tuyen';
// cau 1 2 Init Create
let movies= ['Harry Potter', 'Vuot nguc', 'Coco'];
console.log(movies);
movies.push('TomJerry');
console.log(movies);
let newItem= prompt('nhap vao ten 1 bo phim');
movies.push(newItem);
// cau 3 Read
let i= prompt('nhap vao stt bo phim ban muon xem ten');
console.log(movies[i]);
// cau 4 Update
movies[0]= prompt('nhap vao ten bo phim');
console,log(movies);
i= prompt('nhap vao stt bo phim ban muon doi ten');
while ( i> movies.length)
{
    i= prompt('nhap vao stt bo phim ban muon doi ten');
}
movies[i]= prompt('nhap ten phim thay the');
console.log(movies);
// cau 5 Delete
i= prompt('nhap vi tri phim ban muon xoa');
movies.splice(i,1);
console.log(movies);
// cau5.2 
i= prompt('nhap vi tri phim ban muon bat dau xoa');
let n= prompt('nhap so phim ban muon xoa');
movies.splice(i,n);
console.log(movies);
// cau 6 read all
{ for (i=0; i< movies.length;i++)
    console.log(movies[i]);
    console.log(i +". "+ movies[i]);
}
{
    let n= movies.length/2;
    for (i=0; i< movies.length;i++)
    console.log(movies[i]);
}
// cau 7 update all
{ for (i=0; i< movies.length;i++)
        console.log(movies[i], toLowerCase);
}
// cau 8 purpose of white
{
    i=prompt('nhap ten dang nhap cua ban')
    if (i.length> 15)
    {
        alert('too long');
    }
    else alert('good');
}
{
    let ktra= false;
    while (ktra= false)
    {
        i= prompt('How many legs does a spider have?\n 1.none \n 2.4 legs \n 3.8 legs \n 4.12 legs');   
        if (i=='none' || i==4 || i==12)
        {
            alert('Good luck next time');
            break;
        }
        else if (i==4)
        {
            alert('Bravo, you are correct');
            ktra= true;
            break;
        }
        else 
        {
            alert('again');
            break;
        }
    }  
}




