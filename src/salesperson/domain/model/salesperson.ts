import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Salesperson {
  @Prop({ required: true })
  salesperson_name: string;

  @Prop()
  registration_no: string;

  @Prop()
  registration_start_date: Date;

  @Prop()
  registration_end_date: Date;

  @Prop()
  estate_agent_name: string;

  @Prop()
  estate_agent_license_no: string;
}

export const SalespersonSchema = SchemaFactory.createForClass(Salesperson);
