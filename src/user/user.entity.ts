import Course from '../course/course.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ unique: true })
  public email: string

  @Column()
  public username: string

  @Column()
  public password: string

  @OneToMany(() => Course, (course: Course) => course.id)
  public courses: Course[]

  @Column({ nullable: true })
  public lastLogin: Date

  @Column({ nullable: true })
  public createAt: Date
}

export default User
