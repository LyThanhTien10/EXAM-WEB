import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import User from '../user/user.entity'
@Entity()
class Course {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public title: string

  @Column()
  public status: string

  @Column()
  public totalExam: number

  @ManyToOne(() => User, (users: User) => users.courses)
  public users: User
}

export default Course
