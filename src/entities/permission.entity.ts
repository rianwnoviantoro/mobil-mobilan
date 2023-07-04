import { AbstractEntity } from 'src/entities/database.entity';
import { Entity, Column } from 'typeorm';
import { Role } from './role.entity';

export interface IPermission {
  id?: string;
  type?: string;
  name?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  roles?: Role[];
}

@Entity('permissions')
export class Permission extends AbstractEntity<Permission> {
  @Column({ name: 'name', nullable: false, unique: true })
  name: string;

  @Column({ name: 'is_active', nullable: false, default: true })
  is_active: boolean;
}
