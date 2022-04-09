//Connect to Google Sheets for Database

export const { google } = require("googleapis")
export const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
})
export const getSpreadsheet = async (Sheetname:string) => {
  const client = await auth.getClient

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: Sheetname,
  })
  return getRows

}

export const update123Rows = async (x:number, y:number, a, b, c) => {

  const client = await auth.getClient

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: `Sheet1!A${x}:C${y}`,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [a, b, c],
      ]
    }
  })

}

export const updateSingleRow = async (name:string, x:string, a) => {

  const client = await auth.getClient

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: `${name}!${x}`,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [a],
      ]
    }
  })

}

export const Add123Rows = async (name:string, x, y, a, b, c) => {

  const client = await auth.getClient

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: `${name}!A${x}:C${y}`,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [a, b, c],
      ]
    }
  })

}