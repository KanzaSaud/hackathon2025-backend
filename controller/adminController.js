// // controller/adminController.js
// import Admin from "../model/adminModel.js";
// import bcrypt from "bcryptjs";

// export const adminSignup = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const existing = await Admin.findOne({ username });
//     if (existing) return res.status(400).json({ message: "Username already taken." });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newAdmin = new Admin({ username, password: hashedPassword });

//     await newAdmin.save();
//     res.status(200).json({ message: "Admin registered successfully." });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const adminLogin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const admin = await Admin.findOne({ username });
//     if (!admin) return res.status(400).json({ message: "Invalid username." });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid password." });

//     res.status(200).json({ message: "Login successful." });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



// controller/adminController.js
import Admin from "../model/adminModel.js"; // Your Mongoose model
import bcrypt from "bcrypt";

// Signup controller
export const adminSignup = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Admin.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: "Admin account created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login controller
export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
