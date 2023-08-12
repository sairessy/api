import express from "express";
import xlsx from 'xlsx'

const router = express.Router()
  
const workbook = xlsx.readFile('./pauta.xlsx')

let worksheets = {}

for (const sheet of workbook.SheetNames) {
    worksheets[sheet] = xlsx.utils.sheet_to_json(workbook.Sheets[sheet])
}

router.get("/", async (req, res) => {
    res.json({
        info: "Welcome p-ffss 🖖",
    });
});

router.get('/all', (req, res) => {
    res.json({data: worksheets[2023]})
})

router.get('/search/:student', (req, res) => {
    const ftd = worksheets[2023]
    .filter(s => s.nome_estudante && s.nome_estudante.toLowerCase().includes(req.params.student.toLowerCase()))
    res.json({data: ftd})
})

export default router