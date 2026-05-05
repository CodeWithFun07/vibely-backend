import resend from "../config/nodemailer.config.js";

const sendMail = async ({ to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error(error.message);
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error?.message || error);
    throw error;
  }
};

export default sendMail;
