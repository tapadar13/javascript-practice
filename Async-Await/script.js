// --------------- Promise & Promise Chaining ---------------

function makeRequest(location) {
  return new Promise(function (resolve, reject) {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says Hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise(function (resolve, reject) {
    console.log("Processing response");
    resolve(`Extra information + ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => console.log(error));

// --------------- Async-Await ---------------
async function doRequest() {
  try {
    const response = await makeRequest("Google");
    console.log("Response received");
    const data = await processRequest(response);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

doRequest();
