import { createSchema, ExtractDoc, ExtractProps, Type, typedModel } from 'ts-mongoose';

const DecisionLogSchema = createSchema(
  {
    user_id: Type.string({required: true, index: true}),
    title: Type.string({required:true, index: true}),
    type: Type.string({required:true}),
    timestamp: Type.date({required: true, index: true}),
    recipient_id: Type.string({required: true, index: true}),
    start_window: Type.date({required: true, index: true}),
    avg_score: Type.number({required: true})
  }
);
DecisionLogSchema.index({ user_id: 1, title: 1, timestamp: -1, type: 1}, { unique: true })

export const DecisionLog = typedModel('DecisionLog', DecisionLogSchema, 'DecisionLog');
export type DecisionLogDoc = ExtractDoc<typeof DecisionLogSchema>;
export type DecisionLogProps = ExtractProps<typeof DecisionLogSchema>;