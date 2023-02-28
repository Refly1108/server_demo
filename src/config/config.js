const config = {
  url: {
    save: "http://localhost:8080/setWish",
    getlist: "http://localhost:8080/getWish",
    getSN: "http://localhost:3001/sn",
  },

  pages: {
    home: "home",
    printList: "printList",
    input: "input",
    welcome: "welcome",
    success: "success",
    failed: "failed",
  },
  wxurl: {
    access_token: "https://api.weixin.qq.com/sns/oauth2/access_token?",
    re_access_token: "https://api.weixin.qq.com/sns/oauth2/refresh_token??",
    userinfo: "https://api.weixin.qq.com/sns/userinfo??",
  },

  xpyun: {
    apis: {
      getPrinter: {
        url: "/api/openapi/ddPrinters",
        method: "POST",
      },
      printRecept: {
        url: "/api/openapi/xprinter/print",
        method: "POST",
      },
      getSN: {
        url: "/api/openapi/xprinter/queryOrderStatis",
        method: "POST",
      },
    },
  },
};

module.exports = config
