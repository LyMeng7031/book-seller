// // src/seed/seedAdminUser.ts
// import dotenv from "dotenv";
// import bcrypt from "bcryptjs";
// import { UserModel } from "../models/User"; // ✅ use relative import
// import mongoose from "mongoose";

// dotenv.config();

// // Connect to MongoDB
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

// export const seedAdminUser = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("✅ Connected to MongoDB");

//     // Check for existing admin
//     const existingAdmin = await UserModel.findOne({
//       $or: [
//         { email: process.env.EMAIL_ADMIN },
//         { userName: process.env.USER_NAME_ADMIN },
//         { fullName: process.env.FULL_NAME_ADMIN },
//       ],
//     });

//     if (existingAdmin) {
//       existingAdmin.role = "admin";
//       existingAdmin.password = await bcrypt.hash(process.env.PASSWORD_ADMIN!, 10);
//       await existingAdmin.save();
//       console.log("♻️ Admin user updated");
//     } else {
//       const hashedPassword = await bcrypt.hash(process.env.PASSWORD_ADMIN!, 10);

//       const adminUser = new UserModel({
//         firstName: process.env.FIRST_NAME_ADMIN || "Admin",
//         lastName: process.env.LAST_NAME_ADMIN || "User",
//         userName: process.env.USER_NAME_ADMIN,
//         fullName: process.env.FULL_NAME_ADMIN,
//         age: 30,
//         email: process.env.EMAIL_ADMIN,
//         password: hashedPassword,
//         role: "admin",
//       });

//       await adminUser.save();
//       console.log("✅ Admin user seeded successfully");
//     }

//     await mongoose.disconnect();
//     console.log(" MongoDB disconnected");
//   } catch (error) {
//     console.error("❌ Error seeding admin user:", error);
//   }
// };

// // Run seeding when file is executed directly
// if (require.main === module) {
//   seedAdminUser();
// }
