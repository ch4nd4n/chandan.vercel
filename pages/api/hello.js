// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  setTimeout(() => {
    res.json({ message: "John Doe" });
  }, 1000);
};
