# Qatar_Assignment_React
Author (Mohammed Sohail)

### GitHub repo to be cloned : https://github.com/9005/Qatar_Assignment_React.git 
### Pull the main branch which is upto date with Assignment. 

## Available Scripts

In the project directory, you can run:

### `npm install` (download dependencies)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Some Instructions for Assignment worked, Person (B Mohammed Sohail)`

Layout --> Build using html5 and css3(Grids) which is Responsive for all devices.
Sections --> Two column layout with SideBar and Content Section.
         --> One column layout for devices 768px and less
Unit tests --> Written using jest and React testing library.
logic --> JavScript, ES6, React JS

Flow of Assingment is as follows : 
 * On load api call is triggered to fetch user details and display in Fixed Side Bar
   and by default Dashboard section in displayed
 * Nav Links of Dashboard and Blogs are provided for navigation
 * Blogs Link click displays posts of User with clickable list items
 * OnClick of list item displays page to edit and save details
 * Delete button --> reset the text in form back to previous and deletes edited text
 * Single Static Image is used for understanding purpose as response is dynamic its not possible to mock images(please co-operate)
 * inline stylo used if element needs only one or two properties maximum
 * css file has all stylo related stuff

 Imp Note : `I have redirected user back to Blog section after succeesfull completion
            of saving the edited details`

 * Responsive UI : Desktop, Tablet , Mobile devices
 * API used are below
   https://jsonplaceholder.typicode.com/users/1
   https://jsonplaceholder.typicode.com/users/1/posts
   https://jsonplaceholder.typicode.com/posts/1

 * SideNavBar.test.js --> test written to fetch user details displayed in Fixed Side Bar.

 * Github repo link : https://github.com/9005/Qatar_Assignment_React.git
