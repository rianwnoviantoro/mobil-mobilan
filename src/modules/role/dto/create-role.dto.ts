import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Permission } from 'src/entities/permission.entity';
import { IRole } from 'src/entities/role.entity';

export class CreateRoleDTO implements IRole {
  @IsNotEmpty()
  @IsString()
  type?: string;

  @IsNotEmpty()
  @IsString()
  name?: string;

  permissions?: Permission[];
}
