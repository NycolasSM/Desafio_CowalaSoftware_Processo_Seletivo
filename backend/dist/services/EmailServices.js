"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email Enviado para ${to.name}: ${message.subject}`);
    }
}
// class EmailService {
//   sendMail({ to, message }: IMessageDTO) {
//     console.log(`Email Enviado para ${to.name}: ${message.subject}`);
//   }
// }
// class EmailService {
//   sendMail( to: IMailTo, message: IMailMessage ) {
//     console.log(`Email Enviado para ${to.name}: ${message.subject}`);
//   }
// }
exports.default = EmailService;
