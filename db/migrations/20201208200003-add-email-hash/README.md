# Migration `20201208200003-add-email-hash`

This migration has been generated by Adam Siekierski at 12/8/2020, 9:00:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "User" ADD COLUMN     "emailHash" TEXT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201203073135..20201208200003-add-email-hash
--- datamodel.dml
+++ datamodel.dml
@@ -1,31 +1,27 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
-
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
-// --------------------------------------
-
 model User {
-  id             Int       @default(autoincrement()) @id
+  id             Int       @id @default(autoincrement())
   createdAt      DateTime  @default(now())
   updatedAt      DateTime  @updatedAt
   name           String?
   email          String    @unique
+  emailHash      String?
   hashedPassword String?
   role           String    @default("user")
   sessions       Session[]
 }
 model Session {
-  id                 Int       @default(autoincrement()) @id
+  id                 Int       @id @default(autoincrement())
   createdAt          DateTime  @default(now())
   updatedAt          DateTime  @updatedAt
   expiresAt          DateTime?
   handle             String    @unique
```


