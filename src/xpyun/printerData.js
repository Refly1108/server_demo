

async function PrinterData(ctx) {
console.log(ctx.params);


await printerData(ctx.params)

ctx.body = {
    status: 0,
    message: '打印成功',
   
  }
}
module.exports = PrinterData