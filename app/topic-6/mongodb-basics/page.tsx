'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function MongoDBBasicsPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="MongoDB Basics & CRUD Operations"
      intro="Learn MongoDB fundamentals from scratch! Understand what MongoDB is, how it organizes data, and master CRUD operations (Create, Read, Update, Delete) with hands-on examples."
      toc={[
        { href: "#what-is-mongodb", label: "What is MongoDB?" },
        { href: "#mongo-shell", label: "MongoDB Shell" },
        { href: "#database-basics", label: "Database & Collections" },
        { href: "#insert", label: "Adding Data (Create)" },
        { href: "#read", label: "Finding Data (Read)" },
        { href: "#update", label: "Updating Data (Update)" },
        { href: "#delete", label: "Deleting Data (Delete)" },
      ]}
    >
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/topic-6')}
          className="flex items-center gap-1.5 text-xs sm:text-sm shrink-0"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="whitespace-nowrap">Back to Topic 6</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/topic-6/mongodb-setup')}
          className="text-xs sm:text-sm shrink-0"
        >
          <span className="whitespace-nowrap">MongoDB Setup</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/topic-6/mongodb-nodejs')}
          className="text-xs sm:text-sm shrink-0"
        >
          <span className="whitespace-nowrap">MongoDB with Node.js</span>
        </Button>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-6">
        <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
          Before You Start
        </p>
        <p className="text-sm text-muted-foreground">
          Make sure you have MongoDB installed! If you haven&apos;t set it up yet, check out the <button onClick={() => router.push('/topic-6/mongodb-setup')} className="text-primary underline">MongoDB Setup Guide</button> first.
        </p>
      </div>

      <LessonSection id="what-is-mongodb" title="What is MongoDB?">
        <p className="text-muted-foreground mb-4">
          Before we dive into MongoDB, let&apos;s understand what a database is. A <strong>database</strong> is simply a place where we store information in an organized way so we can find it later. Think of it like a digital filing cabinet for your application.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Understanding NoSQL vs SQL
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            There are two main types of databases:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><strong>SQL Databases</strong> (like MySQL, PostgreSQL): Store data in tables with fixed columns and rows, like Excel spreadsheets. You need to define the structure upfront.</li>
            <li><strong>NoSQL Databases</strong> (like MongoDB): Store data in flexible formats. MongoDB uses a format similar to JavaScript objects, making it very natural for web developers.</li>
          </ul>
        </div>

        <p className="text-sm font-semibold mb-2">How MongoDB Organizes Data</p>
        <p className="text-muted-foreground mb-3">
          MongoDB uses three main concepts to organize data:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm font-semibold mb-1">1. Documents</p>
            <p className="text-sm text-muted-foreground">
              A <strong>document</strong> is a single record, like one user&apos;s information or one product. It&apos;s written in JSON format (the same format as JavaScript objects). Each document can have different fields.
            </p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm font-semibold mb-1">2. Collections</p>
            <p className="text-sm text-muted-foreground">
              A <strong>collection</strong> is a group of related documents, like all users or all products. Think of it as a folder containing similar documents.
            </p>
          </div>

          <div className="bg-muted/50 p-3 rounded-md">
            <p className="text-sm font-semibold mb-1">3. Databases</p>
            <p className="text-sm text-muted-foreground">
              A <strong>database</strong> contains multiple collections. For example, an e-commerce app might have a database with collections for users, products, and orders.
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold mb-2">Visual Example</p>
        <CodeBlock
          language="javascript"
          code={`// This is what a document looks like
// It's just like a JavaScript object!
{
  _id: "507f1f77bcf86cd799439011",    // Every document gets a unique ID
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  hobbies: ["reading", "coding"],     // Arrays work perfectly
  address: {                           // You can nest objects too!
    city: "New York",
    country: "USA"
  }
}

// Multiple documents form a collection
// Collection name: "users"
// Documents: [user1, user2, user3, ...]`}
        />

        <div className="mt-4 bg-muted/50 p-4 rounded-md">
          <p className="text-sm font-semibold mb-2">Why MongoDB is Perfect for Beginners</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Uses JSON format - if you know JavaScript objects, you already understand MongoDB documents</li>
            <li>No need to plan your entire database structure before starting</li>
            <li>Easy to add new fields to documents without affecting existing data</li>
            <li>Works seamlessly with Node.js and Express</li>
            <li>Free to use and widely adopted in the industry</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection id="mongo-shell" title="MongoDB Shell (mongosh)">
        <p className="text-muted-foreground mb-3">
          The MongoDB Shell is an interactive JavaScript interface for MongoDB. It allows you to query and manipulate data directly from your terminal.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Starting the MongoDB Shell:</p>
          <CodeBlock
            language="bash"
            code={`# Start MongoDB Shell (local installation)
mongosh

# Or connect to MongoDB Atlas (cloud)
mongosh "mongodb+srv://username:password@cluster.mongodb.net/"`}
          />
        </div>

        <p className="text-sm text-muted-foreground mb-3">
          Once connected, you&apos;ll see a prompt where you can execute MongoDB commands. The shell provides tab completion and command history for easier navigation.
        </p>
      </LessonSection>

      <LessonSection id="database-basics" title="Database and Collection Basics">
        <p className="text-muted-foreground mb-4">
          Now that MongoDB is installed, let&apos;s learn how to create and work with databases and collections. Don&apos;t worry - it&apos;s simpler than it sounds!
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Important Concept: Lazy Creation
          </p>
          <p className="text-sm text-muted-foreground">
            MongoDB doesn&apos;t actually create databases or collections until you add data to them. So when you &quot;create&quot; a database, you&apos;re really just telling MongoDB &quot;I want to work with this database&quot;. It only gets created when you insert your first document.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Step 1: Creating/Switching to a Database</p>
            <p className="text-muted-foreground text-sm mb-3">
              The <code>use</code> command tells MongoDB which database you want to work with. If it doesn&apos;t exist, MongoDB will remember the name and create it when you add data.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Tell MongoDB you want to work with a database called "schoolDB"
