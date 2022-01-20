interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // outra sintaxe seria usar assim Array<String>
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}
// Data Transfer Object (DDD)

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
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

export default EmailService;