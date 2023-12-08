// Import required modules from Next.js and OpenAI
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Create an instance of the OpenAI class with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to wait for the completion of an OpenAI thread run
const waitForCompletion = async (thread_id, run_id) => {
  let run = await openai.beta.threads.runs.retrieve(thread_id, run_id);
  while (run.status !== 'completed') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Waiting for completion...');
    run = await openai.beta.threads.runs.retrieve(thread_id, run_id);
    console.log(run);
  }
  return run;
};

// Default handler function for the Next.js API route
export default function handler(req, res) {
  // Function to retrieve data from OpenAI and handle the response
  const getData = async (req, res) => {
    // Initialize thread and run IDs
    let threadId = null;
    let runID = null;

    // Create a new OpenAI thread
    const thread = await openai.beta.threads.create();
    threadId = thread.id;

    // Add a user message to the thread
    const message = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: `${req.body.message}`,
    });

    // Create a new run in the thread using an assistant
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    });

    console.log(run);
    runID = run.id;

    // Wait for the completion of the run
    await waitForCompletion(threadId, runID);

    // List all messages in the thread
    const messages = await openai.beta.threads.messages.list(threadId);
    messages.data.forEach(message => {
      console.log("--------------------------------------------");
      console.log(message.content[0].text.value);
      console.log("--------------------------------------------");
    });

    // Extract the last message from the response
    let lastMessage = messages.body.data[0].content[0].text.value;
    lastMessage = lastMessage.substring(
      lastMessage.indexOf("["),
      lastMessage.lastIndexOf("]") + 1
    );

    // Send the last message in the response
    res.status(200).json({ lastMessage });
  };

  // Invoke the getData function with the request and response objects
  getData(req, res);
}
