// cau 1
let movies={title: "keke", year: "1998", rate: "8.4"};
// {
//     // cau 2
//     console.log(movies.title);
//     console.log(movies["title"]);
//     let search= prompt('nhap vao ten thuoc tinh');
//     if (movies.search== null || movies.search== undefined)
//     {
//         alert('khong ton tai');
//     }
//     else alert(movies.search);
// }
//     // cau 3
// {
//     movies.rate= 8.7;
//     movies.rate+= 0.5;
//     let search= prompt('ban muon cap nhat thuoc tinh nao');
//     if (movies.search== null || movies.search== undefined)
//     {
//         alert('khong ton tai');
//     }
//     else
//     {
//         let _update= prompt('ten moi cua thuoc tinh');
//         movies.search= _update;
//     }
// }
// // cau 4
{
    let search= prompt('ban muon cap nhat thuoc tinh nao');
    if (movies.search== undefined)
    {
        let _add= prompt('thuoc tinh chua ton tai, ban co muon them tt nay k');
        if (_add!= null)
        {
            movies.search= _add;
        }
    }
    else
    {
        let _update= prompt('ten moi cua thuoc tinh');
        movies.search.push(_update);
    }
}
// cau 5
{
    let movie0 = {title:'phim0', year: 1905, rate: 9.0};
    let movie1 = {title:'phim1', year: 1998, rate: 9.8};
    let movie2 = {title:'phim2', year: 2000, rate: 8.8};
    let movie3 = {title:'phim3', year: 2000, rate: 8.0};
    let listM = [movie0, movie1, movie2, movie3];
    console.log(listM[0]);
    console.log(listM[listM.length-1].title);
    for (let x in listM) 
    {
        console.log(listM[x]);
    }
    console.log(listMo[listM.length-1].rate +=0.7);
}
// cau 7
{
    let movie0 = {title:'phim0', year: 1905, rate: 9.0,
                    cas: ['dv0', 'dv1', 'dv2']};
    let movie1 = {title:'phim1', year: 1998, rate: 9.8,
                    cas: ['dv0', 'dv1', 'dv2']};
    let movie2 = {title:'phim2', year: 2000, rate: 8.8,
                    cas: ['dv0', 'dv1', 'dv2']};
    let movie3 = {title:'phim3', year: 2000, rate: 8.0,
                    cas: ['dv0', 'dv1', 'dv2']};
    let listM = [movie0, movie1, movie2, movie3];
    for(let x of listM)
    {
        console.log(x.title);
        console.log(x.year);
        console.log(x.rate);
        console.log(x.Cast);
    }
}