import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import {
  fileURLToPath
} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fill_anep_docs = (req, res) => {
  try {
    // return res.status(409).json({turned_off: true});

    fs.rm("./static/anep-docs", {
      recursive: true, force: true
    }, (e) => {
      fs.mkdir("./static/anep-docs", () => {
        // Load the templated docx file
        const templateFile = fs.readFileSync(
          path.resolve(__dirname, "../../../static/vis_template.docx"),
          "binary"
        );
        const zip = new PizZip(templateFile);

        try {
          // Attempt to read all the templated tags
          let outputDocument = new Docxtemplater(zip);

          // Set the data we wish to add to the document
          outputDocument.setData(req.body);

          try {
            // Attempt to render the document (Add data to the template)
            outputDocument.render();

            // Create a buffer to store the output data
            let outputDocumentBuffer = outputDocument
            .getZip()
            .generate({
              type: "nodebuffer"
            });

            // Save the buffer to a file
            const f_name = String(Date.now());
            const vis = f_name + "-vis.docx";

            fs.writeFileSync(
              path.resolve(__dirname, `../../../static/anep-docs/${vis}`),
              outputDocumentBuffer
            );

            res.json({
              vis: "/anep-docs/" + vis,
            });
          } catch (error) {
            console.error(`ERROR Filling out Template:`);
            console.error(error);
          }
        } catch (error) {
          console.error(`ERROR Loading Template:`);
          console.error(error);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

