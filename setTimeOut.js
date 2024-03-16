/* Set Timeout */
console.log("Blocking code which is executed first and then moves to next line")
setTimeout(() => {   //non-blocking code which is added into queue 
    console.log("Takes 2 sec to show the console");
}, 2000);


/* Clear Timeout */

async function scheduledatafetching(){
    let fetchdata;
    fetchdata = setTimeout(() => {
        console.log("Clear timeout");
    }, 2000);
    //logic if logic fails we can stop the timeout that has been added in queue by using clearTimeout
    let apicall = true;
    if(apicall == false)
    {
       clearTimeout(fetchdata);
    }

}

scheduledatafetching();


/* Set Interval */

function getValue(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        return resolve(true);
      }, 2000);
    })
}
const id = setInterval(getStatus,2000); //executes the function getstatus() until clearInterval() is called

async function getStatus(){
  let status = await getValue();        
  if(status==true)
  {
    console.log("completed");
    clearInterval(id);
  }
}

getStatus();

/* Clear Interval */