<h1 font-size ="35px">PEAk PERFORMANCE MOBILE APP</h1>
# By Meron G. Tekie,

### A mobile application friendly with both ios and android systems,built to calculate the calories burned and distance covered within 24 hour of frame time.

## 🖥️ Technologies Used


<img src="https://github.com/devicons/devicon/tree/v2.15.1/icons/xcode" width="35" height="35"/> <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width="35" height="35"/> <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="35" height="35"/> <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="35" height="35"/><br>
<img src="https://github.com/devicons/devicon/blob/v2.15.1/icons/react/react-original-wordmark.svg" width="35" height="35"/><br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" width="35" height="35"/><br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" width="35" height="35"/><br>

## ✅ Description

The Peak Performance app is built using react-native library/framework.It can run on both ios and android systems.It uses an expo-motion sensor called Pedometer to count the number of steps using motion.The API gives access to the motion sensors of your device and perform a calculation based on the motion of your device.

## ⚙️ Setup/Installation Requirements

- First, make sure you have MySql Workbench downloaded and properly installed. You will also need a text editor(Vscode Highly recommended) and a command-line

- In your command line navigate to your desktop directory and clone this project <https://github.com/MeronTekie/local-business-api.git>
- In the root directory, confirm there is a .gitignore file

- Make sure to ignore sensitive data/file so they do not get pushed to remote repository
- Add:

  ```
  */obj/
  */bin/
  */appsettings.json
  ```

- Create an appsetting.json file at the root directory
- Open the appsetting.json file and enter:

- To create the database please do as follows:

  - First create a file at the root of the project directory called "appsettings.json" and add the following code to connect your project to the local database,

  ```
      {
        "ConnectionStrings": {
          "DefaultConnection": "Server=localhost;Port=3306;database=[your_database];uid=[Your ID];pwd=[Your Password];"
        }
      }
  ```

- Make sure the following packages are restored or type the following in the Project directory.
  - `dotnet add package Microsoft.EntityFrameworkCore -v 5.0.0`
  - `dotnet add package Pomelo.EntityFrameworkCore.MySql -v 5.0.0-alpha.2`
  - `dotnet add package Microsoft.EntityFrameworkCore.Proxies -v 5.0.0`
  - `dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore -v 5.0.0`
- Then do the following accordingly in your terminal to update and connect your project to your local database :
  - `dotnet restore`
  - `dotnet build`
  - `dotnet ef migrations add Initial`
- Once we have verified that the migration looks correct and made any necessary changes, we'll run the following commands:

  - `dotnet ef database update`
  - `dotnet run`

- The above code will create a new database in your local host with tables designed to store information related to the project.

- To interact with the local host website navigate to the project directory and run `dotnet run`or `dotnet watch run`
- Click on <http://localhost:5001/> and you will be directed to the Swagger UI which is very user friendly and easy to walk through.
- The image below is the expected page when you run it on your local browser.

<img src ="LocalBusinessApi/img/swagger.png" width="100%" height="400">

## Known Bugs 🐛

- No known Bugs

## License

[MIT License](LICENSE).
Copyright (c) 2022 <br>Meron G.Tekie
