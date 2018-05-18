<h1>DelosHR Management Web Application</h1>

<h2>Software Design Documentation<h2>

Server located at http://www.github.com/tylerpcarter/DATIS-Server

<h3>Introduction<h3>

    This software design document serves to provide a detailed narrative outlining a general purpose and intended audience for this web application, as well as to cover in-depth each software technology used in its creation. 

<h3>Design Problem</h3>

    For years, Delos, creator and provider of Westworld, the world's most immersive entertainment experience, has sought to obtain a HR system able to track employee data such as current and past salaries, deductions, and monetary bonuses. The DelosHR Management application fills the gap and delivers. New employees can also be added to DelosHR Management swiftly, providing management the ultimate solution to employee oversight.


<h3>Technologies Used</h3>

        VS Code ---- v1.23.1
        NodeJs ----- v10.1.0
        MySQL ------ v15.1.0
        MariaDB ---- v10.2.14
        Sequel Pro - v1.1.2
        Postman ---- v6.0.10
        Sequelize -- v4.0.0
        npm -------- v5.6.0
        Angular ---- v6.0.0
        UIKit ------ v3.0.0
        Git -------- v2.17.0

<h3>Getting Started<h3>

    To run this project,

    1. Clone github.com/tylerpcarter/DATIS-Client and github.com/tylerpcarter/DATIS-Server, cd into both directories
    2. Run npm install in each
    3. In node_modules/uikit/src/scss/components/utility.scss, comment out the selector  on line 355
    4. ng serve



<h3>Software Use</h3>

    Keeping in mind that this web application would be used to implement CRUD by allowing a user to add/edit/view employees in a database, I decided to design a backend using NodeJS, MySQL, and MariaDB. NodeJS serves as a JavaScript run-time environment that executes JavaScript code server-side on an event-driven, non-blocking I/O model. This keeps the server-side logic lightweight. MariaDB is the fastest growing database technology, known for it's purpose as a secure drop-in replacement for MySQL. Sequel Pro allowed me to visualize the database and quickly generate test tables and fields/rows. Postman is an API Development Testing Environment, which is an invaluable resource for testing the correct implementation of a RESTful API. The API was created using Sequelize, a promise-based ORM for NodeJS, which also supports MariaDB. I used npm, a package manager, as well as Angular6 for my client-side logic. Angular6, a JavaScript framework, is heralded for many features, including interpolation, two-way databinding, and componentalization. 

<h3>What Does DelosHR Management Do?</h3>

    Allows the user to add/edit/view a list of  
    employees

    Allows each employee to have a base salary,
    and number of deductions, and a take-home 
    salary at a glance, calculated by (base 
    salary +  bonuses) - deductions.

<h3>How Does It Do It?</h3>

    The web application is structured by components and services. If every "object" and collection of "objects" in the project can be thought of as a component, then you'd have an employees, employee, bonuses, bonus, salaries, salary, deductions, and deduction component. These objects clearly have a structured relationship with each other; since every employee can have multiple salaries, bonuses, and deductions, those three respective components can be thought of as child components to the employee component. And much like a salaries component would be the parent of a single salary component, the employees component would be a parent component of a single employee component.

    This fundamental relationship is crucial to grasp to understand the way in which we can pass data between components. By using @Input() or @Output() and EventEmitter, we can easily pass data between parent and child. This allows for much greater control over an individual salary in a collection of salaries that belong to a single employee; without componentalization, it would ve very difficult in our HTML to access a single salary when implementing CRUD. With the component architecture, we can easily pass an exact salary via its id up through it's parent salaries component, where CRUD is more easily implemented on the DOM.

    It's also worth noting here that Angular grants access to *ngFor and *ngIf, two directives that save loads of time and energy. Using *ngFor, HTML tags can be generated on the fly based on a component/class array. For example, if the employees collection has three individual employees, then using the <li *ngFor="let employee of employees"></li> tag would generate as many list items as there are employees (three) in the array employees.

<h3>Design Philosophies</h3>

    DelosHR Management Should Have:

    Exceptional separation between UI and API.

    A proper way of structuring the           
    management of data. A MVVM framework is 
    taken advantage of to deliver a separation 
    of business logic from the View layer, 
    allowing bindings to be created to the 
    ViewModel. It's worth mentioning here that 
    Angular6 fits in perfectly with this model, 
    given that Angular performs data 
    manipulation directly on the DOM, while 
    other frameworks like Vue perform 
    manipulation on the virtual DOM.

    RESTful API incorporating HTTP GET, POST,
    PUT, and DELETE requests.


<h3>Responsive Design</h3>

    DelosHR Management was also designed with responsiveness a top priority. No matter the device, the app will transform and shape elegantly on any view. Components resize and data is presented/witheld in order to accomplish industry gold-standard responsive design. This was accomplished by using UIkit an open source css framework.

<br>
<hr>
<h2>The App</h2>

<h3>Homepage</h3>

    The landing page of DelosHR Management provides links to an about me page, where you can learn more about the creator the the application. Also on the homepage are some flavor items inspired by HBO's Westworld. Also on the homepage, a welcome card directs users to the employees database, where they can "use" the application.

<h3>Employees Collection</h3>

    When a user follows the employees tab on the top corner of the homepage, or follows the welcome card, they will find the employees collection. This page displays a list of all employees in the DelosHR Management system. For quick access, users may use the search bar to quickly access specific employee(s).

<h3>Adding a New Employee</h3>

    To add an employee into the DelosHR Management database, a user can click the button located under the search bar on the employees collection page. This button will take the user to the create new employee section, where they can create an employee.

    Once the user is in the new employee section, the user will have the ability to input a new employee's First Name, Last Name, and Role/Occupation. Once these fields have been completed, the new employee will be saved into the database. It's also here that information such as salaries, bonuses, or deductions can be entered. It's worth noting that from here on out, the user can visit the employee via the employees collection and create/edit/delete anything pertaining to the employee. 

<h3>Take Home Pay</h3>

    This web app calculates an employee's take home pay by subtracting all deductions belonging to that employee from the total between the employee's current salary and any bonuses they've earned. At the moment, I am proud to present that a user is able to create deductions that are both a percentage out of an employee's current salary as well as fixed amount deduction.

<h3>404: Page Not Found<h3>

    DelosHR Management's 404: Page Not Found won't look like anything to users. Don't worry; the Hosts won't recognize it either.


<h3>Still under 3D Construction<h3>

    Just as Delos's hosts are always advancing, DelosHR Management has no roof. Current developments in evolutionary progress include:
    
    Accessibility => 

    DelosHR Management believes in a world where everyone is able to experience life to the fullest and have free. Features to be implemented include and are not limited to catering to the visually impaired (such as maintaining a high degree on component color contrast, implementing scalable content, and/or incorporating full ARIA practices) and those who are dependent on keyboard control only (tab indexing, arrow key maneuverability, and enter/space control).

    Take Home Pay =>

    The ability to store bonuses and deductions granted for a given year would ideally be implemented so that take home pay would be calculated only with the deductions and bonuses entered for the same year as that employee's current salary. At the moment, the take home pay is calculated by grabbing all deductions and bonuses in the database.

    Styling =>

    While I believe the styling of the web app is sharp and responsive, there is always room for improvement to be made. With some extra time, I set out to allow users to upload an employee profile picture. This has not been fully implemented. For the time being, any new employee that isn't a part of the premade employees will have a default image. There are also some minor tweaks to be made with placing the button that deletes an employee on the single employee view page.