use schoolDB

// MongoDB will create "schoolDB" when you insert your first document

// To see all your databases
show dbs

// To see which database you're currently using
db`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Step 2: Understanding Collections</p>
            <p className="text-muted-foreground text-sm mb-3">
              A collection is like a folder that holds similar documents. For example, in a school database, you might have a &quot;students&quot; collection, a &quot;teachers&quot; collection, and a &quot;courses&quot; collection.
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              The cool thing about MongoDB is that you don&apos;t usually need to create collections explicitly. When you insert your first document into a collection, MongoDB creates it automatically!
            </p>
            <CodeBlock
              language="javascript"
              code={`// This will automatically create a "students" collection if it doesn't exist
db.students.insertOne({ 
  name: "John", 
  age: 20, 
  major: "Computer Science" 
})

// To see all collections in your current database
show collections

// If you want to create an empty collection manually (rarely needed)
db.createCollection("teachers")`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Quick Reference Commands</p>
            <CodeBlock
              language="javascript"
              code={`// Show all databases
show dbs

// Switch to a database
use myDatabase

// Show current database
db

// Show all collections in current database
show collections

// Delete a database (be careful!)
db.dropDatabase()

// Delete a collection
db.myCollection.drop()`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Viewing Data</p>
            <CodeBlock
              language="javascript"
              code={`// View all documents in a collection
db.students.find()

