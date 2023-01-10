import fs from "fs";

export const getHome = async (req, res) => {
  return res.render("home");
};

export const readId = (req, res) => {
  const { id } = req.params;
  console.log(res.locals.files);
  const idObj = res.locals.files.find((e) => e.filename === id);
  console.log(id, idObj);
  return res.render("read", { idObj });
};
export const getRead = (req, res) => {
  return res.status(403).render("403");
};
export const postRead = async (req, res) => {
  const { file } = req;
  const data = await fs.readFileSync(file.path, "utf8");
  if (req.session.files === undefined) {
    file.data = data;
    req.session.files = [file];
  } else if (req.session.file !== []) {
    file.data = data;
    req.session.files.push(file);
  }
  return res.render("read", { innerText: data });
};
