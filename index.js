/*
pseudocode
-Define async function sendReminder(email)
-Wait 5 seconds
-Log "Reminder sent to [email]"
-Call sendReminder for 3 different emails
*/
async function sendReminder(email) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder sent to ${email}`);
  }
  

  sendReminder("Kisanetshshay@gmail.com");
  sendReminder("Jecintawanjiru@gmail.com");
  sendReminder("Linnamondi@gmail.com");

/*psedocode
-Initialize attempt counter = 0
-Define function tryLogin()
-If attempt < 2
-Wait 1 second, increment attempt, reject promise
-Else if attempt == 2
-Wait 1 second, resolve promise (login successful)
-Else
-Log "Login failed after 3 attempts"
-Retry up to 3 times, log success or failure
*/
function tryLogin() {
    let attempts = 0;
  
    function attempt() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          attempts++;
          if (attempts < 3) {
            reject();
          } else {
            resolve();
          }
        }, 1000);
      });
    }
  
    function loginFlow() {
      attempt()
        .catch(attempt)
        .catch(attempt)
        .then(() => console.log("Login successful"))
        .catch(() => console.log("Login failed after 3 attempts"));
    }
  
    loginFlow();
  }
  
  tryLogin();


  /*pseudocode
-Set counter = 5
-Every second:
-Log counter
-Decrement counter
-If counter < 0, stop interval and log "Time's up!"
*/

let count = 5;
const intervalId = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(intervalId);
    console.log("Time's up!");
  }
}, 1000);



/*pseudocode
-Define async function loadPage()
-Log Loading header wait 1s
-Log "Loading content...", wait 2s
-Log "Loading footer...", wait 1s
-Log "Page fully loaded
*/

async function loadPage() {
  console.log("Loading header...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Loading content...");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Loading footer...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Page fully loaded");
}

loadPage();

/* pseudocode
-Define a function fetchPrice(symbol)
-Return a Promise that resolves after 2s with message "Price for [symbol] retrieved"
-Call fetchPrice for "AAPL" and "GOOG" in order using async/await, log results
*/


function fetchPrice(symbol) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Price for ${symbol} retrieved`);
      }, 2000);
    });
  }
  
  async function getPrices() {
    const price1 = await fetchPrice("AAPL");
    console.log(price1);
    const price2 = await fetchPrice("GOOG");
    console.log(price2);
  }
  
  getPrices();
