import { Connection } from 'typeorm';
import { name, address as adr, internet, phone, image } from 'faker';
import { Lead } from '../entities/Lead';

const createData = async (con: Connection) => {
  for (const _ of Array.from({ length: 50 })) {
    const firstName = name.firstName();
    const lastName = name.lastName();
    const email = internet.email();
    const contactNo = phone.phoneNumber();
    const avatar = image.avatar();
    const address = adr.streetAddress();
    try {
      const lead: Partial<Lead> = new Lead(
        firstName,
        lastName,
        email,
        contactNo,
        address,
        avatar
      );
      await con.manager.save(lead);
    } catch (err) {
      console.log(err);
    }
  }
};

export default createData;
