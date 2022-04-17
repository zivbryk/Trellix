# Trellix - Task Management App

## Made with React.js, Node.js & MongoDB

Kanban-style task management board app inspired by trello.com
</br>
Production link - <a href="https://trellix.herokuapp.com/board/6252d734234b9f922408738a/" target="_blank">Trellix Project</a>

Manage projects and tasks using a kanban board. A board contains lists and tasks. Usually each project is a board, and the lists and cards are the tasks and subjects to do in the project. Users can modify the board and change list and card locations using Drag & Drop.

<img alt="main-view" src="https://user-images.githubusercontent.com/81034083/163719085-0175b16a-73d0-49f0-8701-fdae192cf310.png">

<h2>Application Features</h2>

<ul>
    <li>Create Boards and manage projects </li>
    <li>Craete, remove, and update lists</li>
    <li>Drag & Drop lists and task cards in a board</li>
    <li>Create, remove & edit tasks</li>
    <li>Manage members, lables, due date, attachments, activity and comments in each task</li>
    <li>Get notifications when actions are done on your tasks</li>
    <li>Search and filter cards based on lables, members and free text</li>
    <li>Archive tasks and view the archived tasks</li>
    <li>Change the background of your board with the Unsplash Photo API</li>
    <li>View project analytics in the dashboard </li>
  </ul>
  
  <h2>Application Demo </h2>
  <ul>
    <li><a href="https://trellix.herokuapp.com/board/6252d734234b9f922408738a/" target="_blank"> Trello Project</a></li>
    </ul>
    </br>
    <h2> Technology Stack </h2>
Technology stack used for this app: MERN - MongoDB, Express, React, Node.js. 
</br> 
<!-- The app uses webSockets to update the board in real-time , without the need to refresh the page to get updates.  -->
</br>
<!-- The API calls to the backend are done with the REST API method, and we used middlewares to authenticate and authorize actions. -->

<h2>Getting Started</h2> 
1. Head to my  <a href="https://github.com/zivbryk/Trellix" target="_blank"> Trellix Repository</a> and clone the project or download the files. 
</br>

```
git clone https://github.com/zivbryk/Trellix.git
```

2. Enter the backend folder and make sure you have node_modules installed.Initiate the server with 'npm start'

```
cd backend
npm i
npm start
```

You should get a console output that the server is up and running at port 3030

3. Enter the frontend folder and repeat the same process.

```
cd frontend
npm i
npm start
```

You should get a console output that the server is up and running at localhost:3000.

the app will be up and running at localhost:3000 on your browser. enjoy!

   <h2>Showcase</h2>

   <h3>Board Main View</h3>
   <img alt="main-view" src="https://user-images.githubusercontent.com/81034083/163719085-0175b16a-73d0-49f0-8701-fdae192cf310.png">
   </br>

<h3>Task Card Details</h3>
   <img  alt="card-details" src="https://user-images.githubusercontent.com/81034083/163719607-8ad0027e-9b95-4869-bd2c-fe635eeb9b86.png">
     </br>

 <!-- <h3>Quick Edit</h3>
<img alt="preview-edit" src="https://user-images.githubusercontent.com/81368377/124360203-31af1c80-dc31-11eb-843a-f105babe6796.png">
  </br> -->

  <!-- <h3>Menu</h3>
  <img alt="menu" src="https://user-images.githubusercontent.com/81368377/124360226-51464500-dc31-11eb-88d1-66f163117d58.png">
  </br> -->

  <!-- <h3>Filter</h3>
<img width="1440" alt="filter" src="https://user-images.githubusercontent.com/81368377/124360252-6a4ef600-dc31-11eb-9d15-f51d6a98c382.png">
</br> -->

<h3>Dashboard</h3>
<img width="1007" alt="dashboard" src="https://user-images.githubusercontent.com/81034083/163720423-4648930b-7b86-4292-93b4-f9abff857967.png">

<h3>Change Background</h3>
<img width="1435" alt="background" src="https://user-images.githubusercontent.com/81034083/163720325-29f779f4-6710-414f-9135-d2c5b8cb381f.png">
</br>
