import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <p>
        {" "}
        This is a web application built using MongoDB, Express.js, React.js, and
        Node.js. Here's a description for a MERN stack app with CRUD
        functionality:
        <p>
          Description: The MERN Stack CRUD Application is a full-stack web
          application that allows users to perform CRUD (Create, Read, Update,
          Delete) operations on a collection of items. The application is built
          using the MERN stack, which comprises MongoDB as the database,
          Express.js as the backend framework, React.js as the frontend library,
          and Node.js as the runtime environment.
        </p>
        <p>
          Features: 1. Create: Users can create new items by filling out a form
          and submitting it. The data is then stored in the MongoDB database. 2.
          Read: Users can view a list of existing items retrieved from the
          MongoDB database. Each item is displayed with its details, such as
          title, description, and other relevant information. 3. Update: Users
          can edit the details of existing items by clicking on an edit button
          next to each item. This opens a form pre-filled with the item's
          current details, allowing users to make changes and save them back to
          the database. 4. Delete: Users can delete items from the database by
          clicking on a delete button next to each item. This removes the item
          from the list and deletes its record from the database.
        </p>
        <p>
          Technologies Used:
          <p> MongoDB: NoSQL database used to store item data.</p>
          <p>
            {" "}
            Express.js: Backend framework for handling HTTP requests, routing,
            and middleware.
          </p>
          <p>
            {" "}
            React.js: Frontend library for building interactive user interfaces.
          </p>
          <p>
            {" "}
            Node.js: Runtime environment for executing JavaScript code on the
            server.
          </p>
          <p>
            {" "}
            Mongoose: MongoDB object modeling tool used to define schemas and
            interact with the database.
          </p>
          <p>
            {" "}
            Axios: Promise-based HTTP client for making AJAX requests from the
            frontend to the backend.
          </p>
          <p> Bootstrap: Frontend framework for styling and layout.</p>
        </p>
        <p>
          Purpose: The purpose of the MERN Stack CRUD Application is to
          demonstrate how to build a full-stack web application using popular
          technologies such as MongoDB, Express.js, React.js, and Node.js. It
          serves as a practical example of implementing CRUD operations in a
          real-world application and showcases the capabilities of each
          component of the MERN stack.
        </p>
        Usage: Users can interact with the application through a user-friendly
        web interface. They can perform CRUD operations on items, visualize
        changes in real-time, and experience a seamless and responsive user
        experience thanks to the modern technologies used in the application's
        development.
      </p>
    </div>
  );
};

export default About;
