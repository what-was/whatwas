/**
 * Using pnpm, `PrismaClient` has to be initialized.
 * Run `npx prisma generate` after a clean `pnpm install`.
 */
import { PrismaClient } from '@prisma/client';
import { prisma } from '~/lib/db';

/**
 * Seeds Database.
 */
async function seed() {
  await prisma.userMeta.deleteMany({});
  console.log(`Database has been successfully seeded with fresh air. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
