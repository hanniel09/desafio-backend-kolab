import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({length: 30})
  username: string

  @Column()
  password: string

  @Column({nullable: true})
  parentUserId?: string;

  @ManyToOne(() => User, user => user.children, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parentUserId' })
  parent?: User;

  @OneToMany(() => User, user => user.parent)
  children?: User[];
}
