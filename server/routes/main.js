const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * GET/
 *  Home Routes
 */
router.get("/", async (req, res) => {
  try {
    const locals = {
      title: "NodeJs Blog",
      description: "Simple Blog created with NodeJs, Express and MongoDB.",
    };

    // Pagination
    let perPage = 5;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.count();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: "/",
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * GET/
 * get - article by id
 */
router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "Simple Blog created with NodeJs, Express and MongoDB.",
      currentRoute: `/post/${slug}`,
    };

    res.render("post", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

/**
 * POST/
 *  post - searchTerm
 */
router.post("/search", async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description: "Simple Blog created with NodeJs, Express & MongoDB.",
    };
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });
    res.render("search", {
      data,
      locals,
    });
  } catch (error) {
    console.log(error);
  }
});

// GET Home Routes
// router.get('/', async (req, res) => {
//     const locals = {
//         title: 'NodeJs Blog',
//         description: 'Simple Blog created with NodeJs, Express and MongoDB.'
//     }
//     try {
//         const data = await Post.find();
//         res.render('index', {locals, data});
//     } catch (error) {
//         console.log(error);
//     }
// });

// function insertPostData() {
//     Post.insertMany([
//         {
//             title: "Building a Blog",
//             body: "This is the body"
//         },
//         {
//             title: "Building the Blog",
//             body: "This is the body of the Blog"
//         },
//     ])
// }
// insertPostData();

router.get("/about", (req, res) => {
  res.render("about", {
    currentRoute: '/about'

  });
});

module.exports = router;
