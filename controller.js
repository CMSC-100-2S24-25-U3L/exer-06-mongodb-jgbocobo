import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

const Student = mongoose.model("Student", {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number 
}, 'studentData');

export const saveStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.json({ inserted: true });
    } catch (error) {
        res.json({ inserted: false });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const { fname, newFname, newLname } = req.body;

        if (!fname || (!newFname && !newLname)) {
            return res.json({ updated: false, message: "Provide a valid fname and at least one new value to update." });
        }

        const updateFields = {};
        if (newFname) updateFields.fname = newFname;
        if (newLname) updateFields.lname = newLname;

        const updateResult = await Student.updateOne(
            { fname: fname }, 
            { $set: updateFields }
        );

        res.json({ updated: updateResult.modifiedCount > 0 });
    } catch (error) {
        res.json({ updated: false, error: error.message });
    }
};


export const removeUser = async (req, res) => {
    try {
        const { stdnum } = req.body;
        const deleteResult = await Student.deleteOne({ stdnum });
        res.json({ deleted: deleteResult.deletedCount > 0 });
    } catch (error) {
        res.json({ deleted: false });
    }
};

export const removeAllUser = async (req, res) => {
    try {
        const deleteResult = await Student.deleteMany({});
        res.json({ deleted: deleteResult.acknowledged && deleteResult.deletedCount > 0 });
    } catch (error) {
        res.json({ deleted: false });
    }
};

export const getUserByStdnum = async (req, res) => {
    try {
        const { stdnum } = req.query;
        const user = await Student.find({ stdnum });
        res.json(user);
    } catch (error) {
        res.json([]);
    }
};

export const getAllMembers = async (req, res) => {
    try {
        const users = await Student.find({});
        res.json(users);
    } catch (error) {
        res.json([]);
    }
};