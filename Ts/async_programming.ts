function tast1(){
    console.log(`tast 1`);
}

function tast2(){
    console.log(`tast 2`);
}

tast1();
tast2();

//async programming
function tast11(){
    setTimeout(()=>{
        console.log(`tast 11`);
    }, 1000);
}

function tast22(){
    console.log(`tast 22`);
}

tast11();
tast22();

//promises
const fetchData = (value: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
       if(value) {
        setTimeout(() => {
            resolve(`Data fetched successfully`);
        }, 2000);
       } else {
        reject('Error found');
       }
    });
}

fetchData(true)
.then((data) => {
    console.log('success: ', data);
    // return 'get more data'; // chaining promises
    fetchData(true).then((data1) => {
        console.log(data1);
    }).catch((error1)=>{
        console.log(error1);
    })
})
.then((moreData) => {
    console.log('more data: ', moreData);
})
.catch((error) => {
    console.log('failure: ', error);
});

//promise asyn await try catch

async function fetchDataNew(value: boolean): Promise<String> {
    return 'data fetched';
}

fetchDataNew(true)
.then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

async function getData(): Promise<void>{
    try{
        const data = fetchDataNew(true);
        const data11 = await fetchDataNew(false);
    } catch(error){
        console.log(error);
    } 
}

// working with api using fetch

interface Post{
    userId: string;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
    
   try{
     const respone = await fetch('https://jsonplaceholder.typicode.com/posts');
    //json data
    const posts: Post[] = await respone.json();
    //console.log(posts);
    
    return posts;
   }catch(error: any){
    console.log(error);
    throw new Error(error);
    //throw(error);
   }
    
}

fetchPosts()
.then((data) => {
   // console.log('Posts: ',data);
})
.catch((error) => {
    console.log(error);
});

//Concurrent promises with promise.alt
async function tast111(){
    console.log("tast 1");
    return 'tst111';
}

async function tast222(){
    console.log("tast 222");
    return 'tst222';
}


async function ftcData(): Promise<[string, string]>{
    const [data1, data2] = await Promise.all([
        tast111(),
        tast222()
    ]);

    return [data1, data2];
}

ftcData()
.then(data => {
    console.log('promise all exec: ',data);
})
.catch(error => {
    console.log(error);
});
