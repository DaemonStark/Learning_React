# Using the create-react-app command
### Change parameters according to your own files
- Following tutorialspoint method here follow accordingly.

* Step 1 - install create-react-app
Browse through the desktop and install the Create React App using command prompt as shown below − <br>
<br>
C:\Users\Tutorialspoint>cd C:\Users\Tutorialspoint\Desktop\   <br>
C:\Users\Tutorialspoint\Desktop>npx create-react-app my-app   <br>
This will create a folder named my-app on the desktop and installs all the required files in it.    <br>
<br>
* Step 2 - Delete all the source files
Browse through the src folder in the generated my-app folder and remove all the files in it as shown below −  <br>
<br>
C:\Users\Tutorialspoint\Desktop>cd my-app/src       <br>
C:\Users\Tutorialspoint\Desktop\my-app\src>del *    <br>
C:\Users\Tutorialspoint\Desktop\my-app\src\*, Are you sure (Y/N)? y  <br>
<br>
* Step 3 - Add files
Add files with names index.css and index.js in the src folder as −  <br>
<br>
C:\Users\Tutorialspoint\Desktop\my-app\src>type nul > index.css    <br>
C:\Users\Tutorialspoint\Desktop\my-app\src>type nul > index.js     <br>
In the index.js file add the following code   <br>

import React from 'react';  <br>
import ReactDOM from 'react-dom';   <br>
import './index.css';   <br>
Step 4 - Run the project    <br>
Finally, run the project using the start command.     <br>
npm start   <br>
* Run the Project at localhost:3000

