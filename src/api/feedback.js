import { prisma } from "../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    try {
      const feedback = await prisma.feedback.create({
        data: { name, email, message },
      });
      return res.status(201).json(feedback);
    } catch (error) {
      return res.status(500).json({ error: "Failed to save feedback" });
    }
  } else if (req.method === "GET") {
    try {
      const feedbacks = await prisma.feedback.findMany({
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(feedbacks);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch feedbacks" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
