import React from 'react';

const MessageParser = ({ children, actions }) => {






  const routesDataString = sessionStorage.getItem('routes');
  const routesData = JSON.parse(routesDataString);
  const handleUserInput = (input) => {
    const filteredRoutes = routesData.map(route => extractPathsAndDescriptions(route));

    console.log(filteredRoutes);

    if(input ==='1' ||input ==='2'||input ==='0')
    {
    if (input === '1') {
      // Handle the user input outside of the API response
      // For example, store it in the session or perform some other action
      sessionStorage.setItem('sessionData', JSON.stringify(1));
      actions.handleApiResponse("now u can access the navigation information");

      return;
    }
   else if (input === '2' ) {
      // Handle the user input outside of the API response
      // For example, store it in the session or perform some other action
      sessionStorage.setItem('sessionData', JSON.stringify(2));

      actions.handleApiResponse("now u can access the data information");

      return;
    }
    else if (input === '0' ) {
      // Handle the user input outside of the API response
      // For example, store it in the session or perform some other action
      // const newData = { ...sessionData, userInput: input };
      sessionStorage.removeItem('sessionData');
      actions.handleApiResponse("u have formated the old history");


      return;
    }
  }
    else
    {

      const sessionData = JSON.parse(sessionStorage.getItem('sessionData'));

if(sessionData)
{
    // Send the user input to the API and get the response
    fetch('http://localhost:9000/chat/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prod: input ,version:sessionData,rout:filteredRoutes}),
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the API response and send it to the chatbot
        console.log(data);
        if(data==="error"|| data==="Error")
        {

          actions.handleApiResponse("Sorry it could not find try again!!");
        }

        else if(data==='Out of bounds' ||data==='Out of bounds.')
        {
          actions.handleApiResponse("Out of bounds Please try again.");
 
        }
        else
        {

          if(sessionData=='1'){
          const ptFor = getPtByPath(data,filteredRoutes);
// console.log(ptFor+"pt");
if(ptFor==null)
{
actions.handleApiResponse(data);
}else
{
         actions.handleApiResponse(`Well, you are navigating to the following URL: http://localhost:3000${ptFor}. Please copy and paste it into your browser.`);
         }         }
          else
          {
            actions.handleApiResponse(data);

          }

        }

        // Handle buttons in the response
        if (data.buttons) {
          actions.showButtons(data.buttons);
        }
      })
      .catch((error) => {
        console.error('Error sending user input to API:', error);
      });

    }
    else
    {
      actions.handleApiResponse("please select domin either 1 or 2");

    }
  }
  };



  
  function getPtByPathRecursive(entries, cleanedPath) {
    for (const entry of entries) {
      // Remove periods from the path in the current entry
      const entryCleanedPath = entry.path.replace(/\./g, '');
      
      // Check if the cleaned path matches
      if (entryCleanedPath === cleanedPath ) {
        return entry.pt; // Found a match, return "pt"
      }
      else if(entryCleanedPath === '')
      {
        return '';
      }
  
      // Check in the children recursively
      if (entry.children && entry.children.length > 0) {
        const ptInChildren = getPtByPathRecursive(entry.children, cleanedPath);
        if (ptInChildren) {
          return ptInChildren; // Found in children, return "pt"
        }
      }
    }
  
    // No match found

    return null;
  }
  
  // Function to get "pt" based on "path" after removing periods
  function getPtByPath(path,jsonData) {
    // Remove periods from the path
    const cleanedPath = path.replace(/\./g, '');
  
    // Call the recursive function starting from the top-level entries
    return getPtByPathRecursive(jsonData, cleanedPath);
  }


  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: handleUserInput,
          actions: {},
        });
      })}
    </div>
  );
};



function extractPathsAndDescriptions(route) {
  const result = {
    path: route.path,
    description: route.description || '',
    pt:route.pt || ''
  };

  if (route.children && route.children.length > 0) {
    result.children = route.children.map(child => extractPathsAndDescriptions(child));
  }

  return result;
}






export default MessageParser;
