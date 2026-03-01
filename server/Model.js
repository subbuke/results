const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    rollNumber: {
      type: String,
      required: [true, "Roll number is required"],
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    college: {
      type: String,
      required: [true, "College is required"],
      trim: true,
    },

    age: {
      type: Number,
      min: [16, "Age must be at least 16"],
      max: [100, "Age must be below 100"],
    },

    // ── Subjects ──────────────────────────────────────────

    subject1: {
      name: { type: String, default: "Subject 1" },
      totalMarks: { type: Number, default: 100 },
      marksObtained: { type: Number, min: 0, max: 100, default: 0 },
      grade: { type: String },
      percentage: { type: Number },
    },

    subject2: {
      name: { type: String, default: "Subject 2" },
      totalMarks: { type: Number, default: 100 },
      marksObtained: { type: Number, min: 0, max: 100, default: 0 },
      grade: { type: String },
      percentage: { type: Number },
    },

    subject3: {
      name: { type: String, default: "Subject 3" },
      totalMarks: { type: Number, default: 100 },
      marksObtained: { type: Number, min: 0, max: 100, default: 0 },
      grade: { type: String },
      percentage: { type: Number },
    },

    subject4: {
      name: { type: String, default: "Subject 4" },
      totalMarks: { type: Number, default: 100 },
      marksObtained: { type: Number, min: 0, max: 100, default: 0 },
      grade: { type: String },
      percentage: { type: Number },
    },

    subject5: {
      name: { type: String, default: "Subject 5" },
      totalMarks: { type: Number, default: 100 },
      marksObtained: { type: Number, min: 0, max: 100, default: 0 },
      grade: { type: String },
      percentage: { type: Number },
    },

    subject6: {
      name: { type: String, default: "Subject 6" },
      totalMarks: { type: Number, default: 100 },
      marksObtained: { type: Number, min: 0, max: 100, default: 0 },
      grade: { type: String },
      percentage: { type: Number },
    },

    subject7: {
      name: { type: String, default: "Subject 7" },
      totalMarks: { type: Number, default: 100 },
      marksObtained: { type: Number, min: 0, max: 100, default: 0 },
      grade: { type: String },
      percentage: { type: Number },
    },

    // ── Overall Results ───────────────────────────────────

    totalMarksObtained: { type: Number },
    totalMarks: { type: Number, default: 700 },
    overallPercentage: { type: Number },
    overallGrade: { type: String },
    status: {
      type: String,
      enum: ["Pass", "Fail", "Pending"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;