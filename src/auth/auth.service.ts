import { UserService } from '../user/user.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import RegisterDto from './dto/register.dto'
import * as bcrypt from 'bcrypt'
import PostgresErrorCode from '../database/postgresErrorCodes.enum'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  public async register(registrationData: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10)
    console.log(hashedPassword) // tới đây r mà try k tạo đc hàm k thể nào sai đc
    try {
      const createdUser = await this.usersService.create({
        username: registrationData.username,
        email: registrationData.email,
        password: hashedPassword,
      })
      createdUser.password = undefined
      return createdUser
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST)
      }
      console.log(error)
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
