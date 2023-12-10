const {Router}=require('express'); //Router is for traveeling to different routes taken in the url
const controller=require('./controller')
const router=Router();

 router.get('/',controller.getstudents);
 router.post('/',controller.addStudent);
router.get('/:id',controller.getstudentsById)
router.delete('/:id',controller.removeStudent);
router.put('/:id',controller.updateStudent);

module.exports=router;