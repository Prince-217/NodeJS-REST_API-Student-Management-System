import Student from "../models/studentModel.js"

export const createStudent = async (req, res) => {
    try {
        
        if (Array.isArray(req.body)) {
            const students = await Student.insertMany(req.body);
            return res.status(201).json({
                success: true,
                message: `${students.length} students added successfully`,
                data: students
            });
        }

        const { name, email, phone, city, category } = req.body;

        const student = await Student.create({
            name,
            email,
            phone,
            city,
            category
        })

        const result = student.toObject()

        res.status(201).json({
            success: true,
            message: "Student created Successfully.",
            data: result
        })

    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to add student',
            error: err.message
        });
    }
}

export const getStudents = async (req, res) => {
    try {
        const { search, city, category, sort, page = 1, limit = 10 } = req.query;

        let query = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } }
            ]
        }

        if (city) {
            query.city = { $regex: new RegExp('^' + city + '$', 'i') };
            // query.city = city
        }

        if (category) {
            query.category = { $regex: new RegExp('^' + category + '$', 'i') };
            // query.category = category;
        }

        let sortOption = {};

        if (sort === 'asc') {
            sortOption.name = 1;
        } else if (sort === 'desc') {
            sortOption.name = -1;
        }

        const pageNum = parseInt(page, 10) || 1;
        const limitNum = parseInt(limit, 10) || 10;
        const skip = (pageNum - 1) * limitNum;

        const students = await Student.find(query).sort(sortOption).skip(skip).limit(limitNum);
        const total = await Student.countDocuments(query);

        res.status(200).json({
            success: true,
            message: "Students retrieved successfully...!!",
            count: students.length,
            total,
            totalPages: Math.ceil(total / limitNum),
            currentPage: pageNum,
            data: students
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: err.message
        });
    }
}

export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};


export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,         // Return the updated document
                runValidators: true // Run schema validators on update
            }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Student updated successfully',
            data: student
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to update student',
            error: error.message
        });
    }
};


export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Student deleted successfully',
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};
