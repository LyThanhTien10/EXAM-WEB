import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from './dto/createUser.dto'
@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
