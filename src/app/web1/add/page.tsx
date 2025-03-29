"use client";
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios

interface CsvData {
  [key: string]: string;
}

export default function Add(props: any) {
  const [csvData, setCsvData] = useState<CsvData[]>([]);
  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQn95pP29epX62ZmUYHYQcI8YYmmKc8sfx3FaP3IEa631W3gL1BVN9g5-pUebAp5qN_RN_W2cXyUFpv/pub?output=csv'; // Replace with your Google Sheets CSV file URL

  useEffect(() => {
    fetchCSVData(); // Fetch the CSV data when the component mounts
  }, []); // The empty array ensures that this effect runs only once, like componentDidMount

  const fetchCSVData = async () => {
    try {
      const response = await axios.get(csvUrl); // Use Axios to fetch the CSV data
      const parsedCsvData = parseCSV(response.data); // Parse the CSV data into an array of objects
      setCsvData(parsedCsvData); // Set the fetched data in the component's state
      console.log(parsedCsvData); // Now you can work with 'csvData' in your component's state.
    } catch (error) {
      console.error('Error fetching CSV data:', error);
    }
  };

  function parseCSV(csvText: string): CsvData[] {
    const rows = csvText.split(/\r?\n/); // Use a regular expression to split the CSV text into rows while handling '\r'
    const headers = rows[0].split(','); // Extract headers (assumes the first row is the header row)
    const data: CsvData[] = []; // Initialize an array to store the parsed data

    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(','); // Use the regular expression to split the row while handling '\r'
      const rowObject: CsvData = {};
      
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  return (
    <div className="bg-[#ffcdd2] p-6 text-sm">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#e53935]">Customer Feedback</h1>
      {csvData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4 py-2 bg-[#a32a29] text-white">No</th>
                {Object.keys(csvData[0]).map((key) => (
                  <th key={key} className="border px-4 py-2 bg-[#a32a29] text-white">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody className='text-black'>
              {csvData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="border px-4 py-2">{index + 1}</td> {/* Adding row number */}
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="border px-4 py-2 ">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}