// Pretty-print output for better readability
db.students.find().pretty()`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="insert" title="Adding Data (Insert Operations)">
        <p className="text-muted-foreground mb-4">
          Now comes the fun part - adding data to your database! In MongoDB, we call this <strong>&quot;inserting&quot;</strong> documents. Think of it like adding new entries to your collection.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            What Happens When You Insert?
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            When you insert a document, MongoDB does two important things:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>It saves your document to the collection</li>
            <li>It automatically creates a unique <code>_id</code> field if you don&apos;t provide one (this is like a serial number for your document)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Method 1: Inserting One Document at a Time</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>insertOne()</code> when you want to add a single document. This is like adding one student&apos;s information to your school database.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Let's add a student to our students collection
db.students.insertOne({
  name: "Sarah Johnson",
  age: 20,
  major: "Computer Science",
  email: "sarah@university.edu"
})

// MongoDB responds with something like:
// {
//   acknowledged: true,
//   insertedId: ObjectId("507f1f77bcf86cd799439011")
// }
// The insertedId is the unique ID MongoDB created`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Method 2: Inserting Multiple Documents at Once</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>insertMany()</code> when you have multiple documents to add. This is more efficient than calling <code>insertOne()</code> multiple times. Notice how we put the documents in an array <code>[]</code>.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Add multiple students in one go
db.students.insertMany([
  { 
    name: "Mike Chen", 
    age: 21, 
    major: "Mathematics",
    email: "mike@university.edu"
  },
  { 
    name: "Emily Davis", 
    age: 19, 
    major: "Physics",
    email: "emily@university.edu"
  },
  { 
    name: "Raj Patel", 
    age: 22, 
    major: "Engineering",
    email: "raj@university.edu"
  }
])

// MongoDB responds with:
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("..."),
//     '1': ObjectId("..."),
//     '2': ObjectId("...")
//   }
// }
// Each document gets its own unique ID`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Understanding the _id Field</p>
            <p className="text-sm text-muted-foreground mb-3">
              Every document in MongoDB must have a unique <code>_id</code> field. If you don&apos;t provide one, MongoDB automatically creates an ObjectId for you. You can also provide your own:
            </p>
            <CodeBlock
              language="javascript"
              code={`// MongoDB creates the _id automatically
db.students.insertOne({
  name: "Alex",
  age: 23
})
// Result: { _id: ObjectId("..."), name: "Alex", age: 23 }

// Or provide your own _id
db.students.insertOne({
  _id: "STUDENT001",
  name: "Jordan",
  age: 24
})
// Result: { _id: "STUDENT001", name: "Jordan", age: 24 }`}
            />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm text-green-900 dark:text-green-300 mb-1">Try It Yourself!</p>
          <p className="text-sm text-muted-foreground">
            Open your MongoDB shell and try inserting a few documents about your favorite books or movies. Practice using both <code>insertOne()</code> and <code>insertMany()</code>!
          </p>
        </div>
      </LessonSection>

      <LessonSection id="read" title="Finding Data (Read Operations)">
        <p className="text-muted-foreground mb-4">
          Now that you&apos;ve added data, you need to be able to find it again! In MongoDB, we use <strong>&quot;find&quot;</strong> operations to search for and retrieve documents. Think of it like using a search function or filter in any app.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            How Finding Works
          </p>
          <p className="text-sm text-muted-foreground">
            When you search for documents, you provide a <strong>query</strong> (search criteria) in the form of a JavaScript object. MongoDB then returns all documents that match your criteria. If you don&apos;t provide any criteria, it returns everything!
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Finding All Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              The simplest query is to find everything in a collection. Just use <code>find()</code> with no parameters:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Get ALL students
db.students.find()

// This returns everything! Like selecting all rows in a spreadsheet

// To make it easier to read, add .pretty()
db.students.find().pretty()

// To get just ONE document (any random document)
db.students.findOne()`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Finding Specific Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              Usually, you don&apos;t want ALL documents - you want specific ones. Pass an object with the fields you want to match:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Find all students studying Computer Science
db.students.find({ major: "Computer Science" })

// Find all 20-year-old students
db.students.find({ age: 20 })

// Find a specific student by name
db.students.findOne({ name: "Sarah Johnson" })

// You can match multiple fields - ALL must match!
db.students.find({ major: "Computer Science", age: 20 })`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Using Comparison Operators</p>
            <p className="text-muted-foreground text-sm mb-3">
              Sometimes you need more than exact matches. MongoDB has special operators that start with <code>$</code> for comparing values:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Find students OLDER than 20
