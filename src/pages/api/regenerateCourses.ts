import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pass } = req.query;
  if (!pass || pass !== process.env.COURSES_PASSWORD) {
    return res.status(401).json({ message: "Error!" });
  }
  await res.unstable_revalidate("/cursos");
  return res.status(200).json({ message: "Courses has been regerenated!" });
}
