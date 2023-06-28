import mongoose from 'mongoose';

const session = mongoose.startSession();
session.startTransaction();

try {
  const opts = { session };
  const A = await Account.findOne({ name: 'A' }, opts);
  A.balance -= 100;
  await A.save(opts);

  const B = await Account.findOne({ name: 'B' }, opts);
  B.balance += 100;
  await B.save(opts);

  await session.commitTransaction();
  session.endSession();
} catch (error) {
  await session.abortTransaction();
  session.endSession();
  throw error; // Rethrow so calling function sees error
}
