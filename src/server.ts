import app from "./app.js";

const bootstrap = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
};

bootstrap();
