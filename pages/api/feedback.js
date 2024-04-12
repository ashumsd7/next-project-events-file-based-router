import fs from "fs";
import path from "path";

function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}
function handler(req, res) {
  // receive GET | POST | DELETE | PUT | PATCH requests

  if (req.method === "POST") {
    //extract the data
    const body = req.body;
    const { email, text } = body;

    const payload = {
      id: new Date().toISOString(),
      email: email,
      text: text,
    };
    console.log("received payload", payload);

    // store in a databse
    const filePath = buildFeedbackPath();

    const data = extractFeedback(filePath);

    data.push(payload);

    fs.writeFileSync(filePath, JSON.stringify(data));
    // send back a response
    res.status(201).json({
      data: JSON.stringify(data),
      message: "Thanks for your feedback!",
    });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({
      data: data,
    });
  }
}

export default handler;
