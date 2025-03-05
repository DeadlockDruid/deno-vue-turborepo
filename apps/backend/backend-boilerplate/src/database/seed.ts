import db from "./index.ts";
import { tasks } from "./schema/task-schema.ts";

// Define sample data
const taskData = [
  { name: "Complete documentation", done: false },
  { name: "Review PRs", done: true },
  { name: "Fix database migrations", done: false },
];

// Insert sample data into the database
async function seedDatabase() {
  console.log("Seeding database...");
  await db.insert(tasks).values(taskData);
  console.log("Database seeded successfully!");
}

seedDatabase().catch((error) => {
  console.error("Error seeding database: ", error);
});
