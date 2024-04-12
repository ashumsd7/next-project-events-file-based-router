import fs from "fs";
import path from "path";
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
    const filePath = path.join(process.cwd(), "data", "feedback.json");

    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    data.push(payload);

    fs.writeFileSync(filePath, JSON.stringify(data));
    // send back a response
    res.status(201).json({
      data: JSON.stringify(data),
      message: "Thanks for your feedback!",
    });
  } else {
    res.status(200).json({
      message: "This works",
    });
  }
}

export default handler;
