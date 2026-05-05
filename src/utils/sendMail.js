import resend from "../config/nodemailer.config.js";

const sendMail = async ({ to, subject, html }) => {
  const { data, error } = await resend.emails.send({
    from: "Vibely <onboarding@resend.dev>",
    to,
    subject,
    html,
  });

  if (error) {
    console.error("Email error:", error);
    throw new Error(error.message);
  }

  console.log("Email sent:", data);
  return data;
};

export default sendMail;
