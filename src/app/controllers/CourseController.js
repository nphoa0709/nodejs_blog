const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongooseHelper');
class CourseController { 

    //[GET] /courses/:slug
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
        .then(course=>{
            //course = course.toObject();

            res.render('courses/show', {
                //course;
                course: mongooseToObject(course)
            });
        })
        .catch(next);
        //res.send('detail')
    }
    //[GET] /courses/create
    create(req, res, next){
       res.render('courses/create')
    }
    //[GET] /courses/store
    store(req, res, next){         
       //res.json(req.body);
       const formData = req.body;
       formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`; 
      
       const course = new Course(formData);
       course.save()
       .then(()=>res.redirect('/'))
       .catch(error=>{
       })    
    }
}

module.exports = new CourseController;