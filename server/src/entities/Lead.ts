import { last } from 'lodash';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Call } from './Call';
@Entity('Lead')
export class Lead extends BaseEntity {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    contactNo: string,
    address: string,
    avatar: string
  ) {
    super();
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.contactNo = contactNo),
      (this.address = address),
      (this.avatar = avatar),
      (this.email = email);
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @Column({
    length: 50,
  })
  firstName!: string;
  @Column({
    length: 50,
  })
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  contactNo!: string;

  @Column()
  address!: string;

  @Column({
    nullable: true,
  })
  avatar!: string;

  @Column({
    nullable: true,
  })
  source!: string;

  @OneToMany(() => Call, (Call) => Call.user)
  call!: Call[];
}
