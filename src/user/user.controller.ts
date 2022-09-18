import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { CourseArrayDto } from './dto/courseArray.dto'

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async register(@Body() user: RegisterDto) {
    return this.userService.register(user)
  }

  @Get('verify')
  async verifyUser(@Query('token') token: string) {
    return this.userService.verifyUser(token)
  }

  @Post('login')
  async login(@Body() user: LoginDto) {
    return this.userService.login(user)
  }

  @Post('logout')
  async logout() {}

  @Put(':userId/courses')
  async updateCourseForUser(@Param('userId') userId, @Body() courses: CourseArrayDto) {
    return this.userService.updateCourseForUser(userId, courses)
  }
}
