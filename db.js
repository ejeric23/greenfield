const mysql = require("mysql");
const Sequelize = require("sequelize");


const db = new Sequelize("test", "user", "pass", {
  host: "192.168.99.100",
  port: 3306,
  dialect: "mysql"
});

// const db = new Sequelize('DB_CONNECTION://DB_USERNAME@DB_HOST:DB_PORT/DB_DATABASE');

db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:");
  });

const User = db.define("User", {
  id: { 
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  personality: Sequelize.STRING,
});

const Post = db.define("Post", {
  postid: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  date: Sequelize.DATE,
  post: Sequelize.TEXT,
  mood: Sequelize.STRING,
  postedBy: Sequelize.INTEGER
});

// const Personality = db.define("Personality", {
//   personality: Sequelize.STRING
// });

User.sync();
Post.sync()
// Personality.sync(); 
 
 
exports.User = User;
exports.Post = Post;
// exports.Personality = Personality;
