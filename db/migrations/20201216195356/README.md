# Migration `20201216195356`

This migration has been generated by Adam Siekierski at 12/16/2020, 8:53:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201216193648..20201216195356
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -39,7 +39,7 @@
   createdAt   DateTime @default(now())
   value       Float
   name        String
   description String?
-  User        User?    @relation(fields: [userId], references: [id])
+  user        User?    @relation(fields: [userId], references: [id])
   userId      Int?
 }
```