db.students.find({ age: { $gt: 20 } })      // $gt = greater than

// Find students 20 or older
db.students.find({ age: { $gte: 20 } })     // $gte = greater than or equal

// Find students younger than 25
db.students.find({ age: { $lt: 25 } })      // $lt = less than

// Find students between 20 and 22 (inclusive)
db.students.find({ 
  age: { $gte: 20, $lte: 22 }               // $lte = less than or equal
})

// Find students NOT studying Engineering
db.students.find({ major: { $ne: "Engineering" } })  // $ne = not equal

// Find students in specific majors
db.students.find({ 
  major: { $in: ["Computer Science", "Mathematics", "Physics"] }
})  // $in = any of these values`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Quick Reference: Comparison Operators</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><code>$gt</code> — Greater than (&gt;)</p>
              <p><code>$gte</code> — Greater than or equal (≥)</p>
              <p><code>$lt</code> — Less than (&lt;)</p>
              <p><code>$lte</code> — Less than or equal (≤)</p>
              <p><code>$eq</code> — Equal to (=)</p>
              <p><code>$ne</code> — Not equal (≠)</p>
              <p><code>$in</code> — Matches any value in an array</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Combining Conditions with Logical Operators</p>
            <p className="text-muted-foreground text-sm mb-3">
              Sometimes you need more complex searches. MongoDB has logical operators like AND and OR:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Find students who are Computer Science majors AND over 20
db.students.find({
  $and: [
    { major: "Computer Science" },
    { age: { $gt: 20 } }
  ]
})

// Actually, you can write AND conditions more simply:
db.students.find({
  major: "Computer Science",
  age: { $gt: 20 }
})  // Multiple fields = automatic AND!

// Find students who are EITHER in Physics OR Mathematics
db.students.find({
  $or: [
    { major: "Physics" },
    { major: "Mathematics" }
  ]
})  // At least one condition must be true`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Selecting Specific Fields (Projection)</p>
            <p className="text-muted-foreground text-sm mb-3">
              Sometimes you don&apos;t need all the information from a document - just specific fields. This is called <strong>projection</strong>. It&apos;s like choosing which columns to display in a spreadsheet.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Get ONLY the names and emails (hide everything else)
db.students.find(
  {},                              // First parameter: search criteria (empty = all)
  { name: 1, email: 1, _id: 0 }   // Second parameter: which fields to show
)
// 1 = include this field
// 0 = exclude this field
// Result: Only name and email are returned

// Get everything EXCEPT the age
db.students.find({}, { age: 0 })

