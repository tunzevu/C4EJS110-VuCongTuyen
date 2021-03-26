// // cau 1
// {
// const product = {
//         name: 'Xiaomi rice cooker',
//         price: 1700,
//         brand: 'Xiaomi',
//         color: 'white',
//     };
//     for (let x in product) 
//     {
//         console.log(x +":"+ product[x]);
//     }
// }
// cau 2
{
    const task = 
    {
        subject: 'Implement login feature',
        createdBy: 'Hoang Ngoc Duc',
        assignTo: 'Nguyen Phuong Nam',
        dueDate: '2019-10-08T18:00:24+0000',
        expectedHours: 0.5,
    };
    let {subject, dueDate, assignTo} = task;
    console.log(subject);
    console.log(dueDate);
    console.log(assignTo);
    for (let x in task)
    {
        console.log(x +":"+ task[x]);
    }
}
