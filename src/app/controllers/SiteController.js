const Course = require("../models/Course");
class SiteController {
  //[GET] /news
  search(req, res) {
    res.render("search");
  }

  //[GET] /news/:slug
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({ error: "ERROR" });
    //   }
    // });

    // Course.find({})
    //   .then(function (courses) {
    //     res.json(courses);
    //   })
    //   .catch(function (err) {
    //     next(err)
    //   });

    Course.find({})
    .then(courses =>{
      courses = courses.map(course=>course.toObject())
      res.render('home', {
        courses:courses
      })
    })
    .catch(next);

    //res.send('home');
  }
}

module.exports = new SiteController();
