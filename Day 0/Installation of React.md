## Using the create-react-app command
# Change parameters according to your own files
- Following tutorialspoint method here

* Step 1 - install create-react-app
Browse through the desktop and install the Create React App using command prompt as shown below −

C:\Users\Tutorialspoint>cd C:\Users\Tutorialspoint\Desktop\
C:\Users\Tutorialspoint\Desktop>npx create-react-app my-app
This will create a folder named my-app on the desktop and installs all the required files in it.

Step 2 - Delete all the source files
Browse through the src folder in the generated my-app folder and remove all the files in it as shown below −

C:\Users\Tutorialspoint\Desktop>cd my-app/src
C:\Users\Tutorialspoint\Desktop\my-app\src>del *
C:\Users\Tutorialspoint\Desktop\my-app\src\*, Are you sure (Y/N)? y
Step 3 - Add files
Add files with names index.css and index.js in the src folder as −

C:\Users\Tutorialspoint\Desktop\my-app\src>type nul > index.css
C:\Users\Tutorialspoint\Desktop\my-app\src>type nul > index.js
In the index.js file add the following code

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
Step 4 - Run the project
Finally, run the project using the start command.

npm start
Run the Project at localhost:3000

