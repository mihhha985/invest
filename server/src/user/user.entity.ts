import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true})
  secondName: string;

  @Column({ unique: true})
  email: string;

  @Column({ unique: true})
  phone: string;

  @Column()
  password: string;

  @Column({ nullable: true})
  avatar: string;

  @Column({ nullable: true})
  activationLink: string; 

  @Column({ default: false })
  isActive: boolean;
}