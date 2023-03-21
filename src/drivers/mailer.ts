import sgMail, { MailDataRequired } from "@sendgrid/mail";
// import Config from "../config";

const apiKey =
  "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";
if (!apiKey) {
  console.error("Missing SendGrid Key");
  throw "SOme error";
}

// Here we set the SendGrid API key
sgMail.setApiKey(apiKey);

export class Mailer {
  static sendMail({
    email,
    tempelateId,
    data,
  }: {
    email: string;
    tempelateId: string;
    data: Object;
  }) {
    new Promise((resolve, reject) => {
      try {
        const message: MailDataRequired = {
          subject: "Forgot Password",
          to: email,
          from: "onlyappasaheb4@gmail.com",
          templateId: tempelateId,
          dynamicTemplateData: data,
        };
        (async () => {
          try {
            const res = await sgMail.send(message);
            console.log("Mail Success", res);
            resolve(true);
          } catch (error: any) {
            if (error.response) {
              console.error(error.response.body);
            }
          }
        })();
      } catch (error) {
        reject(error);
      }
    });
  }
}

export class ContactUsMailer {
  static sendMail({ data }: { data: any }) {
    new Promise((resolve, reject) => {
      try {
        const message = {
          subject: "ContactUs Response",
          to: "malavnagar90@gmail.com",
          from: "malavnagar90@gmail.com",
          html: `<p>FirstName : ${data?.contactUsUserDetail?.firstName}</p> <br/><p>Email Id:${data?.contactUsUserDetail?.email}</p><br/><p>Message:${data?.contactUsUserDetail?.message}</p>`,
        };
        (async () => {
          try {
            const res = await sgMail.send(message);
            resolve(res);
          } catch (error: any) {
            if (error.response) {
              console.error(error.response.body);
            }
          }
        })();
      } catch (error) {
        reject(error);
      }
    });
  }
}
