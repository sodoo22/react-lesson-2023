import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }
    const newTodo = new this.todoModel(createTodoDto);

    const result = await newTodo.save();
    return result;
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  findOne(id: string) {
    const result = this.todoModel.findById({ _id: id });
    return result;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const result = await this.todoModel.updateOne({ _id: id }, updateTodoDto);
    return result;
  }

  async remove(id: string) {
    console.log(id);
    const result = await this.todoModel.findByIdAndDelete({ _id: id });
    return result;
  }
}
