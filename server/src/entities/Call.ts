import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Lead } from './Lead';

@Entity('Call')
export class Call extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => Lead, (Lead) => Lead.call, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user',
  })
  user!: Lead;

  @Column({
    length: 30,
  })
  callType!: string;

  @Column({
    length: 30,
  })
  callStatus!: string;
}
