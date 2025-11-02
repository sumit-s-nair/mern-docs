'use client'

import { LessonLayout } from "@/components/lesson/lesson-layout"
import { LessonSection } from "@/components/lesson/lesson-section"
import { CodeBlock } from "@/components/lesson/code-block"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function MongoDBNodeJSPage() {
  const router = useRouter()

  return (
    <LessonLayout
      title="MongoDB with Node.js"
      intro="Learn how to use MongoDB in your Node.js applications! Master the MongoDB driver, Mongoose ODM, indexing, aggregation, and schema design patterns for production-ready apps."
      toc={[
        { href: "#nodejs-driver", label: "MongoDB Node.js Driver" },
        { href: "#mongoose", label: "Using Mongoose ODM" },
        { href: "#indexes", label: "Database Indexing" },
        { href: "#aggregation", label: "Aggregation Framework" },
        { href: "#schema-design", label: "Schema Design Patterns" },
        { href: "#best-practices", label: "Best Practices" },
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
          onClick={() => router.push('/topic-6/mongodb-basics')}
          className="text-xs sm:text-sm shrink-0"
        >
          <span className="whitespace-nowrap">MongoDB Basics</span>
        </Button>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-6">
        <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
          Prerequisites
        </p>
        <p className="text-sm text-muted-foreground">
          Make sure you understand MongoDB basics and CRUD operations. If you haven&apos;t, check out the <button onClick={() => router.push('/topic-6/mongodb-basics')} className="text-primary underline">MongoDB Basics lesson</button> first!
        </p>
      </div>

      <LessonSection id="nodejs-driver" title="MongoDB Node.js Driver">
        <p className="text-muted-foreground mb-4">
          While the MongoDB shell is great for learning, real applications need to interact with MongoDB programmatically. The MongoDB Node.js driver allows you to perform all database operations directly from your JavaScript code.
        </p>

        <div className="bg-muted/50 p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Installation</p>
          <CodeBlock
            language="bash"
            code={`# Install the MongoDB driver
npm install mongodb

# Optional: Install dotenv for environment variables
npm install dotenv`}
          />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Basic Connection</p>
            <p className="text-muted-foreground text-sm mb-3">
              The first step is connecting to your MongoDB database. You create a MongoClient and connect to your database server.
            </p>
            <CodeBlock
              language="javascript"
              code={`const { MongoClient } = require('mongodb');

// Connection string for local MongoDB
const uri = 'mongodb://localhost:27017';

// Or for MongoDB Atlas (cloud)
// const uri = 'mongodb+srv://username:password@cluster.mongodb.net/myDatabase';

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB!');

    // Access a database
    const db = client.db('schoolDB');
    
    // Access a collection
    const students = db.collection('students');

    // Now you can perform operations!
    const result = await students.findOne({ name: 'Sarah' });
    console.log(result);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Always close the connection when done
    await client.close();
  }
}

run();`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Using Environment Variables</p>
            <p className="text-muted-foreground text-sm mb-3">
              Never hardcode your connection string! Store it in environment variables for security.
            </p>
            <CodeBlock
              language="bash"
              code={`# Create a .env file in your project root
MONGODB_URI=mongodb://localhost:27017/schoolDB`}
            />
            <CodeBlock
              language="javascript"
              code={`// app.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// Load connection string from environment variable
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();  // Uses database from URI
    
    // Your code here...
    
  } finally {
    await client.close();
  }
}

run();`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">CRUD Operations with Node.js Driver</p>
            <p className="text-muted-foreground text-sm mb-3">
              All the CRUD operations you learned in the shell work the same way in Node.js! The syntax is almost identical.
            </p>
            <CodeBlock
              language="javascript"
              code={`const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function crudExamples() {
  await client.connect();
  const db = client.db('schoolDB');
  const students = db.collection('students');

  // CREATE - Insert documents
  await students.insertOne({
    name: 'John Doe',
    age: 20,
    major: 'Computer Science'
  });

  await students.insertMany([
    { name: 'Jane Smith', age: 21, major: 'Mathematics' },
    { name: 'Bob Johnson', age: 19, major: 'Physics' }
  ]);

  // READ - Find documents
  const student = await students.findOne({ name: 'John Doe' });
  console.log(student);

  const allStudents = await students.find({}).toArray();
  console.log(allStudents);

  const csStudents = await students.find({ 
    major: 'Computer Science' 
  }).toArray();

  // UPDATE - Modify documents
  await students.updateOne(
    { name: 'John Doe' },
    { $set: { age: 21 } }
  );

  await students.updateMany(
    { major: 'Computer Science' },
    { $set: { department: 'CS Dept' } }
  );

  // DELETE - Remove documents
  await students.deleteOne({ name: 'Bob Johnson' });

  await students.deleteMany({ age: { $lt: 18 } });

  await client.close();
}

crudExamples();`}
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md">
            <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
              Important: .toArray()
            </p>
            <p className="text-sm text-muted-foreground">
              When using <code>find()</code> in Node.js, it returns a cursor (not the actual data). You need to call <code>.toArray()</code> to get the actual documents as an array. With <code>findOne()</code>, you get the document directly.
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="mongoose" title="Using Mongoose ODM">
        <p className="text-muted-foreground mb-4">
          Mongoose is an Object Data Modeling (ODM) library that makes working with MongoDB easier. It adds structure, validation, and many helpful features on top of the MongoDB driver.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Why Use Mongoose?
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><strong>Schema Validation</strong> - Define structure and rules for your data</li>
            <li><strong>Type Casting</strong> - Automatic conversion to correct data types</li>
            <li><strong>Middleware</strong> - Run code before/after database operations</li>
            <li><strong>Query Building</strong> - Chainable methods for complex queries</li>
            <li><strong>Better for Large Apps</strong> - More structure and organization</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Installation</p>
            <CodeBlock
              language="bash"
              code={`npm install mongoose`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Connecting with Mongoose</p>
            <CodeBlock
              language="javascript"
              code={`const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

// Or using async/await
async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/schoolDB');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

connectDB();`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Defining a Schema</p>
            <p className="text-muted-foreground text-sm mb-3">
              A <strong>schema</strong> defines the structure of your documents. It&apos;s like a blueprint that tells MongoDB what fields your documents should have and what types they should be.
            </p>
            <CodeBlock
              language="javascript"
              code={`const mongoose = require('mongoose');

// Define a schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,        // This field is required
    trim: true             // Remove whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,          // Must be unique
    lowercase: true        // Convert to lowercase
  },
  age: {
    type: Number,
    min: 0,               // Minimum value
    max: 120              // Maximum value
  },
  major: String,          // Simple field definition
  gpa: Number,
  enrollmentDate: {
    type: Date,
    default: Date.now     // Default to current date
  },
  hobbies: [String],      // Array of strings
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true        // Adds createdAt and updatedAt automatically
});

// Create a model from the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">CRUD with Mongoose</p>
            <p className="text-muted-foreground text-sm mb-3">
              Mongoose provides cleaner, more intuitive methods for CRUD operations:
            </p>
            <CodeBlock
              language="javascript"
              code={`const Student = require('./models/Student');

async function mongooseExamples() {
  // CREATE
  // Method 1: Using create()
  const student1 = await Student.create({
    name: 'Alice',
    email: 'alice@university.edu',
    age: 20,
    major: 'Computer Science'
  });

  // Method 2: Using new and save()
  const student2 = new Student({
    name: 'Bob',
    email: 'bob@university.edu',
    age: 21
  });
  await student2.save();

  // READ
  // Find all
  const allStudents = await Student.find();

  // Find with criteria
  const csStudents = await Student.find({ major: 'Computer Science' });

  // Find one
  const alice = await Student.findOne({ name: 'Alice' });

  // Find by ID
  const student = await Student.findById('507f1f77bcf86cd799439011');

  // With query methods (chainable)
  const results = await Student
    .find({ age: { $gte: 20 } })
    .sort({ name: 1 })
    .limit(10)
    .select('name email');  // Only return these fields

  // UPDATE
  // Find and update (returns updated document)
  const updated = await Student.findOneAndUpdate(
    { name: 'Alice' },
    { age: 21 },
    { new: true }          // Return updated document
  );

  // Update by ID
  await Student.findByIdAndUpdate(
    '507f1f77bcf86cd799439011',
    { $inc: { age: 1 } }
  );

  // Update many
  await Student.updateMany(
    { major: 'Computer Science' },
    { $set: { department: 'CS' } }
  );

  // DELETE
  await Student.findOneAndDelete({ name: 'Bob' });
  await Student.findByIdAndDelete('507f1f77bcf86cd799439011');
  await Student.deleteMany({ age: { $lt: 18 } });

  // Count documents
  const count = await Student.countDocuments({ major: 'Computer Science' });
}

mongooseExamples();`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Mongoose vs Native Driver</p>
            <p className="text-sm text-muted-foreground mb-2">
              Choose based on your needs:
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li><strong>Use Mongoose if:</strong> You want structure, validation, and are building a larger app</li>
              <li><strong>Use Native Driver if:</strong> You want maximum flexibility and minimal overhead</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="indexes" title="Database Indexing">
        <p className="text-muted-foreground mb-4">
          Indexes are special data structures that make finding documents much faster. Without indexes, MongoDB has to scan every single document to find what you&apos;re looking for. With indexes, it can jump directly to the right documents.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            Think of it Like a Book Index
          </p>
          <p className="text-sm text-muted-foreground">
            Imagine looking for the word &quot;database&quot; in a 500-page book. Without an index, you&apos;d have to read every page. With an index at the back of the book, you can jump straight to the right pages. That&apos;s exactly what database indexes do!
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">When to Use Indexes</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Fields you frequently search by (e.g., email, username)</li>
              <li>Fields you sort by (e.g., createdAt, price)</li>
              <li>Fields used in complex queries</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Creating Indexes in Mongoose</p>
            <CodeBlock
              language="javascript"
              code={`const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,    // Automatically creates a unique index
    index: true      // Creates a regular index
  },
  name: {
    type: String,
    index: true      // Good for searching by name
  },
  createdAt: {
    type: Date,
    index: true      // Good for sorting by date
  }
});

// Create a compound index (index on multiple fields)
studentSchema.index({ major: 1, age: -1 });
// 1 = ascending, -1 = descending

// Text index for full-text search
studentSchema.index({ bio: 'text' });`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Creating Indexes with Native Driver</p>
            <CodeBlock
              language="javascript"
              code={`const students = db.collection('students');

// Single field index
await students.createIndex({ email: 1 });

// Unique index
await students.createIndex({ email: 1 }, { unique: true });

// Compound index
await students.createIndex({ major: 1, age: -1 });

// Text index
await students.createIndex({ bio: 'text' });

// View all indexes
const indexes = await students.indexes();
console.log(indexes);`}
            />
          </div>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-4 rounded-md">
            <p className="text-sm font-semibold text-red-900 dark:text-red-300 mb-2">
              Index Trade-offs
            </p>
            <p className="text-sm text-muted-foreground">
              Indexes make <strong>reads faster</strong> but <strong>writes slower</strong> (because the index needs to be updated). They also take up disk space. Don&apos;t create indexes on every field - only on fields you actually search/sort by frequently!
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="aggregation" title="Aggregation Framework">
        <p className="text-muted-foreground mb-4">
          Aggregation allows you to process and analyze your data. Think of it like advanced filtering, grouping, and calculations - similar to what you might do in Excel with pivot tables or SQL with GROUP BY.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-4 rounded-md mb-4">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
            What is Aggregation?
          </p>
          <p className="text-sm text-muted-foreground">
            Aggregation is like a pipeline where data flows through multiple stages. Each stage transforms or filters the data, and the output of one stage becomes the input of the next.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Basic Aggregation Example</p>
            <p className="text-muted-foreground text-sm mb-3">
              Let&apos;s count how many students are in each major:
            </p>
            <CodeBlock
              language="javascript"
              code={`const Student = require('./models/Student');

// Count students by major
const majorCounts = await Student.aggregate([
  {
    $group: {
      _id: '$major',       // Group by major field
      count: { $sum: 1 }   // Count documents in each group
    }
  },
  {
    $sort: { count: -1 }   // Sort by count (descending)
  }
]);

// Result:
// [
//   { _id: 'Computer Science', count: 45 },
//   { _id: 'Mathematics', count: 32 },
//   { _id: 'Physics', count: 28 }
// ]`}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Common Aggregation Stages</p>
            <CodeBlock
              language="javascript"
              code={`// Multi-stage aggregation pipeline
const results = await Student.aggregate([
  // Stage 1: FILTER - Match only active students
  { 
    $match: { 
      isActive: true,
      age: { $gte: 18 }
    } 
  },
  
  // Stage 2: GROUP - Calculate statistics by major
  {
    $group: {
      _id: '$major',
      averageAge: { $avg: '$age' },
      totalStudents: { $sum: 1 },
      maxGPA: { $max: '$gpa' },
      minGPA: { $min: '$gpa' }
    }
  },
  
  // Stage 3: SORT - Sort by average age
  { 
    $sort: { averageAge: -1 } 
  },
  
  // Stage 4: LIMIT - Get top 5
  { 
    $limit: 5 
  },
  
  // Stage 5: PROJECT - Reshape the output
  {
    $project: {
      major: '$_id',
      avgAge: { $round: ['$averageAge', 1] },
      students: '$totalStudents',
      _id: 0
    }
  }
]);`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="text-sm font-semibold mb-2">Common Aggregation Operators</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li><code>$match</code> — Filter documents (like find())</li>
              <li><code>$group</code> — Group documents and calculate aggregates</li>
              <li><code>$sort</code> — Sort documents</li>
              <li><code>$limit</code> — Limit number of results</li>
              <li><code>$skip</code> — Skip documents</li>
              <li><code>$project</code> — Reshape documents, select fields</li>
              <li><code>$lookup</code> — Join with another collection</li>
              <li><code>$unwind</code> — Deconstruct arrays</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="schema-design" title="Schema Design Patterns">
        <p className="text-muted-foreground mb-4">
          Even though MongoDB is flexible, good schema design is crucial for performance. The main decision is whether to <strong>embed</strong> related data or <strong>reference</strong> it.
        </p>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Pattern 1: Embedding (Nesting)</p>
            <p className="text-sm text-muted-foreground mb-3">
              Store related data inside the same document. Good when data is accessed together.
            </p>
            <CodeBlock
              language="javascript"
              code={`// User with embedded address
{
  _id: ObjectId("123"),
  name: "Alice",
  email: "alice@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
    country: "USA"
  },
  hobbies: ["reading", "coding", "gaming"]
}

// Use embedding when:
// - Related data is always accessed together
// - One-to-one or one-to-few relationships
// - Data doesn't grow unbounded
// - Data isn't shared across documents`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Advantage:</strong> Get all data in one query (fast!)<br/>
              <strong>Disadvantage:</strong> Duplicated data if the same address is used by multiple users
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-3">Pattern 2: Referencing (Linking)</p>
            <p className="text-sm text-muted-foreground mb-3">
              Store related data in separate collections and link them with IDs. Good for data that&apos;s shared or grows large.
            </p>
            <CodeBlock
              language="javascript"
              code={`// User collection
{
  _id: ObjectId("123"),
  name: "Alice",
  email: "alice@example.com"
}

// Posts collection (references user)
{
  _id: ObjectId("456"),
  title: "Learning MongoDB",
  content: "MongoDB is awesome...",
  authorId: ObjectId("123"),      // Reference to user
  createdAt: ISODate("2024-01-15")
}

// Use referencing when:
// - Data is large or grows unbounded
// - One-to-many or many-to-many relationships
// - Data is shared across multiple documents
// - Data is updated frequently`}
            />
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Advantage:</strong> No duplication, easier to update<br/>
              <strong>Disadvantage:</strong> Requires multiple queries (slower)
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Example: Blog Schema Design</p>
            <CodeBlock
              language="javascript"
              code={`// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  bio: String
});

// Post Schema (with references and embedding)
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'              // Reference to User model
  },
  comments: [{               // Embed comments (one-to-few)
    user: String,
    text: String,
    date: Date
  }],
  tags: [String],            // Embed tags (simple data)
  likes: Number,
  createdAt: Date
});

// Using populate to get referenced data
const posts = await Post.find()
  .populate('author', 'name email')  // Get author details
  .exec();`}
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-md">
            <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
              Design Guidelines
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Consider your <strong>query patterns</strong> - how will you access the data?</li>
              <li>Embed for <strong>high read-to-write ratio</strong></li>
              <li>Reference for <strong>frequently updated</strong> data</li>
              <li>Document size limit is <strong>16MB</strong></li>
              <li>Avoid deeply nested structures (&gt;100 levels)</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <LessonSection id="best-practices" title="Best Practices">
        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">1. Connection Management</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Reuse connections - don&apos;t create a new connection for every query</li>
              <li>Use connection pooling (default in most drivers)</li>
              <li>Always close connections when shutting down your app</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">2. Error Handling</p>
            <CodeBlock
              language="javascript"
              code={`async function safeOperation() {
  try {
    const result = await Student.findOne({ email: 'test@example.com' });
    if (!result) {
      throw new Error('Student not found');
    }
    return result;
  } catch (error) {
    console.error('Database error:', error.message);
    throw error;  // Re-throw for caller to handle
  }
}`}
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">3. Security</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Never expose connection strings in code</li>
              <li>Use environment variables for sensitive data</li>
              <li>Add <code>.env</code> to <code>.gitignore</code></li>
              <li>Use authentication in production</li>
              <li>Limit network access (use IP whitelist)</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">4. Performance Tips</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Create indexes on frequently queried fields</li>
              <li>Use projection to fetch only needed fields</li>
              <li>Use <code>lean()</code> in Mongoose for faster queries when you don&apos;t need Mongoose features</li>
              <li>Limit and paginate large result sets</li>
              <li>Use aggregation for complex data processing</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-md">
            <p className="font-semibold mb-2">5. Data Validation</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Define schemas with proper validation rules</li>
              <li>Use required fields where appropriate</li>
              <li>Add min/max constraints for numbers</li>
              <li>Use enum for fields with limited values</li>
              <li>Validate data before saving</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border border-green-200 dark:border-green-900 rounded-lg overflow-hidden">
        <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">You&apos;ve Mastered MongoDB!</h3>
        <p className="text-muted-foreground mb-4 text-sm sm:text-base break-words">
          Congratulations! You now know how to:
        </p>
        <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground space-y-1 mb-4">
          <li className="break-words">Use MongoDB with Node.js and Mongoose</li>
          <li className="break-words">Design efficient schemas</li>
          <li className="break-words">Create indexes for better performance</li>
          <li className="break-words">Use aggregation for data analysis</li>
          <li className="break-words">Follow best practices for production apps</li>
        </ul>
        <p className="text-xs sm:text-sm text-muted-foreground break-words">
          Now you&apos;re ready to build real applications with MongoDB! Practice by building projects like a blog, todo app, or e-commerce store.
        </p>
      </div>
    </LessonLayout>
  )
}
