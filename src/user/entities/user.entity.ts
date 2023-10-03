import { Exclude } from "class-transformer";
import { AllowNull, Column, DataType, IsUUID, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({ tableName: 'users', updatedAt: false, deletedAt: false })
export class User extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column({ type: DataType.STRING(36) })
    id: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    name: string

    @Unique
    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    email: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    password: string
}
