const fs=require('fs');
const filePath="./tasks.json";
const command=process.argv[2];
const argument=process.argv[3];

const save=(newData)=>{
    const content=JSON.stringify(newData)

    fs.writeFileSync(filePath,content)
}


const loadTask=()=>{
    try {
        const buffer=fs.readFileSync(filePath);
        const dataJSON=buffer.toString();
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
}
const addTask=(task)=>{
    const tasks=loadTask()
    tasks.push(task);
    save(tasks);
    console.log("task added", task);

}
const listTask=()=>{
    const list=loadTask();
    list.forEach((entity,index) => {
        console.log(`${index +1}-`,` ${entity}`);
        
    });
};
const removeTask=(taskid)=>{
    const list=loadTask();
    list.splice(taskid-1,1);
    save(list);
    console.log("tsak removed");
    listTask();

};


if(command === 'add')
    addTask(argument)
else if(command ==='list')
    listTask()
else if(command === 'remove')
    removeTask(parseInt(argument))
else {
    console.log("command not found");
}