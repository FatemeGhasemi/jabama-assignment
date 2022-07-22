import {EmailAdapterInterface} from "./email/emailAdapterInterface";
import {GmailAdapter} from "./email/gmailAdapter";
import {MockEmailAdapter} from "./email/mockEmailAdapter";
const gmailAdapter = new GmailAdapter()
const mockEmailAdapter = new MockEmailAdapter()

export const getEmailAdapter = ():EmailAdapterInterface =>{
   switch (process.env.EMAIL_ADAPTER){
       // We may have more email adapters in future
       case 'gmail':
           return  gmailAdapter
       default:
           return mockEmailAdapter
   }
}