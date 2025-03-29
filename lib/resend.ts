"use server";

import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async() => {
    await resend.emails.send({
        from: 'augustedrose@gmail.com',
        to: 'christiansabitimunanga@gmail.com',
        subject: 'hello world',
        text: 'it works!',
      });
}