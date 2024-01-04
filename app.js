const express = require('express');
const initializeApp = require('./src/Controllers/initController.js').initializeApp;
const apiRouter = require('./src/Routes/api');

const app = express();

// 中間件、配置等...

// 在應用程式啟動時執行初始化邏輯
initializeApp()
  .then(() => {
    // 將路由模組整合進Express應用程式中
    // app.use('/api', apiRouter);

    // 其他啟動邏輯...
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error during application initialization:', error);
    process.exit(1); // 退出應用程式，因為初始化失敗
  });