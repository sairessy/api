import XLSX from 'xlsx';
import path from 'path';
import { __dirname } from '../../config/index.js';

export const home = (req, res) => {
  res.json({
    info: "Welcome to our API 🖖",
  });
};

export const getBairros = (req, res) => {
  const distrito = req.params.distrito;

  // Specify the path to your Excel file
  const excelFilePath = path.join(__dirname, '../../static/api-bairros.xlsx');

  // Read the Excel file
  const workbook = XLSX.readFile(excelFilePath);

  // Get the names of all sheets in the Excel file
  const sheetNames = workbook.SheetNames;

  // Choose the sheet you want to read (assuming the first sheet for this example)
  const selectedSheet = sheetNames[0];

  // Get the data from the selected sheet
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[selectedSheet]);

  res.json({
      distrito: XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[1]]).find(function(obj) {
          return obj.id == distrito
      }),
      bairros: XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[2]]).filter(function(obj) {
          return obj.id_distrito == distrito
      })
  })
};

export const getDistritos = (req, res) => {
  const workbook = XLSX.readFile(path.join(__dirname, '../../static/api-bairros.xlsx'));
  const sheet_name_list = workbook.SheetNames;
  const distritos = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);

  res.json(distritos);
};