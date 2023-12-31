import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
import { UserRepository } from '../repositories/user.repository';
  
  @ValidatorConstraint({ async: true })
  export class IsEmailNotRegistered implements ValidatorConstraintInterface {
    constructor(
        private readonly userRepository: UserRepository
    ) {}
  
    validate(email: string | undefined) {
      return this.userRepository.findByEmail(email).then((user) => user === null);
    }
  }
  
  export function EmailNotRegistered(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsEmailNotRegistered,
      });
    };
  }