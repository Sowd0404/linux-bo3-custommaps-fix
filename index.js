const fs = require("fs");
const path = require("path");
fs.readdirSync(__dirname, "utf-8").filter((file) => path.extname(file) !== ".js").forEach((entry) => {
    const joinedPath = path.join(__dirname, entry);
    const workshop = path.join(joinedPath, "workshop.json")
    console.log(entry)

    if (!fs.existsSync(workshop)) return console.log("error");
    const { FolderName } = JSON.parse(fs.readFileSync(workshop, "utf-8"));

    fs.renameSync(joinedPath, path.join(__dirname, FolderName));
    if (!fs.existsSync(path.join(path.join(__dirname, FolderName), "zone"))) {
        fs.mkdirSync(path.join(__dirname, FolderName, "zone"));
    }

    fs.readdirSync(path.join(__dirname, FolderName)).forEach((workshopfile) => {
        if (workshopfile !== "zone") {
            const oldFile = path.join(__dirname, FolderName, workshopfile)
            const newFile = path.join(__dirname, FolderName, "zone", workshopfile)
            fs.renameSync(oldFile, newFile);
        }
    })
});