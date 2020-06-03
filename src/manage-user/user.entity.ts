import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: number;

  @Column
  userName: string;

  @Column
  email: string;

  @Column
  createdAt: string;

  @Column
  updatedAt: string;

}