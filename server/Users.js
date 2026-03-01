require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./Model"); // adjust path as needed

const dummyUsers = [
  {
    name: "Arjun Sharma",
    rollNumber: "CS2024-01",
    email: "arjun.sharma@gmail.com",
    college: "IIT Madras",
    age: 20,
    subject1: { name: "Mathematics",      marksObtained: 92, totalMarks: 100 },
    subject2: { name: "Physics",          marksObtained: 88, totalMarks: 100 },
    subject3: { name: "Chemistry",        marksObtained: 76, totalMarks: 100 },
    subject4: { name: "English",          marksObtained: 85, totalMarks: 100 },
    subject5: { name: "Computer Science", marksObtained: 95, totalMarks: 100 },
    subject6: { name: "History",          marksObtained: 70, totalMarks: 100 },
    subject7: { name: "Biology",          marksObtained: 80, totalMarks: 100 },
  },
  {
    name: "Priya Patel",
    rollNumber: "CS2024-02",
    email: "priya.patel@gmail.com",
    college: "NIT Trichy",
    age: 21,
    subject1: { name: "Mathematics",      marksObtained: 55, totalMarks: 100 },
    subject2: { name: "Physics",          marksObtained: 48, totalMarks: 100 },
    subject3: { name: "Chemistry",        marksObtained: 60, totalMarks: 100 },
    subject4: { name: "English",          marksObtained: 72, totalMarks: 100 },
    subject5: { name: "Computer Science", marksObtained: 65, totalMarks: 100 },
    subject6: { name: "History",          marksObtained: 50, totalMarks: 100 },
    subject7: { name: "Biology",          marksObtained: 58, totalMarks: 100 },
  },
  {
    name: "Rahul Verma",
    rollNumber: "CS2024-03",
    email: "rahul.verma@gmail.com",
    college: "BITS Pilani",
    age: 22,
    subject1: { name: "Mathematics",      marksObtained: 30, totalMarks: 100 },
    subject2: { name: "Physics",          marksObtained: 45, totalMarks: 100 },
    subject3: { name: "Chemistry",        marksObtained: 50, totalMarks: 100 },
    subject4: { name: "English",          marksObtained: 60, totalMarks: 100 },
    subject5: { name: "Computer Science", marksObtained: 70, totalMarks: 100 },
    subject6: { name: "History",          marksObtained: 40, totalMarks: 100 },
    subject7: { name: "Biology",          marksObtained: 55, totalMarks: 100 },
  },
  {
    name: "Sneha Reddy",
    rollNumber: "CS2024-04",
    email: "sneha.reddy@gmail.com",
    college: "VIT Vellore",
    age: 20,
    subject1: { name: "Mathematics",      marksObtained: 98, totalMarks: 100 },
    subject2: { name: "Physics",          marksObtained: 95, totalMarks: 100 },
    subject3: { name: "Chemistry",        marksObtained: 92, totalMarks: 100 },
    subject4: { name: "English",          marksObtained: 90, totalMarks: 100 },
    subject5: { name: "Computer Science", marksObtained: 99, totalMarks: 100 },
    subject6: { name: "History",          marksObtained: 88, totalMarks: 100 },
    subject7: { name: "Biology",          marksObtained: 94, totalMarks: 100 },
  },
  {
    name: "Mohammed Imran",
    rollNumber: "CS2024-05",
    email: "imran.khan@gmail.com",
    college: "SRM University",
    age: 21,
    subject1: { name: "Mathematics",      marksObtained: 40, totalMarks: 100 },
    subject2: { name: "Physics",          marksObtained: 38, totalMarks: 100 },
    subject3: { name: "Chemistry",        marksObtained: 42, totalMarks: 100 },
    subject4: { name: "English",          marksObtained: 55, totalMarks: 100 },
    subject5: { name: "Computer Science", marksObtained: 60, totalMarks: 100 },
    subject6: { name: "History",          marksObtained: 45, totalMarks: 100 },
    subject7: { name: "Biology",          marksObtained: 50, totalMarks: 100 },
  },
];

const seedDB = async () => {
  try {
    // ✅ Connect first, then seed
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database connected");

    await User.deleteMany();
    console.log("🗑️  Cleared existing users");

    await User.insertMany(dummyUsers);
    console.log("✅ Dummy data inserted successfully");

  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    // ✅ Always close the connection when done
    await mongoose.connection.close();
    console.log("🔌 Connection closed");
  }
};

seedDB();