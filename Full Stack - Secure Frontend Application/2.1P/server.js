require("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (msg) => {
    await sgMail.send(msg);
    console.log("Message Sent Sucessfully!");
};

sendMail({
    to: "akshit4758.be23@chitkara.edu.in",
    from: "akshit4758.be23@chitkara.edu.in",
    subject: "Task 2.1P Completed!",
    text: "Welcome To Our Website!",
});