// Find Computer Science students, show only their names
db.students.find(
  { major: "Computer Science" },
  { name: 1, _id: 0 }
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Sorting Results</p>
            <p className="text-muted-foreground text-sm mb-3">
              You can sort your results in ascending or descending order using <code>sort()</code>:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Sort by age (ascending: youngest first)
db.students.find().sort({ age: 1 })       // 1 = ascending

// Sort by age (descending: oldest first)
db.students.find().sort({ age: -1 })      // -1 = descending

// Sort by multiple fields: first by major, then by age
db.students.find().sort({ major: 1, age: -1 })`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Limiting and Skipping Results</p>
            <p className="text-muted-foreground text-sm mb-3">
              For large collections, you might want to limit how many results you get or skip some results (useful for pagination):
            </p>
            <CodeBlock
              language="javascript"
              code={`// Get only the first 5 students
db.students.find().limit(5)

// Skip the first 10 students, then get the next 5
db.students.find().skip(10).limit(5)
// This is how pagination works!

// Count how many documents match
db.students.find({ major: "Computer Science" }).count()

// Chain them all together: find, sort, skip, limit
db.students.find({ age: { $gte: 20 } })
  .sort({ age: 1 })
  .skip(0)
  .limit(10)`}
            />
          </div>
        </div>
      </LessonSection>

      <LessonSection id="update" title="Updating Data (Update Operations)">
        <p className="text-muted-foreground mb-4">
          After inserting data, you&apos;ll often need to change it. Maybe a student changes their major, or their age increases, or you need to add new information. In MongoDB, we <strong>&quot;update&quot;</strong> documents to modify existing data.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Important Concept: Update Operators
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            When updating, you don&apos;t directly set values. Instead, you use <strong>update operators</strong> that start with <code>$</code> to tell MongoDB HOW to update the data. The most common is <code>$set</code>, which sets a field to a new value.
          </p>
          <p className="text-sm text-muted-foreground">
            Think of it like giving instructions: &quot;SET the major to Computer Science&quot; or &quot;INCREASE the age by 1&quot;.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Updating One Document</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>updateOne()</code> to modify the first document that matches your search criteria. It has two parts: <strong>what to find</strong> and <strong>what to change</strong>.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Update Sarah's major to Data Science
db.students.updateOne(
  { name: "Sarah Johnson" },          // WHAT TO FIND: Find Sarah
  { $set: { major: "Data Science" } } // WHAT TO CHANGE: Set new major
)

// Update multiple fields at once
db.students.updateOne(
  { name: "Mike Chen" },
  { 
    $set: { 
      major: "Computer Science",
      email: "mike.new@university.edu"
    } 
  }
)

// If the field doesn't exist, it will be added!
db.students.updateOne(
  { name: "Emily Davis" },
  { $set: { gpa: 3.8 } }  // Adds a new "gpa" field
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Updating Multiple Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>updateMany()</code> when you want to update ALL documents that match your criteria. Perfect for bulk updates!
            </p>
            <CodeBlock
              language="javascript"
              code={`// Give all Computer Science students a new field
db.students.updateMany(
  { major: "Computer Science" },
  { $set: { department: "CS Department" } }
)

// Add a status field to all students under 21
db.students.updateMany(
  { age: { $lt: 21 } },
  { $set: { status: "underclassman" } }
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">More Update Operators</p>
            <p className="text-muted-foreground text-sm mb-3">
              Besides <code>$set</code>, there are other useful operators for different types of updates:
            </p>
            <CodeBlock
              language="javascript"
              code={`// $inc - Increase (or decrease) a number
// Useful for ages, scores, counters, etc.
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $inc: { age: 1 } }  // Increase age by 1
)

// Decrease by using negative numbers
db.students.updateOne(
  { name: "Mike Chen" },
  { $inc: { age: -1 } }  // Decrease age by 1
)

// $unset - Remove a field completely
db.students.updateOne(
  { name: "Emily Davis" },
  { $unset: { gpa: "" } }  // Remove the gpa field
)

// $rename - Change the name of a field
db.students.updateMany(
  {},  // All documents
  { $rename: { "email": "emailAddress" } }  // Rename field
)`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Working with Arrays</p>
            <p className="text-muted-foreground text-sm mb-3">
              If a field contains an array (like a list of hobbies or courses), you can add or remove items:
            </p>
            <CodeBlock
              language="javascript"
              code={`// First, let's add a hobbies array to a student
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $set: { hobbies: ["reading", "coding"] } }
)

// $push - Add an item to an array
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $push: { hobbies: "gaming" } }  // Now: ["reading", "coding", "gaming"]
)

// $pull - Remove a specific item from an array
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $pull: { hobbies: "gaming" } }  // Back to: ["reading", "coding"]
)

// Add multiple items at once
db.students.updateOne(
  { name: "Sarah Johnson" },
  { $push: { hobbies: { $each: ["music", "sports"] } } }
)`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Quick Reference: Update Operators</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><code>$set</code> — Set a field to a new value (or create it if it doesn&apos;t exist)</p>
              <p><code>$inc</code> — Increase or decrease a number</p>
              <p><code>$unset</code> — Remove a field</p>
              <p><code>$rename</code> — Rename a field</p>
              <p><code>$push</code> — Add an item to an array</p>
              <p><code>$pull</code> — Remove an item from an array</p>
            </div>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="delete" title="Deleting Data (Delete Operations)">
        <p className="text-muted-foreground mb-4">
          Sometimes you need to remove data from your database. Maybe a student graduates, or you need to clean up old records. In MongoDB, we <strong>&quot;delete&quot;</strong> documents to remove them permanently.
        </p>

        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-red-900 dark:text-red-300 mb-2">
            Warning: Deletions are Permanent!
          </p>
          <p className="text-sm text-muted-foreground">
            Unlike updating where you can change data back, deleted documents are gone forever. Always be careful with delete operations, especially <code>deleteMany()</code>! It&apos;s a good idea to run a <code>find()</code> query first to see what you&apos;re about to delete.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Deleting One Document</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>deleteOne()</code> to remove a single document. If multiple documents match, only the first one found will be deleted.
            </p>
            <CodeBlock
              language="javascript"
              code={`// Delete a specific student by name
db.students.deleteOne({ name: "Mike Chen" })

// Delete the first student who is under 18
db.students.deleteOne({ age: { $lt: 18 } })

// Tip: First check what you're deleting!
db.students.find({ name: "Mike Chen" })  // Check if this is what you want
db.students.deleteOne({ name: "Mike Chen" })  // Then delete`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Deleting Multiple Documents</p>
            <p className="text-muted-foreground text-sm mb-3">
              Use <code>deleteMany()</code> to remove ALL documents that match your criteria. Be extra careful with this one!
            </p>
            <CodeBlock
              language="javascript"
              code={`// DANGER! This deletes ALL Computer Science students
db.students.deleteMany({ major: "Computer Science" })

// Delete all students under 18
db.students.deleteMany({ age: { $lt: 18 } })

// Pro tip: Check what you're deleting first!
db.students.find({ major: "Computer Science" }).count()  // How many?
db.students.deleteMany({ major: "Computer Science" })    // Then delete

// MongoDB tells you how many were deleted:
// { acknowledged: true, deletedCount: 5 }`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Deleting Everything from a Collection</p>
            <p className="text-muted-foreground text-sm mb-3">
              To delete ALL documents but keep the collection:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Delete every single document (VERY DANGEROUS!)
db.students.deleteMany({})  // Empty object = match everything

// Or just drop the entire collection:
db.students.drop()  // Removes collection completely
// Returns: true`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Deleting an Entire Database</p>
            <p className="text-muted-foreground text-sm mb-3">
              To remove an entire database with all its collections:
            </p>
            <CodeBlock
              language="javascript"
              code={`// Make absolutely sure you're in the right database!
db  // Check which database you're in

// Then drop it
db.dropDatabase()

// Confirm it's gone
show dbs  // Database won't appear anymore`}
            />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-4 rounded-md mt-4">
          <p className="font-semibold text-sm text-green-900 dark:text-green-300 mb-1">Pro Tip: Always Test First!</p>
          <p className="text-sm text-muted-foreground">
            Run a <code>find()</code> query with the same criteria before deleting. This lets you see exactly what will be deleted. Think of it like looking in the trash can before emptying it!
          </p>
        </div>
      </LessonSection>

      <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-900 rounded-lg overflow-hidden">
        <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Congratulations!</h3>
        <p className="text-muted-foreground mb-4 text-sm sm:text-base break-words">
          You&apos;ve learned the fundamentals of MongoDB and CRUD operations! You can now create databases, add data, search for it, update it, and delete it.
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 break-words">
          Next, learn how to use MongoDB in your Node.js applications with the MongoDB driver and Mongoose!
        </p>
        <Button
          onClick={() => router.push('/topic-6/mongodb-nodejs')}
          size="sm"
          className="text-xs sm:text-sm md:text-base w-full sm:w-auto"
        >
          <span className="whitespace-nowrap">Continue to MongoDB with Node.js →</span>
        </Button>
      </div>
    </LessonLayout>
  )
}
