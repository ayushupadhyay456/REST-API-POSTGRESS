const pool=require('../../db') //For calling the created database
const queries=require('./queries')
const getstudents=(req,res)=>
{
    pool.query(queries.getstudents,(error,results)=>
    {
        if(error) throw error; //error handling
        res.status(200).json(results.rows); //status 200 means everything is okay and to send the result
    })

}

const getstudentsById=(req,res)=>
{
    const id=parseInt(req.params.id);
    pool.query(queries.getstudentsById,[id],(error,results)=>
    {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent=(req,res)=>
{
    const {name,email,age,dob}=req.body;


    //check if email exists
    pool.query(queries.checkEmailExists,[email],(error,results)=>
    {
        if(results.rows.length)
        {
            res.send("Email already exists");
        }
        //add student to database
        pool.query(queries.addStudent,[name,email,age,dob],(error,results)=>
        {
            if(error) throw error;
            res.status(201).send("Student Created Successfully");
        })
    })

}

const removeStudent=(req,res)=>
    {
        const id=parseInt(req.params.id);
        pool.query(queries.getstudentsById,[id],(error,results)=>
        {
            const noStudentFound=!results.rows.length;
            if(noStudentFound){
            res.send("Student does not exist in database");
            }
            pool.query(queries.removeStudent,[id],(error,results)=>
            {
                if(error) throw error;
                res.status(201).send("Student Deleted Successfully");
            })
        }

)
}

    const updateStudent=(req,res)=>
    {
        const id=parseInt(req.params.id);
        const {name}=req.body;
        pool.query(queries.getstudentsById,[id],(error,results)=>
        {
            const noStudentFound=!results.rows.length;
            if(noStudentFound){
            res.send("Student does not exist in database");
            }
            pool.query(queries.updateStudent,[name,id],(error,results)=>
            {
                res.status(200).send("Student Updated Successfully")
            })
        }
        
        
        )
    }

module.exports={
    getstudents,
    getstudentsById,
    addStudent,
    removeStudent,
    updateStudent,
}