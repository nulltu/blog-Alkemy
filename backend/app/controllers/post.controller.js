const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Post
  const post = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    category: req.body.category
  };

  // Save Post in the database
  Post.create(post)
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Post."
      });
    });
};

// exports.findAll = (req, res) => {
//   Post.findAll()
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while finding all posts."
//       })

//     })
// }

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Post.findByPk(id)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: "Error retrieving post with id=" + id
//     })
//   })
// }

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Post.destroy({
//     where: {id: id}
//   })
//   .then(num =>{
//     if(num == 1){
//       res.send({
//         message: "Post deleted"
//       })
//     }else {
//       res.send({
//         message: `Cannot delete post with id=${id}. Maybe post was not found`
//       })
//     }
//   })
// }

// exports.deleteAll = (req, res) => {
//   Post.destroy({
//     where: {},
//     truncate: false
//   })
//   .then(nums =>{
//     res.send({ message:
//        `${nums} Posts were deleted successfully`  
//     })
//   })
// }

// exports.updateById = (req, res) => {
//   const id = req.params.id;
  
//   Post.update(req.body, {
//     where: {id: id}
//   })
//   .then(num => {
//     if(num == 1){
//       res.send({
//         message: 'Post was successfully updated.'
//       })
//     }else {
//       res.send({
//         message: `Cannot update Post with id ${id}. Maybe Post was not found`
//       })
//     }
//   })

// }

