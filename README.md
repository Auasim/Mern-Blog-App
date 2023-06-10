# MERN-BLOG-APP

<p align="center">
  <a href="https://wild-puce-catfish-tam.cyclic.app" rel="noopener">
 <img width=400px  src="blog-logo.png" alt="Project logo"></a>
</p>
https://wild-puce-catfish-tam.cyclic.app

<h3 align="center">Project Title</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)


## 🧐 About <a name = "about"></a>
The Blog App is a web application designed to provide users with a platform for creating, managing, and sharing blog posts. It offers a user-friendly interface for both content creators and readers, allowing them to engage with the blogging community.

The main features of the Blog App include:

User Registration and Authentication: Users can sign up for an account and securely log in to access the app's functionalities. Authentication ensures that only authorized users can create, edit, and delete their blog posts.

Create and Publish Blog Posts: Authenticated users can compose and publish their own blog posts. They can add a title, write the content using a rich text editor, and include images, videos, or other multimedia elements to enhance their posts.

Categorize and Tag Posts: Users can categorize their blog posts into different topics or genres, making it easier for readers to navigate and discover content based on their interests. Additionally, they can assign relevant tags to their posts to improve searchability.

Commenting and Discussion: Readers can leave comments on blog posts to engage in discussions with the authors or other readers. This fosters a sense of community and encourages interaction between users.

Search and Filtering: The Blog App provides search functionality, allowing users to search for specific blog posts or topics of interest. They can also apply filters to refine their search results based on categories, tags, or publication dates.

User Profiles and Social Sharing: Each user has a profile page where their published blog posts and relevant information are displayed. Users can share blog posts on social media platforms to reach a wider audience and promote their content.

The Blog App is built using a combination of technologies, including MongoDB as the database for storing blog post data, Express.js as the server framework, Vue.js for the web front-end, and Node.js as the server environment.

With its intuitive interface and robust features, the Blog App aims to provide a seamless and enjoyable blogging experience for both content creators and readers.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
Before getting started, ensure that you have the following prerequisites installed:

You need to install
* [MongoDB](https://www.mongodb.com/cloud/atlas/register)
* [ExpressJs](https://expressjs.com/)
* [React Js](https://legacy.reactjs.org/)
* [Nodejs](https://nodejs.org/en/download)
* [VS code](https://code.visualstudio.com/download)

For Testing API
[Post Man](https://www.postman.com/downloads/)

For Designing
* [Material UI](https://mui.com/)

### Installing
A step by step series of examples that tell you how to get a development env running.

## Installation

Create React App Available Scripts In the project directory, you can run:

npm start Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

npm test Launches the test runner in the interactive watch mode. See the section about running tests for more information.

npm run build Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

IntelliJ IDEA Community Edition: These instructions will help you build IntelliJ IDEA Community Edition from source code, which is the basis for IntelliJ Platform development. The following conventions will be used to refer to directories on your machine:

<USER_HOME> is your home directory. <IDEA_HOME> is the root directory for the IntelliJ source code. Getting IntelliJ IDEA Community Edition Source Code IntelliJ IDEA Community Edition source code is available from github.com/JetBrains/intellij-community by either cloning or downloading a zip file (based on a branch) into <IDEA_HOME>. The default is the master branch.

The master branch contains the source code which will be used to create the next major version of IntelliJ IDEA. The branch names and build numbers for older releases of IntelliJ IDEA can be found on the page of Build Number Ranges.

These Git operations can also be done through the IntelliJ IDEA user interface.

Speed Tip: If the complete repository history isn't needed then using a shallow clone (git clone --depth 1) will save significant time.

On Windows: Two git options are required to check out sources on Windows. Since it's a common source of Git issues on Windows anyway, those options could be set globally (execute those commands before cloning any of intellij-community/android repositories):

git config --global core.longpaths true git config --global core.autocrlf input IntelliJ IDEA Community Edition requires additional Android modules from separate Git repositories. To clone these repositories, run one of the getPlugins scripts located in the <IDEA_HOME> directory. These scripts clone their respective master branches. Make sure you are inside the <IDEA_HOME> directory when running those scripts, so the modules get cloned inside the <IDEA_HOME> directory.

getPlugins.sh for Linux or macOS. getPlugins.bat for Windows. Note: Always git checkout the intellij-community and android Git repositories to the same branches/tags.

Building IntelliJ Community Edition Version 2023.1.1 or newer of IntelliJ IDEA Community Edition or IntelliJ IDEA Ultimate Edition is required to build and develop for the IntelliJ Platform.

Opening the IntelliJ Source Code for Build Using IntelliJ IDEA File | Open, select the <IDEA_HOME> directory.

If IntelliJ IDEA displays an error about a missing or out of date required plugin (e.g. Kotlin), enable, upgrade, or install that plugin and restart IntelliJ IDEA. IntelliJ Build Configuration It's recommended to use JetBrains Runtime 17 to compile the project. When you invoke Build Project for the first time, IntelliJ IDEA should suggest downloading it automatically. If the Maven plugin is disabled, add the path variable "MAVEN_REPOSITORY" pointing to <USER_HOME>/.m2/repository directory. Make sure you have at least 8GB of RAM on your computer. With the bare minimum of RAM, disable "Compile independent modules in parallel" option in the compiler settings. With notably more memory available, increase "User-local build process heap size" to 3000 - that will greatly reduce compilation time. Note that it is important to use the variant of JetBrains Runtime without JCEF. So, if for some reason jbr-17 SDK points to an installation of JetBrains Runtime with JCEF, you need to change it: ensure that IntelliJ IDEA is running in internal mode (by adding idea.is.internal=true to idea.properties file), navigate to jbr-17 item in Project Structure | SDKs, click on 'Browse' button, choose 'Download...' item and select version 17 and vendor 'JetBrains Runtime'.

Building the IntelliJ Application Source Code To build IntelliJ IDEA Community Edition from source, choose Build | Build Project from the main menu.

To build installation packages, run the installers.cmd command in <IDEA_HOME> directory. installers.cmd will work on both Windows and Unix systems.

Options to build installers are passed as system properties to installers.cmd command. You may find the list of available properties in BuildOptions.kt

Examples (./ should be added only for Linux/macOS):

Build installers only for current operating system: ./installers.cmd -Dintellij.build.target.os=current Build source code incrementally (do not build what was already built before): ./installers.cmd -Dintellij.build.incremental.compilation=true installers.cmd is used just to run OpenSourceCommunityInstallersBuildTarget from the command line. You may call it directly from IDEA, see run configuration Build IDEA Community Installers (current OS) for an example.

Dockerized Build Environment To build installation packages inside a Docker container with preinstalled dependencies and tools, run the following command in <IDEA_HOME> directory (on Windows, use PowerShell): docker run --rm -it -v 
(docker build -q . --target build_env)

Running IntelliJ IDEA To run the IntelliJ IDEA built from source, choose Run | Run from the main menu. This will use the preconfigured run configuration "IDEA".

To run tests on the build, apply these setting to the Run | Edit Configurations... | Templates | JUnit configuration tab:

Working dir: <IDEA_HOME>/bin VM options: -ea You can find other helpful information at https://www.jetbrains.com/opensource/idea. The "Contribute Code" section of that site describes how you can contribute to IntelliJ IDEA.

Running IntelliJ IDEA on CI/CD environment To run tests outside of IntelliJ IDEA, run the tests.cmd command in <IDEA_HOME> directory. tests.cmd will work on both Windows and Unix systems.

Options to run tests are passed as system properties to tests.cmd command. You may find the list of available properties in TestingOptions.kt

Examples (./ should be added only for Linux/macOS):

Build source code incrementally (do not build what was already built before): ./tests.cmd -Dintellij.build.incremental.compilation=true Run a specific test: ./tests.cmd -Dintellij.build.test.patterns=com.intellij.util.ArrayUtilTest tests.cmd is used just to run CommunityRunTestsBuildTarget from the command line. You may call it directly from IDEA, see run configuration tests in community for an example.


⚙️ Running the tests
<img width=100%  src="Blog App .png" alt="Project logo">
![Create-Page.png](https://github.com/Auasim/Mern-Blog-App/blob/main/Register-Page.png)
![Register-Page.png](https://github.com/Auasim/Mern-Blog-App/blob/main/Register-Page.png)
![login-Page.png](https://github.com/Auasim/Mern-Blog-App/blob/main/Create-Page.png)


## Configuration
- Create a `.env` file in the root directory.
- Add any required configuration variables, such as API keys or database connections.
1. PORT = 
2. DEV_MODE = 
3. MONGO_URL = "mongodb+srv://username:<password>@cluster.mongodb.net/<appname>?retryWrites=true&w=majority"

```
## 🎈 Usage <a name="usage"></a>
1. Access the application at `http://localhost:8000` in your browser.
2. [Provide instructions or examples on how to use the application.]
## 🚀 Deployment <a name = "deployment"></a>
For deployment First you have to install github desktop link bellow
- [GitHub Desktop](https://desktop.github.com/)
- Create a repository on github
- Run the command in VS code `npm run build` It will make the static build folder
- When You Complete all the processes
- Go to the [Cyclic](https://www.cyclic.sh/) portal for deployment , It is used for full stack deployment


## ⛏️ Built Using <a name = "built_using"></a>
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://legacy.reactjs.org/docs/getting-started.html) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
